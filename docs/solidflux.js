new p5(function(p) {

  p.setup = function() {
    let canvas = p.createCanvas(600, 300, p.WEBGL); // don't forget WEBGL!
    canvas.parent("sphereflux");
  }

  p.draw = function() {
    p.background("#fffdd0");
    p.orbitControl(); // fund this cool shit in an article
   
 



    p.push();
    p.noFill();
     p.stroke("#000000")
    p.strokeWeight(0.5);
     p.sphere(150);
    p.pop();

 
    p.push();
 p.noStroke();
    p.emissiveMaterial(255, 80, 80);
    p.sphere(20); // the charge 
p.pop();

  
  
  }

})