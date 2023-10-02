let colorR = 0; // set variables to allow for color/fill change
let colorG = 0;
let colorB = 0;
let a = 300; // variables for triangle points
let b = 150;
let c = 100;
let d = 400;
let e = 500;
let f = 400;
let g = 0;

function setup() {
  createCanvas(600, 600)
  frameRate(60)
  fill(0)
}

function draw() {
background(255)

// draw 4 quadrents
strokeWeight(4) 
fill(82,18,18)
rect(0, 0, 300, 300)

fill(248, 188, 208)
rect(300, 300, 300, 300)

fill(235,49,49)
rect(0, 300, 300, 300)

fill(230, 101,101)
rect(300, 0, 300, 300)

// color change the triangle on quadrant mouseover
  if ((mouseX > 0) && (mouseX < 300) && (mouseY > 0) && (mouseY < 300)){ //upper left
    (colorR = 82, colorG = 18, colorB = 18);
  }

  else if ((mouseX > 0) && (mouseX < 300) && (mouseY > 300) && (mouseY < 600)){ //lower left
    (colorR = 235, colorG = 49, colorB = 49);
  } 

  else if ((mouseX > 300) && (mouseX < 600) && (mouseY > 0) && (mouseY < 300)){ // upper right
    (colorR = 230, colorG = 101, colorB = 101);
  }

  else if ((mouseX > 300) && (mouseX < 600) && (mouseY > 300) && (mouseY < 600)){ // lower right
    (colorR = 248, colorG = 188, colorB = 208);
  }

  // start triangle on white
  else{
  colorR = 255;
  colorG = 255;
  colorB = 255;
  }

// draw triangle
strokeWeight(3)
fill(colorR, colorG, colorB)
triangle(a, b ,c ,d,e,f)

strokeWeight(5)

//how the triangle reacts when quadrants are clicked

 if (mouseIsPressed && (mouseX > 0) && (mouseX < 300) && (mouseY > 0) && (mouseY < 300)){
  colorR = 255, a++
 }

 if (mouseIsPressed && (mouseX > 0) && (mouseX < 300) && (mouseY > 300) && (mouseY < 600)){
  d--
 }
 if (mouseIsPressed && (mouseX > 300) && (mouseX < 600) && (mouseY > 0) && (mouseY < 300)){
  a--
 }

 if (mouseIsPressed && (mouseX > 300) && (mouseX < 600) && (mouseY > 300) && (mouseY < 600)){
  f--
 }

}


// left some random stuff here commented out that I was playing with while doing the assigment

//function mousePressed()
  //for (let x = 0; x < 100; x++);

/* if ((mouseX > 40) && (mouseX < 80) && (mouseY > 20) && (mouseY < 80)){
  fill(255); */

/* point(300,150)
strokeWeight(10)
point(100,400)
point(500,400) */

//speedX = -1
//} 

//if (x < 0){ //if needs a boolean value
  //speedX = 1
//}

// keycodes 
// left 37
// right 39
// up 38
// down 40

// for loops
// for (i=0;i<100;i+=1 OR i++){
//  ellipse 