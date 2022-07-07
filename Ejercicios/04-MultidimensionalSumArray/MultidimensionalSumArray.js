function mdArraySum(arr) {
  // Your code here:
  // for (const number of arr) {
  //   console.log(number);
  //   if (!Array.isArray(number)) {
  //     counter += number;
  //   } else {
  //     counter += mdArraySum(number);
  //   }
  // }

  for (const key in arr) {
    console.log(key);
  }

  return arr.reduce(
    (prev, current) =>
      prev + (typeof current === "number" ? current : mdArraySum(current)),
    0
  );
}

const test = mdArraySum([1, 2, 3]);
const test2 = mdArraySum([[1, 3, 4], 2, 3]);
const test3 = mdArraySum([[2, 4], [1], [4, 2, 1]]);
console.log(test);
console.log(test2);
console.log(test3);

module.exports = mdArraySum;
