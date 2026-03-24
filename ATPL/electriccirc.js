new p5(function (p){

let x = 20
let x2 = 30
let x3 = 40
let speed = 30
let speed2 = 10
let speed3 = 40
let y = 30
let y2 = 40
let y3 = 50
let yspeed = 30
let yspeed2 = 15
let yspeed3 = 45


p.setup = function (){
let canvas =  p.createCanvas(600, 400)
 //this is were i initlsie my canvas widht

 canvas.parent('electronsmovin')
}

//i was debguuing this and saw that 2 p5.js animations was clashing

p.draw = function(){
p.background('#3e3d28')
p.noStroke()
p.circle(x, y, 20)
p.circle(x2, y2, 20)
p.circle(x3, y3, 20)
//the particle that i want to show

x = x+ speed
x2 = x2+speed2
x3 = x3+speed3
y2 = y2+yspeed2
y3 = y3+yspeed3

y = y+yspeed
if (x>600 || x<0){
 speed = speed * -1

}

if(y>400  || y<0){
    yspeed = yspeed * -1
}
if (x2>600 || x2<0){
 speed2 = speed2 * -1

}

if(y2>400  || y2<0){
    yspeed2 = yspeed2 * -1
}

if (x3>600 || x3<0){
 speed3 = speed3 * -1

}

if(y3>400  || y3<0){
    yspeed2 = yspeed3* -1
}



}
})