#!/usr/bin/env node
const crypto = require('crypto');

// calculate hash from seed
function hash() {
    return crypto.createHash('sha256').update('').digest('hex');
}

function calculateNumber() {
    const hmac = crypto
        .createHmac('sha512', 'SsjpXZ3J7CWzoOY5J9FbDGKuHr83')
        .update('')
        .digest('hex');

    const first7 = hmac.substring(0, 7);
    return Math.round(parseInt(first7, 16) / 7456540.416);
}
console.log(calculateNumber() === 3);
