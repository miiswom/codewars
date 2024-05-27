//12 === Sum Mixed Array

/* Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
Return your answer as a number.*/

const sumMixArr = ['5', '0', 9, 3, 2, 1, '9', 6, 7];

function sumMix(x){
  let newArr = [];
  
  x.join(',')
    .split(',')
    .forEach( (e) => {
    
    let num = Number(e);
    newArr.push(num);
  })
  
  return newArr.reduce( (acc, e) => acc + e , 0)
}

console.log(sumMix(sumMixArr))

/* Better solution 

function sumMix(x){
  return x.map( (e) => +e ).reduce((acc, e) => acc + e, 0)
}

*/