
var points = [];
var news = 0;

//teorema di lorenz
var x = 0.01;
var y = 0;
var z = 0;
var x1 = 0.01;
var y1 = 0;
var z1 = 0;
var a = 10;
var b = 28;
var c = 8.0/3.0;
var data;
let url='analytics.php';

var cnv;

function setup() {
  cnv = createCanvas(400, 400, WEBGL);
  cnv.parent("sketch-holder");	
  //background(204, 255, 255);
  setAttributes('antialias', true);
  // easycam = createEasyCam();
  smooth();
  colorMode(RGB, 255, 255, 255);
  setFrameRate(24);
}

function draw() {
  orbitControl();
  frameRate(10);

  background(204, 255, 255);
  ambientLight(180,150,200);
  pointLight(200,200,250, 0, height/2, -50);

  var tanja = JSON.parse(sessionStorage.getItem("tanjaData")); //qui stavo provando a capire come usare sessionStorage
  console.log(tanja.politica);

  // equazione di Lorenz
  var dt = 0.01;
  var dx = (a * (y - x))*dt;
  var dy = (x * (b - z) - y)*dt;
  var dz = (x * y - c * z)*dt;
  x = x + dx;
  y = y + dy;
  z = z + dz;

  let hu = 0;
  //da punti a vettori 
  points.push(createVector(x, y, z));

  push();
    var d = 18;
    var e = 26;
    var f = c+8;
    var ex = (d * (y - x))*dt;
    var ey = (x * (e - z) - y)*dt;
    var ez = (x * y - f * z)*dt;
    x1 = x1 + ex;
    y1 = y1 + ey;
    z1 = z1 + ez;
  pop();

  points.forEach(function (v2) {
    //---- esperimenti per altri casi-----------
    push();
      colorMode(RGB, 255, 255, 255, 255);
      fill(250, 38, 15, 150);
      strokeWeight(5);
      beginShape(LINES);
      strokeWeight(5);
      line(v2.x1,v2.y1, v2.z1);
    
      endShape();
    pop();
	});
}  //end draw
