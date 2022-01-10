var pathimg,path
var boyimg,boy
function preload(){
pathimg=loadImage("path.png")
boyimg=loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200)
  path.addImage(pathimg)
  path.velocityY=3
  path.y=path.height/2
  boy=createSprite(200,370,50,50)
boy.addAnimation("running",boyimg)
boy.scale=0.09
edges=createEdgeSprites()
}

function draw() {
  background(0);
drawSprites()
if (path.y>400){
  path.y = -10
}
console.log (path.height)
boy.collide(edges[0])
boy.collide(edges[1])
boy.x=mouseX
}
