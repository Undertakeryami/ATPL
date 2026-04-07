new p5(function(p){
   
    p.setup = function(){
        let canvas = p.createCanvas(600, 300)
        canvas.parent("condanim")

    }

    p.draw = function(){
        p.background('#fffdd0')
        p.stroke('#5c3d11')
        p.strokeWeight(3)
        p.rect(100,100,200,100)


        
       
}
})