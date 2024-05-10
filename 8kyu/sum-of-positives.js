// 3 === Sum of positive
//You get an array of numbers, return the sum of all of the positives ones.
// Note: if there is nothing to sum, the sum is default to 0.

const positives = [1,-4,7,12];
      
function positiveSum(arr) {
  let newArr = [];
  
  arr.forEach( (e) => {
    if(e > 0) {
      newArr.push(e);
    } 
  })
  
  return newArr.reduce( (acc, e, i) => acc + e, 0);
}

alert(positiveSum(positives));