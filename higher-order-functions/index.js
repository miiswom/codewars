/*Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe*/

function countDevelopers(list) {
  // your awesome code here :)
  let devCount = 0;
  for(let dev in list) {
    if(list[dev].continent === "Europe" && list[dev].language === 'JavaScript') {
      devCount++
    }
  }
  return devCount
}