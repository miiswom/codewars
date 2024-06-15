// Convert number to reversed array of digits

/* 
Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]
*/

function digitize(n) {
  //code here
  let newArr = n.toString().split("").reverse();
  return newArr.map((e) => +e);
}

/*Better solution:

function digitize(n) {
  return String(n).split('').map(Number).reverse();
}

*/

alert(digitize(35231))