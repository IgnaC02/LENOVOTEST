// 1) Create a function that receives an array of positive integers and returns an array with only the input’s pair numbers.

function pairNumbers(array) {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      arr.push(array[i]);
    }
  }
  return arr;
}

console.log(
  pairNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 98, 99, 102, 10002])
);
