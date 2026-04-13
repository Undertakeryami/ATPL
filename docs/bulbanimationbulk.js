
new p5(function(p){
let x = 20
let speed = 30
let y = 30
let yspeed = 30


p.setup = function (){
let canvas =  p.createCanvas(600, 400)
 //this is were i initlsie my canvas widht

 canvas.parent('electronsmovinbulk')
}



p.draw = function (){
p.background('#3e3d28')
p.noStroke()
p.circle(x, 200, 20)
p.circle(x, 100, 20)
p.circle(x, 300, 20)
//the particle that i want to show

x = x+ speed

y = y+yspeed
if (x>600 || x<0){
 speed = speed * -1

}

if(y>400  || y<0){
    yspeed = yspeed * -1
}


}})
