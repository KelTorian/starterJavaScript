const isPrime = function (number) {
  if (number < 2) return false;
  if (number === 2) return true;
  for (let i = 2; i <= number - 1; i++) {
    if (number % i === 0) return false;
  }
  return true;
};

const showPrimeNumbers = function (...numbers) {
  let primeNumbers = [];
  let normalNumbers = [];
  numbers.forEach((num) =>
    isPrime(num) ? primeNumbers.push(num) : normalNumbers.push(num)
  );
  console.log(
    `Prime numbers are ${primeNumbers}, normal numbers are ${normalNumbers}`
  );
};
showPrimeNumbers(2, 3, 5, 7, 11, 11, 1458, 78, 150, 584, 41, 17, 45, 9, 10, 20);
console.log(isPrime(3));

const listPrimeNumbers = function (range) {
  let primeNumbers = [];
  let normalNumbers = [];
  for (let i = 1; i < range + 1; i++) {
    isPrime(i) ? primeNumbers.push(i) : normalNumbers.push(i);
  }
  return primeNumbers;
};

console.log(listPrimeNumbers(1000));
