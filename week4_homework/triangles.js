// CLASS 1 
// declare the name of the shape creation class
// constructor
// x1, y1, x2, y2, x3, y3
// color of triangle?
// speedx/y?
class Tris{
    constructor(_x,_y,_speedX,_speedY){
        this.x = _x
        this.y = _y
        this.speedX = _speedX
        this.speedY = _speedY
        this.colorR = random(255)
        this.colorB = random(255)
        this.colorG = random(255)
        this.strokeWeight = 4
        this.angle = 0
        this.point = point(this.x, this.y)

    }
// shape creation
// create()
// fill (random?)
// triangle(tktktkt)
create(){
    push()
    fill(this.colorR,this.colorB,this.colorG)
    strokeWeight(this.strokeWeight)
    //translate(this.x3, this.y3)
    //rotate(this.angle)
    triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3)
    pop()
    push()
    strokeWeight(6)
    point(this.x, this.y)
    pop()

   this.x1 = this.x
   this.y1 = this.y
   this.y2 = this.y
   this.x2 = this.x + 50
   this.y2 = this.y - 100
   this.x3 = this.x + 100
   this.y3 = this.y
}
// update ()
// ++ to x and y values for the triangle

 update(){
  this.x += this.speedX;
  this.y += this.speedY;

  if (this.y < 0 || this.y > height){
    this.speedY = -this.speedY;
    this.y += this.speedY;
  }

  if (this.x < 0 || this.x > width){
    this.speedX = -this.speedX;
    this.x += this.speedX;
 }
 }

collide(){
  hit = collidePointTriangle(this.x, this.y, this.x1, this.y1,this.x2,this.y2,this.x3,this.y3);
  print('colliding?', hit);
}


colorSwap(){
this.colorR = 255
this.colorG = 200
this.colorB = 0

}
}

//NEW IDEAS
// have tris class create the generic small spinning triangle
// in main js doc, create the array there and generate upon clicking mouse, store in array
// create repel interaction? or color change?