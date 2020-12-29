const howManyHundreds = function (num) {
  let rem = 0;
  rem = (num - (num % 100))/100; 
  return rem
}

console.log(howManyHundreds(1230));