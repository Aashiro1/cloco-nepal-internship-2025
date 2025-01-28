
const grades = [75,50,90,80,65,95];

const maximum = grades.reduce(getMax); // Set initial value to -Infinity
const minimum = grades.reduce(getMin); // Set initial value to Infinity

function getMax(accumulator, element) {
    return Math.max(accumulator, element);
}

function getMin(accumulator, element) {
    return Math.min(accumulator, element);
}
console.log(maximum);
console.log(minimum);