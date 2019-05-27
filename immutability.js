const a = Object.freeze({
    foo: 'Hello',
    bar: 'World',
    baz: '!'
});

a.foo = 'Goodbye'; // Error: Cannot assign to read only property 'foo' of object Object

// Frozen objects are superficially immutable
const b = Object.freeze({
    foo: 'Hello',
    bar: 'World',
    baz: '!'
});

a.foo.greeting = 'Goodbye';
console.log(`${b.foo.greeting}, ${a.bar}${b.baz}`);

// Solved in functional programming languages with trie data structures (immutable.js, Mori for js)
// They are effectively deep frozen, with structural referencing for
// sharing reference to memory location
