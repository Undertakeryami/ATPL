new p5(function (p){
let off = 0;
let speed = 0.04; //Speed of the wave
let A = 60;
let F = 0.02;
p.setup = function (){
let canvas =  p.createCanvas(680, 220)
 //this is were i initlsie my canvas widht for the since wave since it needs a little horiontal type .

 canvas.parent('microwaveanim2')
}
//i was debguuing this and saw that 2 p5.js animations was clashing
p.draw = function(){
p.background('#fffdd0')
let cx = p.width/2;
let cy = p.height/2;  //prebuilt variables brother!
//the wave
p.stroke(100);
p.strokeWeight(0.5);
p.line(20, cy, p.width-20, cy);
//drawwing the sincee wave; :D
 p.stroke(55, 138, 221); 
    p.strokeWeight(2.5);
    p.noFill();
    p.beginShape()
//saw in a yt video lol

for (let i = 20; i <= p.width*0.55; i++) {
      let y = cy + A * p.sin(F * i + off);
      p.vertex(i, y);
    }
    p.endShape();





let dotX = cx;
let dotY = cy + A * p.sin(F * dotX + off);

//converting y position into an angle using them map funciton.
//i would have to change the molecule since its a dot and when the dot rotates it is not visible thats why we have to work towards a nice molucule
// a moleucle like water
let a = p.map(dotY, cy-A, cy+A, -p.PI/2, p.PI/2)


//the red line that follows the dot, on like being made where the dot it for the reference for the user to grasp what i owuld be saying ther elol
//making a group :D

p.push();
p.translate(p.width * 0.75, cy); // changing from cx cause (its the center) to p.width * scalingdactor

p.rotate(a);


p.fill(220, 50, 50); //ovygen mlecuel
p.circle(0,0,40)

//hydrogeen
p.fill(240);
p.circle(-25, -25, 20);

//right one

p.fill(240);
p.circle(25, -25, 20);

p.stroke(50);
p.line(0,0,0,35) //dipole arrow;
//why not make a dipole triangel???
p.line(0, 0, 0, 35);
p.triangle(-5, 30, 5, 30, 0, 42);

p.pop()

//group made 

//This was a nice result, mainly i used most of the things like making wave and all from the previous 
//javasciprt file but like the reason i halfed the wave is to show the dipole movement simulatnously.


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
