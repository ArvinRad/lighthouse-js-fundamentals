const isEven  = function (num) {
  return num % 2 === 0;
}
const tenIsEven = isEven(10);
const elevenIsEven = isEven(11);

console.log("Is ten even? " + tenIsEven);
console.log("Is eleven even? " + elevenIsEven);