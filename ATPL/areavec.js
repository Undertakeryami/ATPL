new p5(function(p){
   
    p.setup = function(){
        let canvas = p.createCanvas(600, 300)
        canvas.parent("areavecanim")

    }

    //creating a cuboid, bruh doing it manually bruhhuuhushdhdsufhushsfhsf
    p.draw = function(){
        p.background("#fffdd0");
        p.stroke("#5c3d11");
        p.strokeWeight(2);


    


    //upar ka face, woh parallelogram me
    p.fill('#c9a96e')
    p.quad(150, 175,  430, 175,  490, 215,  210, 215);

//left side
  p.fill('#8a6030');
    p.quad(150, 175,  210, 215,  210, 230,  150, 190);

//front sie /face 
p.fill('#a0742a');
    p.quad(210, 215,  490, 215,  490, 230,  210, 230);
      
    //cause to show in 3d from a 2dd screen only we need 3 parameter, the top, left and fromt!


     p.da(320, 193, 320, 70);
     //lets draw a arrow
}


p.da = function(x1, y1, x2, y2){
    p.push();
    p.stroke('#5c3d11');
    p.strokeWeight(3);

    p.fill(0);
    p.line(x1, y1, x2, y2);
    let a = p.atan2(y2-y1, x2-x1);
    p.translate(x2, y2)   //a bssic arrow
    p.rotate(a);
 let ars = 10;
        p.triangle(0, 0, -ars, ars / 2, -ars, -ars / 2);
        
        p.pop();
}



//cause we
})