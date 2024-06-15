const coding = ["js", "ruby", "java", "python", "php"];

const values = coding.forEach(function (item) {
  //   console.log(item);
});

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter((item) => {
//   return item > 3;
// });
// console.log(newNums)

const newNums2 = [];

myNums.forEach((num) => {
  if (num > 3) {
    newNums2.push(num);
  }
});
// console.log(newNums2);

let users = [
  { name: "John", age: 25, occupation: "gardener" },
  { name: "Lenny", age: 51, occupation: "programmer" },
  { name: "Andrew", age: 43, occupation: "teacher" },
  { name: "Peter", age: 81, occupation: "teacher" },
  { name: "Anna", age: 47, occupation: "programmer" },
  { name: "Albert", age: 76, occupation: "programmer" },
];

let myUser = users.filter((user) => {
  return user.age >= 40 && user.occupation === "programmer";
});
console.log(myUser);
