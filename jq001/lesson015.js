console.log("This is a paragraph")
console.log('%d %s of JavaScript', 30, 'Days')
console.info('The latest version of our application has been released and is now available for download.');
console.info('A new feature for our application is under development and will be included in the next release.');
console.info('A critical bug has been identified and is currently being addressed by our development team.');
console.warn('We are aware of the issue and are working on a fix.');

console.assert(4 > 3, '4 is greater than 3') // no result
console.assert(3 > 4, '3 is not greater than 4') // Assertion failed: 3 is not greater than 4

for (let i = 0; i <= 10; i += 1) {
  let errorMessage = `${i} is not even`
  console.log('the # is ' + i)
  console.assert(i % 2 === 0, { number: i, errorMessage: errorMessage })
}

const fruits = ['Apple', 'Banana', 'Orange', 'Grapes'];
const colors = [
  ['Red', 'Green'],
  ['Yellow', 'Purple'],
  ['Orange', 'Blue']
];
const fruit = {
  name: 'Apple',
  color: 'Red',
  type: 'Fruit',
  origin: 'Asia',
  price: '$1.99 per kg'
};
const cars = [
  {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2022,
    color: 'Silver'
  },
  {
    brand: 'Tesla',
    model: 'Model S',
    year: 2023,
    color: 'Black'
  },
  {
    brand: 'BMW',
    model: 'X5',
    year: 2021,
    color: 'White'
  }
];

console.group('Fruits');
console.log(fruits);
console.groupEnd();

console.group('Colors');
console.log(colors);
console.groupEnd();

console.group('Fruit');
console.log(fruit);
console.groupEnd();

console.group('Cars');
console.log(cars);
console.groupEnd();
