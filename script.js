window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
  
      function( callback ){window.setTimeout(callback, 1000 / 60);};
})();

(function clock(){ 
    const hour = document.querySelector('.hour'),
    min = document.querySelector('.min'),
    sec = document.querySelector('.sec');
    //set up a loop
    (function loop(){
        requestAnimFrame(loop);
        draw();
    })();

    //position the hands
function draw(){
const now = new Date(),
then = new Date(now.getFullYear(), now.getMonth(), now.getDate(),0,0,0),

diffInMil = (now.getTime() - then.getTime()),
h = (diffInMil/(1000*60*60)), //hours
m = (h*60), //minutes
s = (m*60); //seconds

sec.style.webkitTransform = "rotate(" + (s * 6) + "deg)";
hour.style.webkitTransform = "rotate(" + (h * 30 + (h / 2)) + "deg)";
min.style.webkitTransform = "rotate(" + (m * 6) + "deg)";
} 
})();
