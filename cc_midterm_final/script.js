
// set variables and arrays

var nhlGames; 
var GamesFinals = [];
var MatchupArray = [];
var GoalScorers = [];
var buttonLabels = [];
var textOverlay = [];

var overlay2String = [];
var textOverlayLN2 = [];


var currentStats = [];
let buttonSpacingX = 200;
let buttonSpacingY = 200;


// ok button gen works, what a pain!
let test = new ButtonSystem()

//ok this fetches the giant log of stuff that should have all of the data I need

async function nhlStats(){

  let x = 100;
  let y = 350;

  let latest = "https://nhl-score-api.herokuapp.com/api/scores/latest"
  let statRequest = await fetch(latest)
  let statData = await statRequest.json()

  nhlGames = statData.games
  nhlScores = statData.games.scores
  nhlRecords = statData.games.currentStats


// alright this gives me a list of the scores (need to omit overtime but well get to that)
// and sick, it adds it to my custom array
for (i = 0; i < nhlGames.length; i++){
  GamesFinals.push(nhlGames[i].scores)
}

// below is unused

// // adds all the goal scoring info to an array
// for (i = 0; i < nhlGames.length; i++){
//   GoalScorers.push(nhlGames[i].goals)
// }

//well i also found out about stringify 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
//https://stackoverflow.com/questions/57402452/how-do-i-convert-an-array-of-nested-objects-into-a-string


// this gives me my 2nd info line on the button click
// wanted to try harder to get rid of the punctuation and other nonsense that prints
// but couldnt get it going and needed to stop
for (i = 0; i < nhlGames.length; i++){
  let currentStats = nhlGames[i].currentStats.records
  let text = JSON.stringify(currentStats)

  overlay2String.push(text)
}

// my attempt at trying to clean up the text, think I was on the right track but couldnt fully get there

for (i = 0; i < overlay2String.length; i++){
  let text = overlay2String[i]
  let modifiedText = text.replace("{}", "")

  textOverlayLN2.push(modifiedText)
}

// ok I need to pull out the matchups from GamesFinals and put them in an array as strings
// then I am going to use those strings as the button labels

// used keys to grab the team names and put them into an array, using the Object.keys thing I asked about after class
// there is probably a cleaner way to do this if/else if but this works, don't want to mess with it!
for (let i = 0; i < GamesFinals.length; i++){
  let keys = Object.keys(GamesFinals[i])
  if (keys.length === 2){
    buttonLabels.push(keys[0] + " VS. " + keys [1])
  }
  // need this to exclude overtime/shootout as its included in the objects
  else if (keys.length === 3){
    buttonLabels.push(keys[0] + " VS. " + keys [1])
  }

}

for (i = 0; i < GamesFinals.length; i++){
  let thing = GamesFinals[i]
  let text = ""
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty 
// https://stackoverflow.com/questions/30326452/why-is-object-keys-faster-than-hasownproperty
// https://www.freecodecamp.org/news/how-to-check-if-an-object-has-a-key-in-javascript/
// most of the advantages seem to be about speed, but I couldnt get object.keys working here for some reason
// so I tried the has own property thing and that seemed to work
  
 for (key in thing) {
    if (thing.hasOwnProperty(key)) {
      text += key + "   (" + thing[key] + ")   ";
  
    }
  }
textOverlay.push(text)
}




// ok so after a ton of head bashing this creates my buttons
// can fit 15, unless the NHL does the orgeastic hockey night where every team plays (16 games)
// this should be fine

  for (i = 0; i < GamesFinals.length; i++){
      test.createButton(x, y, 125, 75, 0, 0, buttonLabels[i], textOverlay[i], textOverlayLN2[i])
      x += buttonSpacingX
      if (x > 900){
        x = 100
        y += buttonSpacingY
      }
    }
    
// console.log(GamesFinals)
// console.log(nhlGames)
// console.log(GoalScorers)
// console.log(currentStats)
}

function preload(){
  // load the logo and top text
  nhllogoImg = loadImage('assets/nhl_Logo.png');
  textImage1 = loadImage('assets/lastnight.png')
}

function setup() {
  createCanvas(1000, 1000)
  image(nhllogoImg, 0,0, 1200, 1200)
  image(textImage1, 0,0, 1000, 700)
  nhlStats()
}


function draw() {
  background(192,192,192)
 


  // ok so the font stuff I did for the buttons seems to be overriding this, I see it flash the correct thing for a second then go
  // awaw. I think what I will do as a fix (to avoid troubleshooting this a ton) is to make images with the text I want
  // yeah hacky I know but I do want it to look a certain way
  // push()
  // text('test123', 100,100)
  // pop()

// basically does all the work
  test.drawButton()

  
  
}
