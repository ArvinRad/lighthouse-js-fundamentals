function merge (array1, array2) {
  let merge = [];
  let i = 0;
  while (i < array2.length) {
    array1.push(array2[i]);
    i++;
  }
  array1.sort(function(a, b) {return a - b} );
  return array1
}
console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);
