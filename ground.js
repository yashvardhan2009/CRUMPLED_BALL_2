class ground{

  constructor(x,y,width,height){

    this.y = x;

    this.x = x ;

    this.w = width;

    this.h = height

    
    this.body=Bodies.rectangle(this.x, this.y, this.w,this.h,{isStatic: true})
		World.add(world, this.body);

   
  
 }

   display(){

    push()
    translate();
    rectMode(CENTER)
   strokeWeight(10);
    
    fill("red")
    stroke("brown")
    rotate(this.angle)
    rect(this.x,this.y,this.w,this.h);
    pop()
    

 }

}