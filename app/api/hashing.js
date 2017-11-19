var SHA3 = require('sha3');

const IOTA = require('iota.lib.js')
const iota = new IOTA({
    host: 'http://p103.iotaledger.net',
    port: 14700
})

function hash(id) {
    // Generate 512-bit digest.
    var d = new SHA3.SHA3Hash();
    d.update(id);
    return iota.utils.toTrytes(d.digest('hex')).substring(0,81);
}

exports.hash = hash