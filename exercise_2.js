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
