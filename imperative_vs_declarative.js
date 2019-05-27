// Imperative: the flow control, how to do things
// Declarative: the data flow, what to do

const doubleMap = numbers => {
    const doubled = [];
    for (let i; i < numbers.length; i++) {
        doubled.push(numbers[i] * 2);
    }
    return doubled
};

console.log(doubleMap([2, 3, 4])); // [4, 6, 8]

// Now for the declarative
const decDoubleMap = numbers => numbers.map(n => n * 2);
console.log(decDoubleMap([2, 3, 4])); // [4, 6, 8]