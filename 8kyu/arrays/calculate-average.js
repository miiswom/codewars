// Calculate average

/*Write a function which calculates the average of the numbers in a given list.
Note: Empty arrays should return 0.*/

function findAverage(array) {
  if(!array.length == 0) {
    return array.reduce((acc, e) => acc + e, 0)/array.length;
  } else {
    return 0;
  };
};

/* Better solution:

function findAverage(array) {
  return array.length == 0 ? 0 : array.reduce((acc, e) => acc + e, 0)/array.length;
};
*/