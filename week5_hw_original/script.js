//plan
// Using the Met museum API grab maybe 10 works of art randomly and load into array (https://collectionapi.metmuseum.org/public/collection/v1/objects)
// for the 10 works grab aquision year, title, artist, image of work?
// graph by aquision year (1870-2030)
// have square image previews of each work, print name of artist and title

Artwork = []
artCheck = []
//let obj = 0
//start = false;
var year;


// fun bug that took like 15 to sqaush, didnt setup my artObjectLoad in setup, so nothing worked
function setup() {
  createCanvas(600, 600)
  //artObjectLoad()
  artInformation()
}

// this is useless now that I could not figure out how to add 5 descrete values to the array, but leaving it in here

// async function artObjectLoad(){


//   let ObjectRequest = await fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects")

//   let artObject = await ObjectRequest.json()

//   let ArtID = artObject.objectIDs

//   //console.log(ArtID)
 
//   //alright finally, got it give me a list of all the art 0-485,000 something
//   // now to try and get it to give me a random art object

//   // nice ! it worked. Thank you to Vicky Gonsalves on stackoverflow (https://stackoverflow.com/questions/19589598/how-to-get-random-values-in-json)
//   // for introducing me to math.floor JS method (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) to generate a 
//   // random int from the objectIDs array

//   randomArtID = artObject.objectIDs[Math.floor(Math.random() * artObject.objectIDs.length)];

  // ok so on reload this give me a random ID for an artwork, now I need to load lets say 5 to start into an array, defined an array on top

console.log(Artwork)


async function artInformation(draw){
 

  let artworkGen = int(random(1,400000))

  let artLink = "https://collectionapi.metmuseum.org/public/collection/v1/objects/" + int(random(1,400000))
 
  let ObjectRequest = await fetch(artLink)

  let artStats = await ObjectRequest.json()

let year = artStats.accessionYear
let title = artStats.title
let artist = artStats.artistDisplayName
//artImage = artStats.primaryImageSmall


for (i = 0; i < 5; i++){
  artCheck.push(year)
  }
}

for (j = 0; j < 5; j++){
  Artwork.push(year)
}

console.log(artCheck)
console.log(Artwork)


  //Ok I need to give up on this, I would like it to grab random values from the art colleciton thing to account for growth
  //but I think Im just gonna hard code in looking thru the first random 400,000 works
  // this is inspired by some tips I found here - https://www.geeksforgeeks.org/find-duplicates-given-array-elements-not-limited-range/
  
  // ArtworkOutput.push(randomArtID)
    // for (j = 0; j < artCheck.length; j++){
    //   if (ArtworkOutput[i] == artCheck[j]){
    //     start = true;
    //   }
    // }
    // obj ++;
    // if (obj == 1 && start == false){
    //   ArtworkOutput.push(artCheck[j]);
    // }


function draw() {
  background(200)



  // let drawTest = map(year, 1, 2023, 0, 500)

  // // well the image display thing is out due to control checks, maybe I am doing something wrong, but giving up on that
  // //loadImage(artImage, img => {image(img,5,5)})

  // rect(0, drawTest, 100, 100)



  
}
