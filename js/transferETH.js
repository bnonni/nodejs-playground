var fetch = require('node-fetch');
var fs = require("fs");
var QLIDs = fs.readFileSync("./qlids.csv", "utf8").split("\r\n")
QLIDs.shift()
for (var i = 1800; i < QLIDs.length; i++) {
    const user = QLIDs[i]
    // console.log(user)
    // process.exit()
    // var raw = `{"senderQLID":"NCR864", "receiverQLID":${QLIDs[i]}, "amount":0.1}`
    // var requestOptions = {
    //     method: 'POST',
    //     body: raw,
    //     redirect: 'follow'
    // };
    fetch('https://ghu-eth-api-kehjkmr6ua-ue.a.run.app/api/v1/wallet/eth/transfer', {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        credentials: 'include',
        redirect: 'follow',
        body: `{"senderQLID":"NCR864", "receiverQLID":${user}, "amount":0.1}`
    })
        .then(response => response.json())
        .then(result => {
            console.log(result);
            if (!result.success) {
                console.log(`${user}`)
                fs.appendFileSync('./failed.log', `\n${user}`);
            }
        })
        .catch(error => console.log('error', error));
    setTimeout(() => { }, 10000)
    // fetch("https://ghu-eth-api-kehjkmr6ua-ue.a.run.app/api/v1/wallet/eth/transfer", requestOptions)
    //     .then(response => response.text())
    //     .then(result => console.log(result))
    //     .catch(error => console.log('error', error));
}
/**
 373, 385, 406, 411, 419, 435, 443, 444, 454, 456
 490, 497, 520, 523, 524, 532
 565, 566, 574
 */

