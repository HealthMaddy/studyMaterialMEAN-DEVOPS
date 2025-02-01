let bubbleSort = function (array) {
  var done = false;
  while (!done) {
    done = true;
    for (var i = 1; i < array.length; i++) {
      if (array[i - 1] > array[i]) {
        done = false;
        var temp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = temp;
      }
    }
  }
  console.log("array after sorting", array);
  return array;
};
