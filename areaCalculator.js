const calculateRectangleArea = function (length, width) {
  let area = 0;
  ((length >= 0) && (width >= 0)) ? area = length * width : area = "undefined";
  return area
}
const calculateTriangleArea = function (base, hight) {
  let area = 0;
  ((base >= 0) && (hight >= 0)) ? area = base * hight /2 : area = "undefined";
  return area
}
const calculateCircleArea = function (radius) {
  let area = 0;
  (radius >= 0) ? area = Math.PI * Math.pow(radius, 2) : area = "undefined";
  return area
}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined