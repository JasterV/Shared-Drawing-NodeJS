let socket;

function setup(){
  createCanvas(800, 600);
  background(0);
  noStroke();
  // CONNECT TO LOCALHOST
  socket = io.connect('http://localhost:3000');
  // ON RECEIVING DATA
  socket.on('mouse', drawIncoming);
}

function drawIncoming(data ){
  fill(255, 0, 100);
  circle(data.x, data.y, 50.0);
}

function draw(){
}

function mouseDragged(){
  fill(255);
  circle(mouseX, mouseY, 50.0);
  // CREATE DATA
  var data = {
    x: mouseX,
    y: mouseY,
  }
  // SEND DATA
  console.log('Sending -> ' + 'x: ' + mouseX + ' y: ' + mouseY);
  socket.emit('mouse', data);
}

function keyPressed(){
  // CLEARS THE SCREEN
  if (key === 'c'){
    background(0);
  }
}
