const https = require('https');

async function getFaucet(callback) {
   await https.get('https://seeedy.tangle.works/', (res) => {
        res.on('data', (d) => {
            callback(JSON.parse(d))
        });
    })
}

exports.getFaucet = getFaucet