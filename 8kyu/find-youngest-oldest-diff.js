// 2 === Find the Difference in Age between Oldest and Youngest Family Members
// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].
const ages = [82, 15, 6, 38, 35];

function differenceInAges(arr) {
  const sorted = arr.sort((a,b) => (a - b));
  
  const youngest = sorted[0];
  const oldest = sorted[sorted.length -1];
  const diff = oldest - youngest;
  
  let newArr = [];
  
  newArr.push(youngest, oldest, diff)
  return newArr;
  
}

console.log(differenceInAges(ages))