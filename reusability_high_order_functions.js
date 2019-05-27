const double = n => n * 2;
// A functor: something that can be mapped over
const doubleMap = numbers => numbers.map(double);
console.log(doubleMap([2, 3, 4])); // [4, 6, 8]
console.log(doubleMap(
    {name: 'ball', points: 2},
    {name: 'coin', points: 3},
    {name: 'candy', points: 4}
)); // [4, 6, 8] now that's reusability