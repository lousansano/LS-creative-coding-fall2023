class MakeButton{
    constructor(_x, _y, _width, _height, _align_x, _align_y, _content){
        this.x = _x
        this.y = _y
        this.width = _width
        this.height= _height
        this.align_x = _align_x
        this.align_y = _align_y
        this.content = _content
    }


drawCustomButton(){
    new Button({
        x: this.x,	y: this.y,
        width: this.width,		height: this.height,
        align_x: this.align_x,		align_y: this.align_y,
        content: this.content,
      });
}

//uhh I think this should work? 

}