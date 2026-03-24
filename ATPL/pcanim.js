new p5(function (p){


p.setup = function (){
let canvas =  p.createCanvas(600, 400)
 //this is were i initlsie my canvas widht

 canvas.parent('pressurecookeranim')
}

//i was debguuing this and saw that 2 p5.js animations was clashing

p.draw = function(){
p.background('#fffdd0')
p.noStroke()

p.fill('#5788d1')
p.rect(50, 250, 500, 120, 10)



}
})
