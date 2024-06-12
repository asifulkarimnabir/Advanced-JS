// for loops
// console.log(element); //  undefined
for (let i = 0; i < 10; i++) {
  var element = i;
  //   console.log(element);
}
// console.log(element); //  possible

for (let i = 0; i < 10; i++) {
  const element = i;
  if (element == 5) {
    // console.log("5 is the best number");
  }
  //   console.log(element);
}
// console.log(element);  // not possible

for (let i = 0; i <= 5; i++) {
  //   console.log(`outer loop i : ${i}`);
  for (let j = 0; j <= 5; j++) {
    // console.log(`inner  j : ${j} outer i ${i}`);
    // console.log(`${i}*${j}=${i * j}`);
  }
}

const myArray = ["flash", "thor", "supernman", "ironman"];

for (let i = 0; i < myArray.length; i++) {
  const element = myArray[i];
  //   console.log(element);
}

// for (let i = 1; i <= 10; i++) {
//   const element = i;
//   if (element == 5) {
//     console.log("find 5 and break");
//     break;
//   }
//   console.log(element);
// }

for (let i = 1; i <= 10; i++) {
  //   const element = i;
  if (element == 5 || element == 8) {
    // console.log("except 5,8 print all");
    continue;
  }
  //   console.log(element);
}

// while loop

// let i = 1;
// while (i <= 10) {
//   console.log(`Value of i is ${i}`);
//   i = i + 2;
// }

let arr = ["flash", "thor", "supernman", "ironman"];

let i = 0;
while (i < arr.length) {
  //   console.log(`Value of i is ${arr[i]}`);
  i = i + 1;
}

// do while loop

let score = 1;
do {
  console.log(`value is ${score}`);
  score++;
} while (score <= 5);
