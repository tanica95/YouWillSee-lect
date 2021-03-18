
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
  // loop da punti a vettori 
  points.forEach(function (v1) {
  //-----nucleo centrale_1
	push();
    rotateY(-frameCount*radians(1.5));
    fill(28, 70, 186);
    noStroke();
    scale(2);
    translate(v1.x/1.5,v1.y/1.5,v1.z/2);
    translate(-5,-5,-5);
    ambientMaterial(28, 70, 186, 100);
    ellipsoid(5,5,5,10,10);
  pop();

  //-----nucleo centrale_2
	push();
	rotateZ(frameCount*radians(1.8));
	fill(89, 198, 217, 80); 
	noStroke();
	scale(2);
	translate(v1.x/2, v1.y/2, v1.z/2);
	translate(-5,-7,-5);
	ambientMaterial(89, 198, 217, 120);
	ellipsoid(5,5,5,10,10);
	 pop();
// //break;
// //case 3:
// //-----nucleo centrale_3
	push();
	rotateX(-frameCount*radians(0.9));
	fill(37, 189, 245, 80);
	noStroke();
	scale(2);
	translate(v1.x/2, v1.y/2, v1.z/2);
	translate(-5,-5,-5);
	ambientMaterial(37, 189, 245, 120);
	ellipsoid(5,5,5,10,10);
	pop();
//break;
//case 4:
//-----nucleo centrale_4
	push();
	rotateZ(-frameCount*radians(1.9));
	fill(16, 72, 227, 80);
	noStroke();
	scale(2);
	translate(v1.x/2, v1.y/2, v1.z/2);
	translate(-5,-5,-5);
	ambientMaterial(16, 72, 227, 120);
	ellipsoid(5,5,5,10,10);
	pop();
//break;
//case 5:
//----particellare_1
	push();
	noStroke();
	translate(p5.Vector.fromAngles(50+v1.x*2,50+v1.y*2,50+v1.z*2));
	ambientMaterial(hu, 131, 131,60);
	sphere(3);
	hu += 1;
	if (hu > 255) {
		hu = 0;
	}
	pop();
//break;
// case 6:
//----particellare_2
	push();
	noStroke();
	rotate(280);
	rotateX(frameCount*radians(-2.5)*0.01);
	rotateY(frameCount*radians(-2.5)*0.01);
	rotateZ(frameCount*radians(-2.5)*0.01);
	translate(p5.Vector.fromAngles(50+v1.x*2,50+v1.y*2,50+v1.z*2));
	ambientMaterial(hu, hu, 120,100);
	box(3,3,3);
	hu += 1;
	if (hu > 255) {
		hu = 0;
	}
	pop();
//break;
//case 7:
//-----particellare_1piccolo
	push();

	noStroke();
	rotateX(frameCount*radians(-1.9)*0.1);
	rotateY(frameCount*radians(-1.9)*0.1);
	rotateZ(frameCount*radians(-1.9)*0.1);
	translate(p5.Vector.fromAngles(30+v1.x,30+v1.y,30+v1.z));
	ambientMaterial( 20,100,hu,100);
	sphere(1.5);
	hu += 1;
	if (hu > 255) {
		hu = 0;
	}
	pop();
//break;
//case 8:
//----elettrone 1
  for (let i =1; i<frameCount; i= i+10){
	push();
		fill(200, 119, 179, 50);
		ambientMaterial( 200, 119, 179, 50);
		noStroke();
		rotateX(frameCount/10);
		rotateZ(frameCount/10);
		translate(20,20,-20);
		//translate(v1.x*2.3, v1.y*2.5, v1.z/2.2);
		ellipsoid(10,10,10,10,10);
		//rotateX(radians(sin));
		pop();	
	}
	
  }); //end forEach
  
}  //end draw
