arr = [1, 1, 1];

console.log(arr.reduce(function(prev, item, index, array) {
  return array[index-1] == item;
}))
