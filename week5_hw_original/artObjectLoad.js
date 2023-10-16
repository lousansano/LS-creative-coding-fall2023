// alright well maybe lets try to get this going as a class instead of a function in the main js file?

class artObjectLoad{
    constructor(){
        this.artwork = []
    }

async artObjects(){

    let ObjectRequest = await fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects")
  
    let artObject = await ObjectRequest.json()
  
    let ArtID = artObject.objectIDs
  
    //console.log(ArtID)
   
    //alright finally, got it give me a list of all the art 0-485,000 something
    // now to try and get it to give me a random art object
  
    // nice ! it worked. Thank you to Vicky Gonsalves on stackoverflow (https://stackoverflow.com/questions/19589598/how-to-get-random-values-in-json)
    // for introducing me to math.floor JS method (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) to generate a 
    // random int from the objectIDs array
  
    randomArtID = artObject.objectIDs[Math.floor(Math.random() * artObject.objectIDs.length)];
  
    // ok so on reload this give me a random ID for an artwork, now I need to load lets say 5 to start into an array, defined an array on top
  
  
    for (i = 0; i < 5; i++){
        o
      artwork.push(randomArtID);
    }
  
    console.log(artwork)
  
    //ok sick this fills the array with 5 objects but they are all the same...
  }
}