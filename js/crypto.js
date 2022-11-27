const crypto = require('crypto');

function SHA256(n) {
    let PoW = [];
    for(let i = 0; i < n; i++){
     const sha256 = crypto.createHash('sha256');
     const hash = sha256.update(i.toString()).digest('hex');
     PoW.push(hash);
    }
    return PoW;
}

// Create a private key
// const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
// modulusLength: 2048,
// });

// fs.writeFileSync('alicePrivKey', privateKey.export({type: 'pkcs8', format: 'pem'}).toString())
// fs.writeFileSync('alicePublicKey.pub', publicKey.export({type: 'spki', format: 'pem'}).toString())

// console.log(privateKey.export({type: 'pkcs8', format: 'pem'}).toString('hex'))
// const public = publicKey.export({type: 'spki', format: 'pem'}).toString()
// console.log(Buffer.from(public, 'utf-8').toString('hex'))
// Convert string to buffer
// const data = Buffer.from("funding_created");

// Sign the data and returned signature in buffer
// const aliceSign = crypto.sign("SHA256", data , privateKey);

// Convert returned buffer to base64
// const aliceSignature = aliceSign.toString('base64');

// Printing the aliceSignature
// console.log(`Alice's Signature:\n\n ${aliceSignature}`);

// const crypto = require('crypto');

// Defining the algorithm to be used
// const algo = 'RSA-SHA256';

// Creating Sign object
// const sign = crypto.createSign(algo);

// Output
// console.log(sign);

// const w = aliceSign.write('commit_txn')
// console.log(w)

const hashes = SHA256(256);
console.log(hashes)