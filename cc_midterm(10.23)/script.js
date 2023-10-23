// midterm plan
// so there isnt an API(s) that have the data I want for the score idea
// would need to do scrubbing and tie in something from node.js
// dont want to deal with that, so I am going to pivot to making
// a sketch that shows data from the previous days NHL days

// there is a communit api called nhl-score-api that has a ton of data
// and you can sort by date/team etc

// I want to try and do a few things
// 1) use api request to fetch the data
//  1.a) pull out arrays that store abbreviations for buttons and teamName for breakouts
//  1.b) pull out score (.scores) of the game (this has team abrevations in it, maybe can just get this)
//  1.c) pull out goals array
//    1.c1) pull out scorer, minute
// 2) print the team name abbreviations onto buttons for the previous days matchups
//    i.e NYR vs LAK 
// 3) On button click, show the final score, goal scorers and time of goals?

//gonna start here and see how things go, then evaluate


var nhlGames; 
var GamesFinals = [];
var MatchupArray = [];
var GoalScorers = [];
var ButtonTest = [];
var myButton;
count = 0;


// ok button gen works, what a pain!
let test = new ButtonSystem()

//ok this fetches the giant log of stuff that should have all of the data I need

async function nhlStats(){

  let latest = "https://nhl-score-api.herokuapp.com/api/scores/latest"
  let statRequest = await fetch(latest)
  let statData = await statRequest.json()

  nhlGames = statData.games

  // ok this reads the score for position 0 in the array, need to make a loop? that prints all the scores
  //nhlScores = nhlGames[0].scores

// alright this gives me a list of the scores (need to omit overtime but well get to that)
// and sick, it adds it to my custom array
for (i = 0; i < nhlGames.length; i++){
  GamesFinals.push(nhlGames[i].scores)
}

// // will come back to this
// for (i = 0; i < nhlGames.length; i++){
//   MatchupArray.push(nhlGames[i].teams.away.abbreviation)
//   MatchupArray.push(nhlGames[i].teams.home.abbreviation)
// }

// adds all the goal scoring info to an array
for (i = 0; i < nhlGames.length; i++){
  GoalScorers.push(nhlGames[i].goals)
}

// going to use the p5.buttons library to make the game buttons
  // I guess I would want to loop thru nhlGames and make a button for each entry
  // ok well it makes the correct amount of buttons
  for (i = 0; i < nhlGames.length; i++){
    test.createButton()
  }



console.log(test.buttons)
console.log(GamesFinals)
console.log(nhlGames)
console.log(GoalScorers)
}

function setup() {
  createCanvas(1000, 1000)
  nhlStats() 


}


function draw() {
  background(200)


}
