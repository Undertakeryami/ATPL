new p5(function(p){
    let x = 50
    let r = 40 // radius
    let a = 0 // a is the angle
    let s = 2 
    p.setup = function(){
        let canvas = p.createCanvas(600, 300)
        canvas.parent("cartrollanim")

    }

    p.draw = function(){
        p.background('#fffdd0')
        p.stroke('#5c3d11')
        p.strokeWeight(3)
        p.line(0, 230, 600, 230)

        let cy = 230 - r //so the wheel center doesn't move, on the y axis cause thats a case i would cover in other section
        p.noFill()
        p.stroke('#55330d')
        p.strokeWeight(3)
        p.circle(x, cy, r * 2)


        //drawing spokes so the usser could see the animation 


        //looping is good,

        for(let i =0; i<4; i++)
            {

                 let sa = a + (i * p.PI / 2)
                 let sx = x + r * p.cos(sa)
                 let sy = cy + r * p.sin(sa)
                 p.line(x, cy, sx, sy)
            }

            let dotX = x + r * p.cos(a)
            let dotY = cy + r * p.sin(a) 
             p.fill('#ff6b6b')
            p.noStroke()
            p.circle(dotX, dotY, 12)

            //the hub
             p.fill('#0d2b55')
    p.circle(x, cy, 10)

    //simple equation to roll the wheel
        
let s = 2 //speed
    x = x+s

    a = a+(s/r)
    if (x > 650) x = 50
}
})