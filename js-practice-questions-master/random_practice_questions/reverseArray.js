const reverse = ([head, ...taildata]) =>
  taildata.length === 0 ? [head] : [...reverse(tail), head];



const reverse = ([head, ...tail])=> tail.length === 0 ? [head] :  [...reverse(tail), head];