// constructor is configured to create custom p5 buttons buttons that have my NHL info in them
// also have the on press content for showing more info
//https://github.com/koerismo/p5.buttons

class MakeButton{
    constructor(_x, _y, _width, _height, _align_x, _align_y, _content,_pressedStuff,_pressedStuffLN2){

        this.element = new Button({
            x: _x,	y: _y,
            width: _width,		height: _height,
            align_x: _align_x,		align_y: _align_y,
            content: _content,
            on_press(){

                // thanks to this helpful p5.js doc for explaining some of this https://github.com/processing/p5.js/wiki/Beyond-the-canvas

                let infoText = createP(_pressedStuff)
                infoText.position(50,200)
                infoText.style("font-family", "Ariel")
                infoText.style("background-color","#FFFFFF")
                infoText.style("font-size","20pt")
               
                let infoText2 = createP(_pressedStuffLN2)
                infoText2.position(50,250)
                infoText2.style("font-family", "Ariel")
                infoText2.style("background-color","#FFFFFF")
                infoText2.style("font-size","20pt")
            }
          });

          // my god getting this style stuff to work was an absolute pain, the readme for p5.buttons stinks
          // had to call in the big guns and ask my software engineer friend for help with the syntax
          // shout out Noah for being a real one
          push()
          this.element.style('default',{"text_font":"Ariel","text_size":18,"background":"#f29c39","border_width":4, "border_color":"#eee"});
          pop()

        
    }

drawCustomButton(){
    // sends the built in draw command for p5 buttons 
    this.element.draw()
}

// I think? this should be all I need to do here

}