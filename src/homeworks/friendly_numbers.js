const divisors = function (number) {
  const divisorsArr = [];
  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      divisorsArr.push(i);
    }
  }
  return divisorsArr;
};

const isFriendlyNumber = function (firstNumber, secondNumber) {
  divisors(firstNumber).reduce((acc, cur) => acc + cur) === secondNumber &&
  divisors(secondNumber).reduce((acc, cur) => acc + cur) === firstNumber
    ? console.log("Bu iki sayı arkadaştır")
    : console.log("Bu iki sayı arkadaş değildir.");
};

console.log(divisors(284));
console.log(divisors(220));

console.log(isFriendlyNumber(284, 220));
