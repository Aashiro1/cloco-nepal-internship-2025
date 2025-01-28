//even and odd numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNums = numbers.filter(isEven);
let oddNums = numbers.filter(isOdd);

function isEven(element) {
    return element % 2 === 0;
}

function isOdd(element) {
    return element % 2 !== 0;
}
console.log("Even and odd numbers:");
console.log(evenNums);
console.log(oddNums);

//adults and children
const ages = [20, 16, 18, 14, 12, 10, 8, 6, 4, 2];
const adults = ages.filter(isAdult);
const children = ages.filter(isChild);

function isAdult(age) {
    return age >= 18;
}
function isChild(age) {
    return age < 18;
}
console.log("Adults and children:");
console.log(adults);
console.log(children);

//long and short words
const words = ["apple", "banana", "pear", "grape", "kiwi", "orange", "peach"];
const longWords = words.filter(isLong);
const shortWords = words.filter(isShort);

function isLong(word) {
    return word.length > 5;
}
function isShort(word) {
    return word.length <= 5;
}   
console.log("Long and short words:");
console.log(longWords);
console.log(shortWords);