// for of

const myArray = [1, 2, 4, 6, 3];

for (const num1 of myArray) {
  //   console.log(num1);
}

const greetings = "Hello World!";

for (const greet of greetings) {
  if (greet == " ") {
    continue;
  }
  // console.log(`Each char is ${greet}`);
}

const map = new Map();
map.set("steve rogers", "captain america");
map.set("tony stark", "iron man");
map.set("bruce banner", "the hulk");
map.set("peter parker", "spiderman");
map.set("steve rogers", "captain america");
map.set("tchalla", "black panther");

// console.log(map);

for (const [key, value] of map) {
  // console.log(key, ":-", value);
}

let obj1 = {
  name: "arif",
  age: 33,
};

for (const key in obj1) {
  // console.log(`${key} is ${obj1[key]}`);
}

const myArray2 = [1, 2, 4, 6, 3];

for (const key in myArray2) {
  // console.log(key)
  // console.log(myArray2[key]);
}
for (const [key] in map) {
  // console.log(key)
}

const coding = ["js", "ruby", "java", "python", "php"];

// coding.forEach(function (item) {
//   console.log(item);
// });

coding.forEach((item) => {
  // console.log(item);
});

// function printMe(item) {
//   console.log(item);
// }

// coding.forEach(printMe);

// coding.forEach((item, index, arr) => {
//   console.log(item, index, arr);
// });

const myCoding = [
  { languageName: "javascript", languageFileName: "js" },
  { languageName: "python", languageFileName: "py" },
  { languageName: "Java", languageFileName: "java" },
];
myCoding.forEach((item) => {
  console.log(item.languageFileName);
});
