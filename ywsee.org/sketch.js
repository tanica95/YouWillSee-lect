//var easycam;

var points = [];
//var particles = [];

//var start = 0;
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
//start.mousePressed(popup());
//if (start ==0){
background(204, 255, 255);
ambientLight(180,150,200);
pointLight(200,200,250, 0, height/2, -50);
//}

// let camX = map(mouseX, 0, width, -200, 200);
// let camY = map(mouseY, 0, height, -200, 200);
// camera(camX, camY, (height / 2.0) / tan(PI * 30.0 / 180.0), 0, 0, 0, 0, 1, 0);

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
// points.forEach(function (v1) {
//  //if (tanja.start == 1){

// //	switch (news) {
// //	case 1:
// //-----nucleo centrale_1
// 	push();
// 	 rotateY(-frameCount*radians(1.5));
// 	 fill(28, 70, 186);
// 	 noStroke();
// 	 scale(2);
// 	 translate(v1.x/1.5,v1.y/1.5,v1.z/2);
// 	 translate(-5,-5,-5);
// 	 ambientMaterial(28, 70, 186, 100);
// 	 ellipsoid(5,5,5,10,10);
// 	pop();
// // //break;
// // //case 2:
// // //-----nucleo centrale_2
// 	push();
// 	rotateZ(frameCount*radians(1.8));
// 	fill(89, 198, 217, 80); 
// 	noStroke();
// 	scale(2);
// 	translate(v1.x/2, v1.y/2, v1.z/2);
// 	translate(-5,-7,-5);
// 	ambientMaterial(89, 198, 217, 120);
// 	ellipsoid(5,5,5,10,10);
// 	 pop();
// // //break;
// // //case 3:
// // //-----nucleo centrale_3
// 	push();
// 	rotateX(-frameCount*radians(0.9));
// 	fill(37, 189, 245, 80);
// 	noStroke();
// 	scale(2);
// 	translate(v1.x/2, v1.y/2, v1.z/2);
// 	translate(-5,-5,-5);
// 	ambientMaterial(37, 189, 245, 120);
// 	ellipsoid(5,5,5,10,10);
// 	pop();
// // //break;
// // //case 4:
// // //-----nucleo centrale_4
// 	push();
// 	rotateZ(-frameCount*radians(1.9));
// 	fill(16, 72, 227, 80);
// 	noStroke();
// 	scale(2);
// 	translate(v1.x/2, v1.y/2, v1.z/2);
// 	translate(-5,-5,-5);
// 	ambientMaterial(16, 72, 227, 120);
// 	ellipsoid(5,5,5,10,10);
// 	pop();
// 	//break;
// //case 5:
// //----particellare_1
// push();
// // noFill();
// noStroke();
//  translate(p5.Vector.fromAngles(50+v1.x*2,50+v1.y*2,50+v1.z*2));
//  ambientMaterial(hu, 131, 131,60);
//  sphere(3);
// hu += 1;
// if (hu > 255) {
//   hu = 0;
// }
// pop();
// //break;
// // case 6:
// //----particellare_2
// push();
// noStroke();
// rotate(280);
// rotateX(frameCount*radians(-2.5)*0.01);
// rotateY(frameCount*radians(-2.5)*0.01);
// rotateZ(frameCount*radians(-2.5)*0.01);
//  translate(p5.Vector.fromAngles(50+v1.x*2,50+v1.y*2,50+v1.z*2));
//  ambientMaterial(hu, hu, 120,100);
//  box(3,3,3);
// hu += 1;
// if (hu > 255) {
//   hu = 0;
// }
// pop();
// //break;
// //case 7:
// //-----particellare_1piccolo
// push();
// // noFill();
// noStroke();
// //strokeWeight(0.1);
// //fill(250, 192, 192,60);
// // fill(40, 120, 250, 60); //da verde scuro a blu
//  rotateX(frameCount*radians(-1.9)*0.1);
//  rotateY(frameCount*radians(-1.9)*0.1);
//  rotateZ(frameCount*radians(-1.9)*0.1);
//  translate(p5.Vector.fromAngles(30+v1.x,30+v1.y,30+v1.z));
//  ambientMaterial( 20,100,hu,100);
//  sphere(1.5);
// hu += 1;
// if (hu > 255) {
//   hu = 0;
// }
// pop();
//}); // fine prima serie di vettori

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

	// push();
	// rotateX(-frameCount*radians(0.9));
	// fill(250, 121, 15, 80);
	// noStroke();
	// scale(0.5);
	// translate(v2.x1+2, v2.y1, v2.z1);
	// translate(-5,-5,-5);
	// ambientMaterial(250, 121, 15, 120);
	// cylinder(2,4);
	// pop();

//} chiusura switch
//} chiusura if start==1

//---- esperimenti per altri casi-----------
   push();
 
//   rotateZ(150);
//   rotateY(frameCount/10);
//   rotateX(frameCount/10);
 // translate(v2.x1, v2.y1, v2.z1);
  colorMode(RGB, 255, 255, 255, 255);
  fill(250, 38, 15, 150);
  strokeWeight(5);
  beginShape(LINES);
  strokeWeight(5);
  line(v2.x1,v2.y1, v2.z1);
 
  endShape();
  pop(); 


/*   push();
  fill(0, 119, 179, 50);
  noStroke();
   rotateX(frameCount/10);
   rotateY(frameCount/10);
  translate(v1.x*2, v1.y*2, v1.z/2);
  ellipsoid(5,5,5,10,10);
  //rotateX(radians(sin));
 pop();
 //rotateX(10); */


/* push();
 // translate(50,50,0);
  rotateY(2*frameCount/10);
  rotateX(frameCount/-10);
  frameRate(10);
  translate(v1.x*2.5, v1.y*2.1, v1.z*1.5);
  colorMode(RGB, 255, 255, 255, 255);
  fill(51, 204, 255, 180); //azzurro
  noStroke();
  ellipsoid(5,5,5,10,10);
 // rotate(radians, [x,y,z]);
  pop(); */
//----fine esperimenti--------------------
//		}
	});

}  //end draw


// se questo è attivo easycam non funziona
//    function mousePressed(){
//     noLoop();
//    }

// class Particle{
// 	constructor(){
// 		this.x = random(0,width);
// 		this.y = random(0,height);
// 		this.z = random(100,-100);
// 		this.r = random(1,8);
// 		this.xSpeed = random(-2,2);
// 		this.ySpeed = random(-1,1.5);
// 	  }

// // creation of a particle.
// createParticle() {
//     noStroke();
//     fill('rgba(200,169,169,0.5)');
//     sphere(this.x,this.y,this.r);
//   }

//   moveParticle() {
//     if(this.x < 0 || this.x > width)
//       this.xSpeed*=-3;
//     if(this.y < 0 || this.y > height)
//       this.ySpeed*=-3;
// 	if(this.z < 0 || this.z > z)
//       this.zSpeed*=-3;
//     this.x+=this.xSpeed;
//     this.y+=this.ySpeed;
// 	this.z+=this.zSpeed;
//   }

//   joinParticles(particles) {
//     particles.forEach(element =>{
//       let dis = dist(this.x,this.y,this.z,element.x,element.y,element.z);
//       if(dis<85) {
//         stroke('rgba(255,255,255,0.04)');
//         line(this.x,this.y,this.z,element.x,element.y,element.z);
//       }
//     });
//   }


// }//end class