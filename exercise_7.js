const arr = [1, 2, 4, 5, undefined];

let evenCount = 0;
let oddCount = 0;
let zeroCount = 0;

for (let i = 0; i < arr.length - 1; i++) {
  if(typeof arr[i] == 'number') {
    if (arr[i] % 2 == 0) {
      evenCount++;
    } else if (arr[i] % 2 == 1) {
      oddCount++;
    }
  } else if (typeof arr[i] === 'undefined') {
    zeroCount++;
  }
}

console.log(`Кол-во четных ${evenCount}, кол-во нечетных ${oddCount}, кол-во нулевых элементов ${zeroCount}`);
