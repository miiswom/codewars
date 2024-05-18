// xxx 7 === Total amount of points
// Our football team has finished the championship. Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score. For example: ["3:1", "2:2", "0:1", ...] Points are awarded for each match as follows: 
// if x > y: 3 points (win) if x < y: 0 points (loss) if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

//Notes: our team always plays 10 matches in the championship 0 <= x <= 4 0 <= y <= 4

const gameArr = ["1:0","2:0","3:0","4:4","2:2","3:3","1:4","2:3","2:4","3:4"]; //12

function points(games) {

  let totalPoints = 0;
  
  for(let i=0; i < games.length; i++) {
    let x = games[i][0];
    let y = games[i][2];
    
    if(x == y) {
      totalPoints += 1;
    } else if(x > y) {
      totalPoints += 3;
    } else if(x < y) {
      totalPoints += 0;
    }
}  
  console.log(totalPoints)
};

points(gameArr);

//alert(game[0][0]);
//alert(game[1][0]);