new p5(function(p) {

  p.setup = function() {
    let canvas = p.createCanvas(600, 300, p.WEBGL); // don't forget WEBGL!
    canvas.parent("circlesheet");
  }

  p.draw = function() {
    p.background("#fffdd0");
    p.orbitControl(); // fund this cool shit in an article
 
    p.push();
 p.noStroke();

    p.emissiveMaterial(155, 0, 10);
      
    // sma eball used 
    //mathcing the rot of the disk
       p.rotateX(p.PI / 2.5);
       p.translate(0, -150, -0); //the hfe value 
        p.sphere(10); 
p.pop();

  
  p.push(); //  asimple disk
p.rotateX(p.PI / 2.5);
p.fill(100, 100, 255, 60);  //hmm this color is purpulsih, but i wanted somrhting good lol, idk what i wanted, but yeah me noob lol

p.noStroke(); //after this i am trying something cool ig?
p.cylinder(150, 2); 
p.pop();
  }

})