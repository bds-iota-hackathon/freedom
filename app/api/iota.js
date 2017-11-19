const IOTA = require('iota.lib.js');
const hash = require('./hashing')
const faucetApi = require('./faucet')
let iota, seed

function initializeIOTA() {
    iota = new IOTA({
        host: 'http://p103.iotaledger.net',
        port: 14700
    });
}

function createSeedFromPhrase(seedToHash) {
    let privateKey = 'secretsecret'
    let createdSeed = hash.hash(seedToHash + privateKey)
    console.log("SeedToHash:", seedToHash)
    return createdSeed
}

async function getDataFromFaucet() {
    return new Promise(function (resolve, reject) {
        faucetApi.getFaucet((faucet) => {
                resolve(faucet)

        });
    })
}


async function commitDoctorPatientTransaction(doctorId, patientId) {
    try {
        let wasDoctorTransactionCreated, wasPatientTransactionCreated, faucetData
        let doctorsSeed = createSeedFromPhrase(doctorId)
        console.log(`Doctor seed: ${doctorsSeed}`)
        let patientsSeed = createSeedFromPhrase(patientId)
        console.log(`Patients seed: ${patientsSeed}`)
        faucetData = await getDataFromFaucet()
        seed = faucetData.seed
        console.log(`Test seed created: ${seed}`)
        initializeIOTA()
        wasDoctorTransactionCreated = await createTransaction(doctorsSeed)
        if(wasDoctorTransactionCreated){
            wasPatientTransactionCreated = await createTransaction(patientsSeed)
        }
        return wasPatientTransactionCreated
    }
    catch (e) {
        console.log(e)
    }

}

async function listTransactions(entityId) {
        initializeIOTA()
    try {
        let entitySeed = createSeedFromPhrase(entityId)
        let resultsArray = await listTransacionsForSeed(entitySeed)
        return resultsArray
    }
    catch (e) {
        console.log(e)
    }

}


module.exports = {commitDoctorPatientTransaction:commitDoctorPatientTransaction,
    listTransactions:listTransactions}

async function createTransaction(seedOfReceiver) {
    try {
        let wasTransactionIncluded
        initializeIOTA()
        let newAddress = await getNewAddress(seedOfReceiver)
        let transaction = await sendTransaction(newAddress[0])
        console.log(`Sending transaction to address: ${newAddress[0]}`)
        console.log(`Transaction send with hash ${transaction[0].hash}`)
        while (!wasTransactionIncluded) {
            wasTransactionIncluded = await checkIfConfirmed(transaction[0].hash)
            console.log('Transaction not confirmed')
        }
        console.log(`----------------------------------`)
        console.log(`Transaction was confirmed: ${wasTransactionIncluded}`)
        return wasTransactionIncluded

    }
    catch (e) {
        console.log(e)
    }
}




async function getNodeInfo() {
    return new Promise(function (resolve, reject) {
        iota.api.getNodeInfo((error, nodeInfo) => {
            if (error) {
                console.error('getNodeInfo error', error)
                reject(error)
            } else {
                console.log('getNodeInfo result', nodeInfo)
                resolve(nodeInfo)
            }
        });
    })
}

async function getNewAddress(seedToGenerateFrom) {
    return new Promise(function (resolve, reject) {
        iota.api.getNewAddress(seedToGenerateFrom, {security: 2, index: 0, total: 1}, (error, generatedAddress) => {
            if (error) {
                reject(error)
            } else {
                resolve(generatedAddress)

            }
        });
    })
}

async function sendTransaction(receiver) {
    return new Promise(function (resolve, reject) {
        const Depth = 3; // constant defined by IOTA - how deep to look for the tips in the Tangle
        const MinWeightMagnitude = 9; // constant defined by IOTA - the difficulty of PoW

        const transfers = [
            {
                // where are we sending the transaction to?
                address: receiver,

                // how many tokens are we transferring?
                value: 1,

                // do we want to comment on this transaction?
                message: iota.utils.toTrytes('Hello World!')
            }
        ];


        iota.api.sendTransfer(seed, Depth, MinWeightMagnitude, transfers, (error, transactions) => {
            if (error) {
                console.error('sendTransfer error', error)
                reject(error)
            } else {
                resolve(transactions)
            }
        });
    })
}

async function checkIfConfirmed(hash) {
    return new Promise(function (resolve, reject) {
        iota.api.getLatestInclusion([hash], (error, inclusionStates) => {
                if (error) {
                    console.error('getLatestInclusion error', error)
                    reject(error)
                } else if (inclusionStates[0]) {
                    resolve(true)
                } else {
                    resolve(false)
                }
            }
        )
    })
}

async function isReattachable(hash) {
    return new Promise(function (resolve, reject) {
        iota.api.isReattachable(hash, (error, result) => {
            if (error) {
                reject(error)
            }
            else {
                resolve(result)
            }
        })
    })
}

async function replayBundle(hash) {
    return new Promise(function (resolve, reject) {
        const Depth = 3; // constant defined by IOTA - how deep to look for the tips in the Tangle
        const MinWeightMagnitude = 9; // constant defined by IOTA - the difficulty of PoW
        iota.api.replayBundle(hash, Depth, MinWeightMagnitude, (error, transaction) => {
            if (error) {
                reject(error)
            }
            else {
                resolve(transaction)
            }
        })
    })
}

async function broadcastBundle(iota, hash) {
    return new Promise(function (resolve, reject) {
        iota.api.broadcastBundle(hash, (error, transaction) => {
            if (error) {
                reject(error)
            }
            else {
                console.log(transaction)
                resolve(transaction)
            }
        })
    })
}

async function listTransacionsForSeed(seed) {
    return new Promise(function (resolve, reject) {
        const options = {
            start: 0,
            end: 10,
            security: 2,
            inclusionStates: true

        };

        iota.api.getTransfers(seed, options, (error, resultsArray) => {
            if (error) {
                reject(error)
            } else {
                resolve(resultsArray)
            }
        })
    })
}



