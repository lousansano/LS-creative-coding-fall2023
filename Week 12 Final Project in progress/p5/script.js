var seinfeldImages = [];
var game5Images = [];
var userAnswers = [];
currentPos = 0;

function preload(){
// going to try and load an entire directory instead of doing one at a time
// inspired by method found in https://editor.p5js.org/padaduez/sketches/gmf7E_1h- this p5 sketch by user padaduez

let images = 5 //need to tell it how many images there are, testing with 5
  
for (let i = 0; i < images; i++){ // this essentially creates a loop that lets me iterate over the image paths, then loads the image into the array
  path = 'images/faces/' + str(i) + '.png'
  loaded_image = loadImage(path)
  seinfeldImages.push(loaded_image)
} // alright so this works but I need to figure out a way to get it so that I can keep the image names and not have to name 0-? numbers

}

function setup() {
  createCanvas(1500, 1000)

  seinfeldImagesCopy = seinfeldImages.slice()

  nameEntry = createInput()
  nameEntry.position(100, 200)

  submitButton = createButton('Submit')
  submitButton.position(200,300)
  submitButton.mousePressed(submittedAnswer)

  forwardButton = createButton('>')
  forwardButton.position(550,550)
  forwardButton.mousePressed(forwardbuttonPressed)

  backButton = createButton('<')
  backButton.position(350,550)
  backButton.mousePressed(backbuttonPressed)

  for(let i = 0; i < 5; i++){ // this gets me my 5 image array for a single round of the game, I duped the OG array to avoid modifying it, not sure that was totally required
    let randomImage = floor(random(seinfeldImagesCopy.length))

    game5Images.push(seinfeldImagesCopy[randomImage])

    seinfeldImagesCopy.splice(randomImage, 1);
  }

 // console.log(game5Images)

}

function submittedAnswer(){
  theAnswer = nameEntry.value()
    userAnswers.push(theAnswer)


  console.log(userAnswers)
}

function forwardbuttonPressed(){
  if (currentPos === 4) {
    currentPos = 4
  } else{
currentPos = (currentPos + 1) % game5Images.length
}
}

function backbuttonPressed(){
  if (currentPos === 0) {
    currentPos = 0
  } else{
    currentPos = (currentPos - 1) % game5Images.length
  }
}


function draw() {

  background(200)


  image(game5Images[currentPos], 200, 200, 300, 300)

  text(userAnswers[0], 550, 150)
  text(userAnswers[1], 550, 200)
  text(userAnswers[2], 550, 250)
  text(userAnswers[3], 550, 300)
  text(userAnswers[4], 550, 350)
 
}

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
  // loop thru 5 image array and draw one in the center
    // need to make the draw image line sync with the forward/back button
   
  // draw submit, forward, and back buttons NEED TO ADD FORWARD/BACK

  // draw text entry field DONE


  // draw 1-5 somewhere on the screen to show submitted answers KINDA

  // once all fields have user submiited text, draw a final submit button
  // show a score/correct answers screen