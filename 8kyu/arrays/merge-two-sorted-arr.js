// Merge two sorted arrays into one

/*
You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.
*/

const arrO = [1, 3, 5, 7, 9, 11, 12];
const arrE = [1, 2, 3, 4, 5, 10, 12]


function mergeArrays(arr1, arr2) {
  
  arr2.forEach((e) => {
    if(!arr1.includes(e)) {
      arr1.push(e);
    }
  })
  return arr1.sort( (a,b) => a - b );
}

alert(mergeArrays(arrO, arrE));
