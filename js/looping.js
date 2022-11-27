const discountPercentages = [
    { discount_percentage: '13' },
    { discount_percentage: '18' },
    { discount_percentage: '27' },
    { discount_percentage: '6' },
    { discount_percentage: '31' }
]


let sum = 0;
for (let discountPercent of discountPercentages) {
    console.log(discountPercent)
    sum += discountPercent.discount_percentage * 1;
}
console.log(sum);
const averageDiscount = sum / discountPercentages.length;
console.log(`${averageDiscount}%`)
