console.log("Hello World");

let konutKredileri = [
  "Konut Kredisi",
  "Emlak Konut Kredisi",
  "Kamu Konut Kredisi",
];

for (let i = 0; i < konutKredileri.length; i++) {
  console.log("<li>" + konutKredileri[i] + "</li>");
}

let save = function () {
  console.log("hello");
};

save();

let students = ["ahmet", "mehmet", "kerim"];

console.log(students);

console.log(Math.max(...[5, 3, 4, 15, 45]));

let populations = [10000, 20000, 30000, [40000, 50000]];

// let [small, medium, large, [veryHigh, max]] = populations;

// console.log(small);
// console.log(medium);
// console.log(large);
// console.log(veryHigh);
// console.log(max);

function someFunction([mahmut, mehmet], number) {
  console.log(mahmut, mehmet);
}

someFunction(populations);
let student = { id: 15, firstName: "Mahmut", lastName: "Kerim" };

console.log(student.firstName);

student.school = "lise";

console.log(student.school);
console.log(student);
student.sayHello = function () {
  alert("hello" + this.firstName);
};

//student.sayHello();
