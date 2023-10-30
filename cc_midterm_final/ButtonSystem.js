let x
let y
let width
let height
let align_x
let align_y
let content

class ButtonSystem{
    constructor(){
        this.buttons = []
    }


    // makes my buttons and the info lines for on press
 createButton(x, y, width, height, align_x, align_y, content, _pressedStuff, _pressedStuffLN2){
    let temp = new MakeButton(
       x,	
       y,
		width,		
        height,
		align_x,		
        align_y,
		content,
        _pressedStuff,
        _pressedStuffLN2
    )

    this.buttons.push(temp)

    //console.log(temp)
 }

 // draws my buttons
drawButton(){
    for (let i = 0; i < this.buttons.length; i++){
        this.buttons[i].drawCustomButton()
    }

}
}
