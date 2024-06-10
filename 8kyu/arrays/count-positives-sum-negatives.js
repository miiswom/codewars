function countPositivesSumNegatives(input) {
  // to fix the 'TypeError: Cannot read properties of null (reading 'filter')'
  if (input === null || input === undefined || input === [] || input >= 0){
    return [];
  } else {
    let countPositives = [input.filter( (e) => e > 0 ).length];
    
    let sumNegatives = input.filter( (e) => e < 0 ).reduce( (acc, e) => acc + e, 0);
      return countPositives.concat(sumNegatives);
  } 
}