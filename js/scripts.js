var cube = document.getElementsByClassName("cube")[0];
var currentX = 0;
var currentY = 0;

function rotateCube() {
  cube.style.transform = "rotateX(" + currentX + "deg) rotateY(" + currentY + "deg)";
}

window.onkeyup = function(keyPressed) {
  var keyCode = keyPressed.keyCode || keyPressed.which;
  
  // if up arrow key (38) is pressed
  if (keyCode === 38) { 
    currentX -= 90;
    rotateCube();
  }
  // if down arrow key (40) is pressed
  else if (keyCode === 40) {
    currentX += 90;
    rotateCube();
  }
  // if left arrow key (37) is pressed
  else if (keyCode === 37) {
    currentY += 90;
    rotateCube();
  }
  // if right arrow key (39) is pressed
  else if (keyCode === 39) {
    currentY -= 90;
    rotateCube();
  }
}