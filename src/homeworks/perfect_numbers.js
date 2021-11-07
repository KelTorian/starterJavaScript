const isPerfectNumber = function (number) {
  let totalOfDivisors = 0;
  let result;
  for (let i = 1; i < number + 1; i++)
    if (number % i === 0) {
      totalOfDivisors += i;
    }
  number === totalOfDivisors / 2 ? (result = true) : (result = false);
  return result;
};

console.log(isPerfectNumber(7));

const findPerfectNumbers = function (range) {
  let perfectNumbers = [];
  let nonPerfectNumbers = [];
  for (let i = 1; i < range + 1; i++) {
    isPerfectNumber(i) ? perfectNumbers.push(i) : nonPerfectNumbers.push(i);
  }
  console.log(perfectNumbers);
  console.log(nonPerfectNumbers);
};

findPerfectNumbers(1000);
