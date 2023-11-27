// CLASS 2
// declare name of class "SPINMaker"
// constrtuctor 
// create array to store spinning triangles

class Spinner{
    constructor(){
        this.triarray = []
     }
    
     // generate spinner ()
    // let spinner = new Shape
    // load values
    // write in the spinning code?
    // add to array
    
    createSpinner(){
        let spinner = Tris.create();
    
    
       // spinner.color = [random (255), random (255), random (255)]
    
        this.triarray.push(spinner)
    }
    
    // update?
    // update position
    // collision detection?
    
    update(){
        for(let i = 0; i < this.triarray.length; i++){ // copied this from the example as I dont know how I can acomplish this yet, will work on collision later
            this.triarray[i].update()
        }
    }
    
    // drawing
    // if mouse is clicked
      // for tktktk this.spinner i display
    
      // well maybe I can do this in the draw function instead
      drawing(){
        for(let i = 0; i < this.triarray.length; i++){ // copied this from the example as I dont know how I can acomplish this yet, will work on collision later
            this.triarray[i].drawing()
        }

      //  rect(5, 100, 50, 200)
    }
    

    }