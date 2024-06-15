const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.map((num) => num + 10);
// console.log(newNums);

const newNums = myNums
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 30);

// console.log(newNums);

const nums = [1, 2, 3];

// const reduceNums = nums.reduce(function (acc, currVal) {
//   return acc + currVal;
// }, 0);
// console.log(reduceNums);

// const reduceNums = nums.reduce((acc, currVal) => {
//   return acc + currVal;
// }, 0);
const reduceNums = nums.reduce((acc, currVal) => acc + currVal, 0);
// console.log(reduceNums);

const shoppingCart = [
  {
    itemName: "py course",
    price: 1999,
  },
  {
    itemName: "js course",
    price: 5999,
  },
  {
    itemName: "chat gpt course",
    price: 4999,
  },
];

const total = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(total);
