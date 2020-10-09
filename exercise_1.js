input = prompt();
inputConverted = +input;

console.log("Type: " + typeof(inputConverted));

if (typeof(inputConverted) == 'number') {
  if (isNaN(inputConverted)) console.log("NaN");

  console.log(inputConverted % 2 == 0 ? console.log("Четное") : console.log("Нечетное"))

} else {
  console.log("Упс, кажется, вы ошиблись")
}
