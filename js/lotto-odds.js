const fs = require('fs');
const start = 302575350;

var convert = function (num) {
    var nsign = Math.sign(num);
    //remove the sign
    num = Math.abs(num);
    //if the number is in scientific notation remove it
    if (/\d+\.?\d*e[\+\-]*\d+/i.test(num)) {
        var zero = '0',
            parts = String(num).toLowerCase().split('e'), //split into coeff and exponent
            e = parts.pop(), //store the exponential part
            l = Math.abs(e), //get the number of zeros
            sign = e / l,
            coeff_array = parts[0].split('.');
        if (sign === -1) {
            l = l - coeff_array[0].length;
            if (l < 0) {
                num =
                    coeff_array[0].slice(0, l) +
                    '.' +
                    coeff_array[0].slice(l) +
                    (coeff_array.length === 2 ? coeff_array[1] : '');
            } else {
                num =
                    zero +
                    '.' +
                    new Array(l + 1).join(zero) +
                    coeff_array.join('');
            }
        } else {
            var dec = coeff_array[1];
            if (dec) l = l - dec.length;
            if (l < 0) {
                num = coeff_array[0] + dec.slice(0, l) + '.' + dec.slice(l);
            } else {
                num = coeff_array.join('') + new Array(l + 1).join(zero);
            }
        }
    }
    return nsign < 0 ? '-' + num : num;
};

// console.log(
//     'Odds of winning based on tickets purchased\n--------------------------------------------\n\n'
// );
// fs.appendFileSync(
//     './output.txt',
//     'Odds of winning based on tickets purchased\n--------------------------------------------\n\n'
// );

// for (var i = 1; i <= 100000005; ) {
//     console.log(`Calculating odds based on ${i} tickets purchased...`);
//     var totalTickets = (start + i);
//     var odds = ((i / totalTickets) / 100)
//     var cost = i * 2;
//     var out = `Tickets: ${i}\nTotal Tickets: ${totalTickets}\nCost: $${cost}\nOdds: ${convert(
//         odds
//     )}\n\n`;
//     fs.appendFileSync('./output.txt', out);
//     if (i == 1) {
//         i += 4;
//         continue;
//     }
//     if (i >= 5 && i <= 10) {
//         i += 5;
//         continue;
//     }
//     if (i >= 15 && i <= 500000) {
//         i += 10;
//         continue;
//     }
//     if (i > 500000) {
//         i += 100000;
//     }
// }

let twoExp256 = convert('1.157920892373163e77')
for(let i = 0; i < twoExp256.length; i+=3){

}

115,792,089,237,316,300,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000