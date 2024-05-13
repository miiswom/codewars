// 5 === Square(n) Sum 
// Complete the square sum function so that it squares each number passed into it and then sums the results together. For example, for [1, 2, 2] it should return 9.

const numbersArr = [1, 2, 2];

function squareSum(numbers){
  return numbers
    .map( (e) => e * e)
    .reduce((acc, e) => acc + e, 0);
}
 
alert(squareSum([1,2]));