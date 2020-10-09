//Решения Модуль 10
//Для проверки необходимо раздокументировать необходимые блоки кода

//10.3 Задание 1
/*
input = prompt();
inputConverted = +input;

console.log("Type: " + typeof(inputConverted));

if (typeof(inputConverted) == 'number') {
  if (isNaN(inputConverted)) console.log("NaN");

  console.log(inputConverted % 2 == 0 ? console.log("Четное") : console.log("Нечетное"))

} else {
  console.log("Упс, кажется, вы ошиблись")
}
*/

//10.3 Задание 2
/*
x = 0;

switch(typeof(x)) {
  case 'number':
    console.log('Тип - число')
    break;
  case 'string':
    console.log('Тип - строка')
    break;
  case 'boolean':
    console.log('Тип - буль')
    break;

  default:
    console.log('Тип не был определен');
    break;
}
*/
//10.4 Задание 3
/*
console.log("Hello".split("").reverse().join(""));
*/
//10.4 Задание 4
/*
let xRand = Math.round(Math.random() * 100);
console.log(xRand);
*/
//10.5 Задание 5
/*
arr = [];

console.log(arr.length);

for (i = 0; i < arr.length - 1; i++) {
  console.log(arr[i])
}
*/
//10.5 Задание 6
/*
arr = [1, 1, 1];

console.log(arr.reduce(function(prev, item, index, array) {
  return array[index-1] == item;
}))
*/

//10.6 Задание 7

//10.7 Задание 8
/*
let map = new Map([["key", "value"], [1, "hash"], [true, false]]);

for (let key of map.keys()) {
  console.log(`Key - ${key}, value - ${map.get(key)}`)
}
*/
