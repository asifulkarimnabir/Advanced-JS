const userEmail = "nabir@gmail.com";

if (userEmail) {
  // console.log("got user email");
} else {
  // console.log("do not have user email");
}

// -------falsy values ------

//          false, 0 , -0, "",BigInt 0n , null ,undefined , NaN

//--------- truthy values --------

//            "0", "false"," " ,  [], {} , function(){}

const isArr = [];

if (isArr.length == 0) {
  // console.log("Array is empty");
}

const emptyObj = {};
if (Object.keys(emptyObj).length == 0) {
  // console.log("Object is empty");
}

// Nullish Coalescing Operator  (??): null , undefined

let values;
// values = 4 ?? 29;
// values = null ?? 29;
// values = undefined ?? 29;
values = null ?? 5 ?? 29;

// console.log(values);

// Ternary Operator

// condition ? true : false

const iceTeaPrice = 100;

iceTeaPrice >= 90 ? console.log("less than 100") : console.log("more than 100");
