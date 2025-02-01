// reverse an array  in an efficient way
// eg [1,2,3,4] => [4,3,2,1]
function reverseArray(a) {
  var left = null;
  var right = null;
  var length = a.length;
  for (left = 0; left < length / 2; left += 1) {
    right = length - 1 - left;
    var temporary = a[left];
    a[left] = a[right];
    a[right] = temporary;
  }
  return a;
}

reverseArray([1, 2, 3, 4]);
