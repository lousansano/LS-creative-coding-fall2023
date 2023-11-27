let serial
let portName = "/dev/tty.usbmodem142401"
let activeSensor = ""

let buttonState = 0
//let potValue = 0

let triarray = []; // triangle storage

function setup() {
  createCanvas(600, 600)

  serial = new p5.SerialPort()

  serial.onList(gotList)
  serial.list()

  serial.onOpen(gotOpen)
  serial.openPort(portName)

  serial.onData(gotData)


}

function draw() {
  background(202, 230,10)
for (let i = 0; i < triarray.length; i++){ // loop thru the array and draw/update
  triarray[i].create()
  triarray[i].update()

for (let t = 0; t < triarray.length; t++){ // trying to nest a loop for interaction
 if (i != t && triarray[i].collides(triarray[t])){
  triarray[i].colorSwap()
 }

}
}
}

function gotList(ports){
  for (let i = 0; i < ports.length; i++){
    console.log(ports[i])
  }
}

function gotOpen(){
  console.log("Port opened")
}

function gotData(){
  let newData = serial.readLine()
  if(newData.length <= 0) return;
  console.log(newData)

  if(newData === "PRESSED"){ // if the serial monitor shows "PRESSED", draw a Tris
    for (i = 0; i < 1; i++){
      triarray.push(new Tris(random(100,250),random(125,200),random(1,5),random(1,6)))
    }
  }

//   if(newData === "potentiometer"){
//     activeSensor = newData
//   }else{
//  if(activeSensor === "potentiometer"){
//   potValue = newData/2
//  }
  }