class Drops {
    constructor(x,y,r){
    var options ={
        restitution:0.4,
        friction:0.1,
        density:1
    }
    this.r=r;
    
    this.body = Bodies.circle(x, y, this.r,options);
    this.color=this.color(randon(0, 255), random(0,255), random(0, 255));
    World.add(world, this.body);
    
}
display() {

    var pos = this.body.position;
    var angle = this.body.angle;
    
    push();
    translate(pos.x, pos.y);
    ellipseMode(RADIUS);
    ellopse(0, 0, this.r,this.r);
    pop();
    for(i=0; i<maxDrops; i++){
        drops.push(new createDrop(random(0,400), random(0,400)))
    }
} 

update(){
    if(this.rain.position.y > height){

        Matter.Body.setPosition(this.rain, {x: random(0,400), y: random(0,400)});
    }
    
}    

spawnObstacles(){
    if(frameCount % 10 === 0) {
        var drops = createSprite(600,165,10,40);
        drops.velocityX = -(6 + 3*score/100);
      
        var rand = Math.round(random(1,6));
        switch(rand) {
          case 1: obstacle.addImage(drops1);
                  break;
          case 2: obstacle.addImage(drops2);
                  break;
          case 3: obstacle.addImage(drops3);
                  break;
          case 4: obstacle.addImage(drops4);
                  break;
          default: break;
            }
        }
    }      
} 