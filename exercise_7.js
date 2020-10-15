const arr = [1, 2, 4, 5, "string", "15", true, false, NaN, 0, [], null, undefined];

let evenCount = 0;
let oddCount = 0;
let zeroCount = 0;

for (let i = 0; i < arr.length - 1; i++) {
  if(typeof arr[i] === 'number' && !isNaN(arr[i])) {
  	if (arr[i] === 0) {
  	  zeroCount++;
    } else if (arr[i] % 2 == 0) {
      evenCount++;
    } else if (arr[i] % 2 == 1) {
      oddCount++;
    }
  }
}

console.log(`Кол-во четных ${evenCount}, кол-во нечетных ${oddCount}, кол-во нулевых элементов ${zeroCount}`);

// Не совсем верно. Есть 2 замечания:
// 1. По заданию нужно считать не значения undefined, а нулевые элементы, т.е. нули (числа). Все значения, что не являются числами, нужно просто отсеивать и не учитывать
// 2. Чтобы исключить всё, кроме чисел, нужно обязательно использовать проверку на NaN, т.к. typeof NaN = "number" и только проверка на typeof не отсеет эти значения.