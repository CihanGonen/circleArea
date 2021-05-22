const {circleArea, circleCircumference} = require('./ODEV-circle');

const radius = process.argv[2];

console.log(`Yarıçapı ${radius} olan dairenin alanı: ${circleArea(radius)}`);
console.log(`Yarıçapı ${radius} olan dairenin çevresi: ${circleCircumference(radius)}`);