// Create a function sum which accepts any amount of numbers and return the sum of their addition

const sum = (...args) => {
    let p = 0;
    for (i = 0; i < args.length; i++) {
        p += args[i];
    }
    return p;
};

console.log(sum(1)); // -> 1
console.log(sum(1, 15)); // -> 16
console.log(sum(25, 25, 20)); // -> 70
