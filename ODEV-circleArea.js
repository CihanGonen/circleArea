const radius = process.argv.slice(2);
let circleArea = Math.PI*(radius**2);
circleArea = circleArea.toFixed(2);
console.log(`Yarıçapı ${radius} olan dairenin alanı: ${circleArea}`);