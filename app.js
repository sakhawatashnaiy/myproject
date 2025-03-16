  function myclick(button){
    const element = document.getElementById('button')
    button.style.backgroundColor =  randomColor();
    button.style.color = 'blue';
    button.style.fontSize ='15px';
   
  }
      function randomColor(btn){
          let color= "#";
          let letters = "0123456789ABCDEF";
           for(let i =0; i< 6;i++){
              color +=letters[Math.floor(Math.random()*16)]
           }
          return color ;
      }

    //   let rows = '';
    //    for( let i = 1; i <= 4;  i++ ){
    //        for(let j = 1; j < i; j++){
    //            rows += '*'
    //             console.log(rows);
    //        }
    //    }
        
        //  let rows  = '';
        //    for(let i = 1;i<=4;i++){
        //        for(j = 1; j<i; j++){
        //           rows +='*';
        //        }
        //          console.log(rows);
        //    }

         
        //   movements of boxes around the screen

          function BoxMOVE(){
                document.getElementById('box')
               if(!box) return;
               var maxX = window.innerWidth-box.offsetWidth;
               var maxY = window.innerHeight-box.offsetHeight;

               box.style.left=Math.floor(Math.random() *   maxX)+ 'px';
               box.style.top = Math.floor(Math.random() *  maxY)+ 'px';

          }

          setInterval(BoxMOVE, 1000);
          
          function rotateBox() {
            var box = document.getElementById('box'); // Correctly selecting the element
            if (!box) return; // Check if box exists to prevent errors

            var angle = Math.random() * 360; // Generate a random angle
            box.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`; // Correct syntax
        }

        // Rotate every 1 second
        setInterval(rotateBox, 1000);
                

               