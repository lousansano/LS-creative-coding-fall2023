class ButtonSystem{
    constructor(){
        this.buttons = []
    }

 createButton(){
    let temp = new MakeButton(
       width / 2,	
       height / 2,
		100,		
        50,
		0,		
        0,
		"blank"
    )

    this.buttons.push(temp)
 }

 // need to try and grab team names to fill as the button info
 fillButtonContent(){
    for(let i = 0; i <this.buttons.length; i++){
        if(this.buttons[i].content === "blank"){
            this.buttons[i].content === "test";
        }
    }
 }

//fill button library element with MakeButton values?
drawButton(){
    for (let i = 0; i < this.buttons.length; i++){
        this.shapes[i].drawCustomButton()
    }

}

}