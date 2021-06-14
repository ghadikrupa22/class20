
const World = Matter.World
const Body = Matter.Body
const Bodies = Matter.Bodies
const Engine = Matter.Engine

var engine,world
var log,angle=60
var log1

function setup(){

  createCanvas(600,300)
  
  engine=Engine.create()
  world=engine.world
    
  
  var options={
    isStatic:true
  }

  log=Bodies.rectangle(100,200,100,20,options)
  World.add(world,log)

  var options1={
    isStatic:true
  }

  log1=Bodies.rectangle(200,100,100,20,options1)
  World.add(world,log1)

}

function draw(){
  background("white")
  Engine.update(engine)
  Body.rotate(log,angle)
  push()
  translate(log.position.x,log.position.y)
  rotate(angle)
  rectMode(CENTER)
  rect(0,0,100,20)
  pop()
  rect(log1.position.x,log1.position.y,100,20)
  angle=angle+0.1
}