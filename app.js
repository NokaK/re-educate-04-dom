for (let index = 0; index < 100; index++) {
  //   console.log(index * index);
}

let i = 0;
// while (i < 50) {
//   i++;
//   console.log(i);
// }

let names = ["Tornike", "Aana", "keso"];
// names.push("giorgi");
// console.log(names);

const getOddOrEvenNumbers = (num) => {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
};
const odd = getOddOrEvenNumbers(5);
const even = getOddOrEvenNumbers(10);

// console.log(odd, even);

const numbers = [4, 7, 8, 9, 0, 100, 5000, 345, 83];
numbers.push(6);
const result = numbers.filter((number) => number % 2 === 0);
const findNumber = numbers.find((number) => number === 93);
const multNumbers = numbers.map((number) => number * number);

// console.log(multNumbers);
if (findNumber) {
  console.log("this is 83");
}

const getNumbers = () => {
  let num = 30;

  const foo = () => {
    num = 15;
    console.log("child function", num);
  };

  foo();
  console.log(num);
};

getNumbers();

const getNumbersToString = (x) => {
  let numberName;
  if (x === "one") {
    numberName = 1;
    return numberName;
  }
  if (x === "two") {
    numberName = 2;
    return numberName;
  }
  if (x === "three") {
    numberName = 3;
    return numberName;
  }
  return x;
};
const one = getNumbersToString("one");
const two = getNumbersToString("two");
const three = getNumbersToString("three");
const four = getNumbersToString("four");

const sumOfNumbers = [one, two, three];

let sum = 0;
for (let index = 0; index < sumOfNumbers.length; index++) {
  const element = sumOfNumbers[index];
  sum = sum + element;
}

console.log(sum, "this is sum");
console.log(one, two, three, four);
