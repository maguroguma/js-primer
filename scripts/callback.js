// some
const array = [1, 2, 3, 4, 5];
const isPassed = array.some(val => val%2 === 0);
console.log(isPassed);

// filter
const filteredArray = array.filter(val => val%2 === 0);
console.log(array);
console.log(filteredArray);

// reduce
function sum(numbers) {
  return numbers.reduce(
    (total, num) => total + num,
    0
  );
}
console.log(sum([1, 2, 3, 4, 5]));
