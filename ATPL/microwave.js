new p5(function (p){


let off = 0;
let speed = 0.04; //Speed of the wave
let A = 60;
let F = 0.02;



p.setup = function (){
let canvas =  p.createCanvas(680, 220)
 //this is were i initlsie my canvas widht for the since wave since it needs a little horiontal type .

 canvas.parent('microwaveanim')
}

//i was debguuing this and saw that 2 p5.js animations was clashing

p.draw = function(){

p.background('#fffdd0')
let cx = p.width/2;
let cy = p.height/2;  //prebuilt variables brother!
//the wave


p.stroke(100);
; // blue wave
p.strokeWeight(0.5);
p.line(20, cy, p.width-20, cy);




//drawwing the sincee wave; :D

 p.stroke(55, 138, 221); 
    p.strokeWeight(2.5);
    p.noFill();
    p.beginShape()

//saw in a yt video lol

for (let i = 20; i <= p.width - 20; i++) {
      let y = cy + A * p.sin(F * i + off);
      p.vertex(i, y);
    }
    p.endShape();





let dotX = cx;
let dotY = cy + A * p.sin(F * dotX + off);


//the red line that follows the dot, on like being made where the dot it for the reference for the user to grasp what i owuld be saying ther elol

p.stroke(226, 75, 74, 100);
p.strokeWeight(1);
p.line(dotX, cy, dotX, dotY);


//The red dot 
p.stroke(226, 75, 74);
p.strokeWeight(1.5);
p.fill(226, 75, 74);
p.circle(dotX, dotY, 16);


off -= speed;

}   })
