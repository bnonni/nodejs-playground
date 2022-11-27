const tmp = [
    '!','@','#','$','%','^','&','*',
    '(',')','_','+','-','=','[', ']',
    '{','}', "\\",'|',';',':',"'",'"',
    ',','<','.','>','/','?','`','~',
];

const generatePassphrase = (base) => {
 var max = base.length;
    for (let i = 0; i < max; i+=2) {
        var randomBaseIndex = Math.round(Math.random() * 41);
        var randomTmpIndex = Math.round(Math.random() * 31);
        base[randomBaseIndex] = tmp[randomTmpIndex];
        console.log(tmp[randomTmpIndex])
    }
    return base.join(',').replace(/,/g, '');
}

const passphrase = generatePassphrase(process.argv.slice(2)[0].split(''));
console.log(passphrase);