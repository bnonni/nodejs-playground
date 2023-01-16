
const crypto = require('crypto');
const sha256 = crypto.createHash('sha256');
const data = {}
const hash = sha256.update(JSON.stringify(data)).digest('hex');
console.log(hash)