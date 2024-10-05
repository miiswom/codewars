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

/* Coding Meetup #2 - Higher-Order Functions Series - Greet developers */

function greetDevelopers(list) {
  // thank you for checking out my kata :)
  for(let dev in list) {
    if(list[dev].greeting === undefined) {
     list[dev].greeting = `Hi ${list[dev].firstName}, what do you like the most about ${list[dev].language}?`
    }
  }
  return list
}