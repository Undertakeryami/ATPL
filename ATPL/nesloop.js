new p5(function(p){
    let rows =5, cols = 5; // since we don't want it constant rahter than a variable
    const cell = 60, gap = 8;
    const f = 67 //lol you can take any value for which you want to decrement speed lol

    let i = 0, j =0, timer = 0, delay = 20;

    p.setup = function(){
        let w = (cell+gap)*cols - gap;
        let h = (cell + gap)*rows - gap;

        p.createCanvas(w,h).parent('nestloop');
        p.noStroke()

    };


    window.updateRows = function(val){
        rows= +val;
        document.getElementById('rows-val').textContent = val;
        i = 0; j = 0;
        p.resizeCanvas((cell+gap)*cols - gap, (cell + gap)* rows - gap);
    };

    //similarly for updating the number of clumsns we can write as
    window.updateCols = function(val){
        cols = +val;
        document.getElementById('cols-val').textContent = val;
        i = 0; j = 0;
        p.resizeCanvas((cell+gap)*cols - gap, (cell+gap)*rows - gap);
    };

    //for speed updation you can view it slow or fast both :D
    window.updateSpeed = function(val){
        delay = f - +val;
        document.getElementById('speed-val').textContent = val;
    };
    window.resetLoop = function() { i = 0; j = 0; };

    //creating a draw function

    p.draw = function(){
        p.background("#fffdd0")

        //coding the loop part, or the loop animation function

        for(let r = 0; r<rows; r++){ //hmm just like the nested loops
            for(let c = 0; c<cols; c++){
                let x = c*(cell +gap); 
                let y = r*(cell+gap);

                //color bassed, on what the state of the block is
                if (r === i && c === j)      p.fill(83, 74, 183);  //curent indern wala color
                else if (r === i)            p.fill(175, 169, 236); 
                else if (r < i || (r === i && c < j)) p.fill(93, 202, 165); // 
                else                         p.fill(200);           // jab woh idle rheta hai uska color
                
                //creating a rectangular picieiceicei!
                p.rect(x,y, cell , cell, 6);
                //labells

                p.fill(r === i && c === j ? 255 : 80);
                p.textAlign(p.CENTER, p.CENTER);
                p.textSize(11);
                p.text(`${r},${c}`, x + cell/2, y + cell/2);
            }

        }

        if (p.frameCount % delay === 0){
            j++;
            if(j>= cols){j =0 ; i++;}
            if(i>=rows){i = 0;j=0;}//loop forever

        }
    };
})