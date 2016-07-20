//
// simple : a library that makes learning Javascript simple
//

function start() {
  document.body.innerHTML += '<div id="output"></div>';
}

function graphics() {
  document.body.innerHTML =
    '<canvas width=600px height=400px id="canvas" style="border: 1px solid black;"></canvas>'
    + document.body.innerHTML;

  var canvas = document.getElementById('canvas');
  var c = canvas.getContext('2d');
  c.strokeStyle = "#000000";
  c.fillStyle = "#000000";
}

function show ( x ) {
  document.getElementById("output").innerHTML += x + "<br />";
  return true;
}

function clear() {
  document.getElementById("output").innerHTML = "";
}

function color ( col ) {
  var canvas = document.getElementById('canvas');
  var c = canvas.getContext('2d');
  c.strokeStyle = col;
  c.fillStyle = col;
}

function line ( x1, y1, x2, y2 ) {

  var canvas = document.getElementById('canvas');
  var c = canvas.getContext('2d');
  c.lineWidth = 1.0;

  c.moveTo(x1,y1);
  c.lineTo(x2,x2);
  c.stroke();

}

function rectangle ( x1, y1, x2, y2 ) {
  var canvas = document.getElementById('canvas');
  var c = canvas.getContext('2d');
  c.fillRect ( x1, y1, x2-x1, y2-y1 );
}
