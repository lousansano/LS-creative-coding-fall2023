// new plan
// hard code in 3 pieces of art and create some sort of visual


// create all variables
var year1;
var artist1;
var born1;
var died1;
var title1;
var year2;
var artist2;
var born2;
var died2;
var title2;
var year3;
var artist3;
var born3;
var died3;
var title3;
var height1;
var height2;
var height3;
var death1;
var death2;
var death3;
// fun bug that took like 15 to sqaush, didnt setup my artObjectLoad in setup, so nothing worked
function setup() {
  createCanvas(600, 600)
  //artObjectLoad()
  artInformation()

}

// json parsing function, grab info from 3 different works of art and fill variables with info
async function artInformation(){

  let artLink = "https://collectionapi.metmuseum.org/public/collection/v1/objects/2658"
  let ObjectRequest = await fetch(artLink)
  let artStats = await ObjectRequest.json()

  let artLink2 = "https://collectionapi.metmuseum.org/public/collection/v1/objects/56046"
  let ObjectRequest2 = await fetch (artLink2)
  let artStats2 = await ObjectRequest2.json()

  let artLink3 = "https://collectionapi.metmuseum.org/public/collection/v1/objects/356222"
  let ObjectRequest3 = await fetch (artLink3)
  let artStats3 = await ObjectRequest3.json()


  year1 = artStats.accessionYear
  artist1 = artStats.artistDisplayName
  born1 = artStats.artistBeginDate
  died1 = artStats.artistEndDate
  title1 = artStats.title

  year2 = artStats2.accessionYear
  artist2 = artStats2.artistDisplayName
  born2 = artStats2.artistBeginDate
  died2 = artStats2.artistEndDate
  title2 = artStats2.title

  year3 = artStats3.accessionYear
  artist3 = artStats3.artistDisplayName
  born3 = artStats3.artistBeginDate
  died3 = artStats3.artistEndDate
  title3 = artStats3.title


}
// draw everything
// had it do text for year born and name of artist
// had the height of ellipse be when the art work was added to the met collection (idk why, this was a hold over from my previous attempt)
// made the sort of bulbusness of the ellipse the age of the artist when they died

function draw(artInformation) {
  background(245, 198, 120)

  push()
  textAlign(CENTER);
  textSize(50);
  text (born1, 60,30,60,60);
  text (born2, 270, 30, 60, 60);
  text (born3, 460, 30, 60, 60);
  pop()

  push()
  textAlign(CENTER);
  textSize(20);
  text (artist1,60,90,60,60)
  text (artist2,270,90,60,60);
  text (artist3,465,90,60,60);
  pop()

  let drawTest = map(year1, 1000, 2023, 0, 400)
  let drawTest2 = map(year2, 1000, 2023, 0, 400)
  let drawTest3 = map(year3, 1000, 2023, 0, 400)

  let height1 = map(born1, 1000,2023, 0, 400)
  let height2 = map(born2, 1000,2023, 0, 400)
  let height3 = map(born3, 1000,2023, 0, 400)

  let death1 = map(died1, 1000,2023,0,250)
  let death2 = map(died2, 1000,2023,0,250)
  let death3 = map(died3, 1000,2023,0,250)

  push()
  strokeWeight(4)
  fill(255, 230, 186)
  ellipse(100, drawTest, death1, height1)
  pop()

  push()
  strokeWeight(4)
  fill(35, 48, 103)
  ellipse(300, drawTest2, death2, height2)
  pop()

  push()
  strokeWeight(4)
  fill(128, 200, 155)
  ellipse(500, drawTest3, death3, height3)
  pop()
  
}
