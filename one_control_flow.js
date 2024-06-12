// if
const isUserLoggedIn = true;

if (isUserLoggedIn) {
  //   console.log("nabir");
}

const num1 = 20;
const num2 = 4;

if (num1 > num2) {
  //   console.log("num1 is greater");
}

if (2 == "2") {
  //   console.log("both are equal");
} else {
  //   console.log("both are not equal");
}
if (2 === "2") {
  console.log("both are equal");
} else {
  //   console.log("both are not equal");
}

const score = 200;

if (score > 100) {
  const power = "fly";
  //   console.log(`user can ${power}`);
}
// console.log(`user can ${power}`);//ReferenceError: power is not defined

const balance = 1999;

// if (balance > 300) console.log("test");
// if (balance > 300) console.log("test"), console.log("test2"); // not recommended

// if (balance < 1800) {
//   console.log("less than 1999");
// } else if (balance < 1900) {
//   console.log("less than 1900");
// } else if (balance < 1950) {
//   console.log("less than 1950");
// } else {
//   console.log("greater than 1999");
// }

const customeLoggedIn = true;
const creditCard = true;
const loggedInFromGoogle = true;
const loggedInFromEmail = false;

if (customeLoggedIn && creditCard) {
  //   console.log("enroll successfully");
}
if (customeLoggedIn && creditCard && 2 == 2) {
  //   console.log("enroll successfully");
}
if (loggedInFromEmail || loggedInFromGoogle) {
  console.log("login successfully");
}
if (loggedInFromEmail || loggedInFromGoogle || 3 == 6) {
  console.log("login successfully");
}
