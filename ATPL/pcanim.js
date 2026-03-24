new p5(function (p){


p.setup = function (){
let canvas =  p.createCanvas(600, 400)
 //this is were i initlsie my canvas widht

 canvas.parent('pressurecookeranim')
}

//i was debguuing this and saw that 2 p5.js animations was clashing

p.draw = function(){
p.background('#3e3d28')
p.noStroke()
p.rect(, y, 20)
p.circle(x2, y2, 20)
p.circle(x3, y3, 20)
//the particle that i want to show

x = x+ speed



}
})