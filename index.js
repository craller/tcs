var btn = document.getElementById('btn');
    var flag = true;
    btn.onclick=function(){
            if(flag){
                run();
                flag = false;
            }
    }
   function run(){
    var snake = [41, 40],  
   direction = 1,  
   food = 43,    
   n,    
   ctx = document.getElementById('myCanvas').getContext('2d');   
  function draw(seat, color) {  
   ctx.fillStyle = color;  
   ctx.fillRect(seat % 20 *20 + 1, Math.floor((seat / 20)) * 20 + 1, 18, 18);   
  }  
  document.onkeydown = function(e) { 
   direction = snake[1] - snake[0] == (n = [-1, -20, 1, 20][(e || event).keyCode - 37] || direction) ? direction : n;  
  };  
  !function() {  
   snake.unshift(n = snake[0] + direction);
   if(snake.indexOf(n, 1) > 0 || n < 0 || n > 399 || direction == 1 && n % 20 == 0 || direction == -1 && n % 20 == 19) {  
       return alert("GAME OVER!");  
   }  
   draw(n, "lime"); 
   if(n == food) {    
    while (snake.indexOf(food = Math.floor((Math.random() * 400))) > 0);  
    draw(food, "yellow");  
   } else {   
    draw(snake.pop(),"black");  
   }  
   setTimeout(arguments.callee, 150);  
  }();  
   }