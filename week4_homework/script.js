// main js doc

// let theshapes = new class1

// setup
// create canvas

// draw
// create shape
// update
// draw

let triarray = []; // triangle storage

function setup() {
  createCanvas(600, 600)
  angleMode(DEGREES) // unused from spinning experiment
  
  for (i = 0; i < 1; i++){
    triarray.push(new Tris(random(100,250),random(125,200),random(1,5),random(1,6)))
  }

}

function draw() {
  background(202, 230,10)
for (let i = 0; i < triarray.length; i++){ // loop thru the array and draw/update
  triarray[i].create()
  triarray[i].update()

// for (let t = 0; t < triarray.length; t++){ // trying to nest a loop for interaction
//  if (i != t && triarray[i].collides(triarray[t])){
//   triarray[i].colorSwap()
//  }

}
}


function mousePressed(){ // generate new triangles on mouse press
  for (i = 0; i < 1; i++){
    triarray.push(new Tris(random(100,250),random(125,200),random(1,5),random(1,6)))
  }

  console.log(triarray)
}
    
// add random create triangles to array on mousepress
// make update move them
// check for wall and other triangles