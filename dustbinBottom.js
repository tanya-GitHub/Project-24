class DustbinBottom{

    constructor(width, height){
        this.width = width;
        this.height = height;

        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(620, 540, 200, 20, options);
        World.add(world, this.body);


    }

    display(){
        fill("brown");

        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }



}



