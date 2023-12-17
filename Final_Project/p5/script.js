//SEINFELD CHARACTER QUIZ GAME
//by Lou Sansano
//NYU IDM creative coding fall 2023 final project

// pixel art created with the help of https://giventofly.github.io/pixelit/
// "https://www.flaticon.com/free-icons/next" Next icons created by Roundicons - Flaticon

// made three custom classes to handle all of the image and name storage
// I probably could clean this up by eliminating user answer pair and just renaiming the images on import?

class PreImageRenameLoad{
  constructor(seinImg,fileName){
   this.seinImg = seinImg;
   this.fileName = fileName;
}
}

class UserAnswerPair{
  constructor(userInput,correctAnswer){
    this.userInput = userInput
    this.correctAnswer = correctAnswer
  }
}

class AFinalImage{
  constructor(imgFileName, correctAnswerName){
    this.imgFileName = imgFileName
    this.correctAnswerName = correctAnswerName
  }
}

//setting up all of my items here, have gameState control state (start/game/score screen)
//have currentPos kind of acting as the count for where in the 5 image stack I am

gameState = 'start';
buttonsCreate = false

allImages = 11;
seinfeldImages = [];

imageKeyValues = [];
finalPairs = {};

game5Images = [];
game5correctAnswers = [];
currentPos = 0;

userAnswers = [];

MaxScore = 0;
pairScore = 0;
finalScore = 0;

//preload all of my images and the text file with the answers

function preload(){
loadStrings('textfiles/charnames.txt', renaming)

// going to try and load an entire directory instead of doing one at a time
// inspired by method found in https://editor.p5js.org/padaduez/sketches/gmf7E_1h- this p5 sketch by user padaduez

startBackground = loadImage('images/backgrounds/StartScreen.png')
gameBackground = loadImage('images/backgrounds/GameScreen.png')
endBackground = loadImage('images/backgrounds/EndScreen.png')

for (let i = 0; i < allImages; i++){ 
  path = 'images/faces/' + i + '.jpg'
  loaded_image = loadImage(path)
  editedPath = path.replace('images/faces/','')
  imageObj = new PreImageRenameLoad(loaded_image, editedPath)
  seinfeldImages.push(imageObj)
}
}

// p5/js does not seem to have built in a list files thing, ugh
// I guess I need to use the 0-xx.jpg naming convention and then match them up to answers another way

// this doesnt really "rename", gave up on that, but it gets the data from the text file and pairs it up with
// the file name, then I use that later for answer checking

function renaming (data){
  for (let i = 0; i < data.length; i++){
    let thePairs = split(data[i], '=')
    //console.log('thepairs', thePairs)
    let imageName = thePairs[0]
    let realCharacterName = thePairs[1]
    let finalPair = {imageName, realCharacterName}
    imageKeyValues.push(finalPair)
  }
arrayDebug()
}

// just for me to debug and test stuff
function arrayDebug(){
    console.log(imageKeyValues)
    console.log(seinfeldImages)
}
//controls if the submit all button is shown, will only show after the user has looked at all 5 images
function submitallStatus(){
  if (userAnswers.length === 5){
    submitallButton.show()
  }
}
// this runs after the user hits submit to enter in an answer, it creates a UserAnswerPair element and pushes it to
// the user answers array. It also grabs the correct answer for score checking later
function submittedAnswer(){
  theUserAnswer = nameEntry.value()
  for(let i = 0; i < game5correctAnswers.length; i++){
    correctAnswer = game5correctAnswers[currentPos].correctAnswerName
  }
 
  if(userAnswers[currentPos]){
    userAnswers[currentPos].userInput = theUserAnswer
    userAnswers[currentPos].correctAnswer = correctAnswer 
  } else {
    anAnswerObj = (new UserAnswerPair(theUserAnswer, correctAnswer))
    userAnswers.push(anAnswerObj)
  }

  nameEntry.value('')

    submitallStatus()

console.log(userAnswers)
}

// maybe come back to this, have the entry field be dymanic 
// something like this?
  // if(userAnswers[currentPos]){
  //   nameEntry.value(userAnswers[currentPos].userInput)
  // } else {
  //   nameEntry.value('')
  // }

//was messing with trying to do state changes in setup, but because it only runs once, I had to change gears
function setup() {
  createCanvas(1500, 1000)
  gameInitialize()
}

// what happens when all the buttons are pressed
function submitbuttonPressed(){
  
  submittedAnswer()
}

function forwardbuttonPressed(){
  if (!userAnswers[currentPos] || !userAnswers[currentPos].userInput){
    submittedAnswer()
  }

  if (currentPos === 4) {
    currentPos = 4
  } else{
currentPos = (currentPos + 1) % game5Images.length
}
}

function backbuttonPressed(){
  if (!userAnswers[currentPos] || !userAnswers[currentPos].userInput){
    submittedAnswer()
  }
  if (currentPos === 0) {
    currentPos = 0
  } else{
    currentPos = (currentPos - 1) % game5Images.length
  }
}

function submitAll(){
 console.log('ALL SUBMITTED!')
gameState = 'end'
 finalScore = 0;
 MaxScore = 0;

 // ESTABLISH SCORING AND COMPARE ANSWERS

 for (i = 0; i < userAnswers.length; i++){
     
  // since there will be possibly first, middle, last names, need to split out the strings
  // might need to account for user not entering a name? ex. Elaine Marie Benes is correct, user enters just Elaine
  // maybe use correct answers to set a length?
  checkInputAnswers = userAnswers[i].userInput.toLowerCase().split(' ')
  checkCorrectAnswers = userAnswers[i].correctAnswer.toLowerCase().split(' ')

  console.log(checkCorrectAnswers)

  // DETERMINE MAX SCORE
  for (thing in checkCorrectAnswers){
    MaxScore++
   }

  pairScore = answerCheck(checkInputAnswers, checkCorrectAnswers)
  finalScore += pairScore
 }

 console.log('this is max score: ' + MaxScore)
 console.log(finalScore)

}

// checks how the user did in the game
function answerCheck(inputArray, correctArray){

  pairScore = 0

  //DETERMINE USER SCORE

  // you know I did this in my midterm too after reading about it somewhere and I kinda understand why it works but also dont
  for (let word of inputArray){
    if (correctArray.includes(word)){
      pairScore++
    }
  }

  return pairScore
}

// changes the state from start screen to game screen on spacebar press
function keyPressed(){
  if (gameState === 'start'){
    if (keyCode === 32){
      gameState = 'game'
    }
}
}

// has my 3 game state functions set to run when the state changes
function draw() {
  
  if (gameState === 'start') {
    startDraw();
  } else if (gameState === 'game') {
    gameDraw();
  } else if (gameState === 'end'){
    endDraw();
  }

}

// sets up the game, loads in 5 images/answer pairs that will be shown to the user 
function gameInitialize(){
  seinfeldImagesCopy = seinfeldImages.slice()

  // this gets me my 5 image array for a single round of the game, I duped the OG array to avoid modifying it, not sure that was totally required
  for(let i = 0; i < 5; i++){ 
    let randomImage = floor(random(seinfeldImagesCopy.length))
    game5Images.push(seinfeldImagesCopy[randomImage])
    seinfeldImagesCopy.splice(randomImage, 1);
  }

  for (let i = 0; i < game5Images.length;i++){
    fileName = game5Images[i].fileName 

    for (let i = 0; i < imageKeyValues.length; i++){
      if (fileName === imageKeyValues[i].imageName){
        theCorrectAnswer = imageKeyValues[i].realCharacterName
      }
    }

    answerPair = (new AFinalImage(fileName,theCorrectAnswer))
    game5correctAnswers.push(answerPair)
  }
  console.log(game5Images)
  console.log(game5correctAnswers)
}

// sets up all my buttons and the entry field for the game screen
function buttonSetup(){
  nameEntry = createInput()
  nameEntry.id('nameEntryField')
  nameEntry.size(400,50)
  nameEntry.position(580, 775)

  submitButton = createButton('')
  submitButton.id('submitButton1')
  submitButton.size(150,50)
  submitButton.position(720,875)
  submitButton.mousePressed(submitbuttonPressed)

  forwardButton = createButton('')
  forwardButton.id('forwardButton1')
  forwardButton.size(70,70)
  forwardButton.position(900,675)
  forwardButton.mousePressed(forwardbuttonPressed)

  backButton = createButton('')
  backButton.id('backButton1')
  backButton.size(70,70)
  backButton.position(600,675)
  backButton.mousePressed(backbuttonPressed)

  submitallButton = createButton('')
  submitallButton.id('submitallButton1')
  submitallButton.size(300,100)
  submitallButton.position(1120,750)
  submitallButton.mousePressed(submitAll)
  submitallButton.hide()
}

//using this so that buttons can all be hidden on the start and end screen
function buttonHide(){
  submitallButton.hide()
  backButton.hide()
  forwardButton.hide()
  submitButton.hide()
  nameEntry.hide()
}

// my game state draw functions
function startDraw(){
background (startBackground)
}

function gameDraw(){
  if (!buttonsCreate){
    buttonSetup()
    buttonsCreate = true
    
  }
  background(gameBackground)
  image(game5Images[currentPos].seinImg, 610, 235, 360, 360)
  
  push()
  textSize(55)
  fill(255,255,255)
  text(str(currentPos + 1) +'.', 550,225)
  pop()

  for (i = 0; i < userAnswers.length; i++){
    yPosition = 300 + i * 90 
    push()
    textSize(25)
    fill(255,255,255)
    //stroke(0)
    //strokeWeight(8)
    text(str(i + 1) + '. ', 60, yPosition)
    text(userAnswers[i].userInput, 90, yPosition)  
    pop()

   
}
push()
textSize(50)
fill(255,255,255)
//stroke(0)
//strokeWeight(8)
text('YOUR ANSWERS', 53, 200)
pop()
} 

function endDraw(){
  buttonHide()
  background (endBackground)
// code for score display
for (i = 0; i < userAnswers.length; i++){
  yPosition = 300 + i * 90 
 push()
  textSize(25)
  fill(255,255,255)
  //stroke(0)
  //strokeWeight(4)
  text(userAnswers[i].userInput, 200, yPosition) 
  text(userAnswers[i].correctAnswer, 550, yPosition)
 pop()
}
push()
 textSize(40)
 textStyle(BOLD)
 text('Your Answers', 200, 175)
  //underline?
 text('Correct Answers', 550, 175)
  //underline?
  pop()
  push()
  textSize(50)
  textStyle(BOLD)
  fill(255,255,255)
 text('Your Score: ', 1000, 475)
 text(finalScore + ' / ' + MaxScore, 1050, 550)
pop()
  

}
  

// further scope

  // dynamic entry field
  // clean up text more
  // instructions?
  // more faces
  // scrubbing

// psudocode for basic functionality

  // array 1 = all images DONE
  // array 2 = all images correct answers (maybe can use keys for answers instead of its own thing?)
// array 2 = 5 images for game DONE
// array 3 = 5 images correct answers (maybe can use keys for answers instead of its own thing?)
// array ? = user entered answers DONE

// preload 
  // load all face images to be used
  // load all images into primary face array DONE BUT NEED TO FIX

// setup
  // create canvas DONE
  // initalize text entry field DONE 
  // pick 5 face images at random and load into array DONE

// draw
  // loop thru 5 image array and draw one in the center DONE
   
  // draw submit, forward, and back buttons DONE

  // draw text entry field DONE

  // sync up the text entry display with the currently displayed image
    // highlight/bold the current position on the text feedback
    // know when they all have submitted answers, and then show a SUBMIT ALL button to end the game round


  // draw 1-5 somewhere on the screen to show submitted answers KINDA

  // once all fields have user submiited text, draw a final submit button
  // show a score/correct answers screen