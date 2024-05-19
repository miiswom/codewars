// Given a number n, return the number of positive odd numbers below n

function oddCount(n){
  // your code here
  let arr = []
  for(let i=0; i < n; i++) {
    
    if(i % 2 !== 0) {
      arr.push(i)
    } 
  } return arr.length;
}