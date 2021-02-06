const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint; 

var drops1, drops2, drops3, drops4, umbrella;
var drops1image, drops2image, dropsimage3, dropsimage4,umbrellaimage;
var maxDrops=100;

function preload(){
    drops1image = loadImage("thunderbolt/1.png");
    drops2image = loadImage("thunderbolt/2.png");
    dropsimage3 = loadImage("thunderbolt/3.png");
    dropsimage4 = loadImage("thunderbolt/4.png");
    umbrellaimage  = loadImage("Walking Frame/walking_1.png");
}

function setup(){
    createCanvas(500,500);
    engine = Engine.create();
    world = engine.world;

    umbrella = new Umbrella(250,450,100,100);
}

function draw(){
    display();
    update();
    walkman();
}   

