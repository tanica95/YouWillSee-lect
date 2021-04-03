
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
var c = 8.0 / 3.0;

var data;
let url = 'analytics.php';

var cnv;

function setup() {
  smooth();
  if (localStorage.getItem('start') == '1') {
    var cnv = createCanvas(600, 600, WEBGL);
    cnv.parent("sketch-holder");
    cnv.id('sketch');
    //background(204, 255, 255);
    setAttributes('antialias', true);
    // easycam = createEasyCam();
    colorMode(RGB, 255, 255, 255);
    setFrameRate(24);
  }
}

function draw() {
  orbitControl();
  frameRate(10);
  background(224, 255, 255);
  //directionalLight(128,128,128, 0, 0, -1);
 // ambientLight(180, 180, 200);
  pointLight(255, 241, 230, 0, -height/2, -50);
  //----studio luci
  pointLight(255, 221, 217, - width/2, -height/2, 0);
  pointLight(255, 221, 217, 0, -height/2, 0);
  pointLight(217, 252, 245,  width/2, 0, 0);
 // pointLight(200, 200, 200,  -width/2, height/2, 0);
 // pointLight(200, 200, 200,  width/2, -height/2, 0);
  
  //console.log('start');

  // equazione di Lorenz
  var dt = 0.01;
  var dx = (a * (y - x)) * dt;
  var dy = (x * (b - z) - y) * dt;
  var dz = (x * y - c * z) * dt;
  x = x + dx;
  y = y + dy;
  z = z + dz;

  // colori
  let hu = 0;
  let from = color(230, 94, 211, 120);
  let to = color(72, 53, 196, 120);
  let Aco = lerpColor(from, to, 0.11);
  let Bco = lerpColor(from, to, 0.35);
  let Cco = lerpColor(from, to, 0.55);
  let Dco = lerpColor(from, to, 0.66);
  let Eco = lerpColor(from, to, 0.77);
  let Fco = lerpColor(from, to, 0.90);

  //var numero notizie lette

  var n = map(Number(localStorage.getItem('Nnews')), 0, 8, 0.5, 3);
  var p = map(Number(localStorage.getItem('Pnews')), 0, 8, 0.5, 3);
  var e = Number(localStorage.getItem('Enews'));
  var m = Number(localStorage.getItem('Mnews'));
  var cr = map(Number(localStorage.getItem('Crnews')), 0, 8, -1, 7);
  var s = map(Number(localStorage.getItem('Snews')), 0, 8, 0.1, 0.8);
  var st = map(Number(localStorage.getItem('Stnews')), 0, 8, 8, 0);
  var cu = map(Number(localStorage.getItem('Cunews')), 0, 8, 0, 4);

  //da punti a vettori 
  points.push(createVector(x, y, z));
  // loop da punti a vettori 
  points.forEach(function (vec) {

    //-----nucleo centrale_1
    if (localStorage.getItem('notizie') == '1') {
      console.log('notizie');
      push();
      rotateY(-frameCount * radians(1.5));
     // fill(63, 160, 224, 150);
      noStroke();
      // var n = Number(localStorage.getItem('Nnews'));
      if (n > 0) {
        scale(n);
      } else {
        scale(0.1);
      }
      translate(vec.x / 1.5, vec.y / 1.5, vec.z / 2);
      translate(-5, -5, -5);
     // ambientMaterial(28, 70, 186, 180);
       ambientMaterial(71, 180, 252, 160);
      // specularColor(63, 160, 224);
      // specularMaterial(63, 160, 224);
      // shininess(40);
      ellipsoid(5, 5, 5, 5, 5);
      pop();
    }

    //-----nucleo centrale_2
    if (localStorage.getItem('politica') == '1') {
      console.log('politica');
      push();
      rotateZ(frameCount * radians(1.8));
      //fill(241, 165, 242, 180);
      noStroke();
      scale(0.7);
      translate(vec.x + p, vec.y + p, vec.z + p);
      translate(-5, 5, -5);
      ambientMaterial(2, 13, 173,140);
      // specularColor(241, 165, 223);
      // specularMaterial(241, 165, 223);
      // shininess(60);
      ellipsoid(5, 5, 5, 5, 5);
      pop();
    }

    //-----nucleo centrale_3
    if (localStorage.getItem('economia') == '1') {
      //console.log('economia');
      console.log(e);
      push();
      rotateX(-frameCount * radians(0.9));
      if (e == 1) {
        ambientMaterial(from);
      } else if (e == 2) {
        ambientMaterial(Aco);
      } else if (e == 3) {
        ambientMaterial(Bco);
      } else if (e == 4) {
        fill(Cco);
      } else if (e == 5) {
        fill(Dco);
      } else if (e == 6) {
        fill(Eco);
      } else if (e == 7) {
        fill(Fco);
      } else if (e == 8) {
        fill(to);
      } else {
        fill(180,180,180,80);
      }
      noStroke();
      scale(1);
      translate(vec.x / 2, vec.y / 2, vec.z / 2);
      translate(-5, -5, -5);
      // ambientMaterial(37, 189, 245, 120);
      ellipsoid(5, 5, 5, 5, 5);
      pop();
    }

    //-----nucleo centrale_4
    if (localStorage.getItem('mondo') == '1') {
      console.log('mondo');
      push();
      rotateZ(-frameCount * radians(1.9));
     // fill(5, 103, 250,150);
      noStroke();
      scale(1.5);
      translate(vec.x / 2, vec.y / 2, vec.z / 2);
      translate(-5, -5, -5);
     // ambientMaterial(16, 72, 227, 120);
       ambientMaterial(3, 74, 255, 150);
      // specularColor(21, 81, 232);
      // specularMaterial(21, 81, 232);
      // shininess(100);
      ellipsoid(m+4, m+2, m, 5, 5);
      pop();
    }

    //----particellare_1
    if (localStorage.getItem('cronaca') == '1') {
      console.log(cr);
      push();
        //noiseDetail(cr, 0.5);
        //let nois = noiseSeed(cr);
        noStroke();
        translate(p5.Vector.fromAngles(50 + vec.x + cr, 50 + vec.y + cr, 50 + vec.z + cr));
        ambientMaterial(hu, 185, 195, 130);
        sphere(2);
        hu += 1;
        if (hu > 255) {
          hu = 0;
        }
      pop();
    }

    //----particellare_2
    if (localStorage.getItem('cultura') == '1') {
      console.log(cu);
      push();
        noStroke();
        rotate(280);
        rotateX(frameCount * radians(-2.5) * 0.01);
        rotateY(frameCount * radians(-2.5) * 0.01);
        rotateZ(frameCount * radians(-2.5) * 0.01);
        translate(p5.Vector.fromAngles(50 + vec.x*cu , 50 + vec.y*cu, 50 + vec.z*cu ));
        ambientMaterial(140, 145, hu, 150);
        cone(3, 5, 3);
      hu += 1;
      if (hu > 255) {
        hu = 0;
      }
      pop();
    }

    //-----particellare_1piccolo
    if (localStorage.getItem('scienza_tecnologia') == '1') {
      console.log(st);
      push();
      if (frameCount % st == 0) {
        noStroke();
        rotateX(frameCount * radians(-1.9) * 0.1);
        rotateY(frameCount * radians(-1.9) * 0.1);
        rotateZ(frameCount * radians(-1.9) * 0.1);
        translate(p5.Vector.fromAngles(30 + vec.x, 30 + vec.y, 30 + vec.z));
        ambientMaterial(20, 100, hu, 150);
        sphere(1.5);
      }
      hu += 1;
      if (hu > 255) {
        hu = 0;
      }
      pop();
    }

    //-----particellare_2piccolo
    if (localStorage.getItem('sport') == '1') {
      console.log(s);
      push();
      translate(0, 0, 20);
      rotate(280);
      noStroke();
      rotateX(frameCount * radians(-1.9) * s);
      rotateY(frameCount * radians(-1.9) * s);
      rotateZ(frameCount * radians(-1.9) * s);
      translate(p5.Vector.fromAngles( 22 + vec.x, 22 + vec.y, 22 + vec.z));
     // ambientMaterial(20, 80, hu, 60);
      ambientMaterial(hu, 55, 255, 100);
      // specularColor(hu, 185, 195);
      // specularMaterial(hu, 185, 195);
      // shininess(60);
      sphere(1.5);
      hu += 1;
      if (hu > 255) {
        hu = 0;
      }
      pop();
    }

    //----elettrone 1
    // for (let i = 1; i < frameCount; i = i + 10) {
    //   push();
    //   translate(0, 0, -80);
    //   fill(200, 119, 179, 50);
    //   ambientMaterial(200, 119, 179, 50);
    //   noStroke();
    //   rotateX(frameCount / 10);
    //   rotateZ(frameCount / 10);
    //   translate(20, 20, vec.z);
    //   //translate(vec.x*2.3, vec.y*2.5, vec.z/2.2);
    //   ellipsoid(5, 5, 5, 10, 10);
    //   //rotateX(radians(sin));
    //   pop();
    // }
  }); //end forEach

/* save frames */
if (localStorage.getItem('stop') == '0'){
  saveCanvas(cnv, 'myCanvas', 'png');

  // saveFrame('YWS-bubble'+ "-" 
  //            + nf(year(), 2) 
  //            + nf(month(),2) + "-"
  //            + nf(day(),2) + "-"
  //            + nf(hour(),2) + "-"
  //            + nf(minute(),2) + "-"
  //            + nf(second(),2), 
  //             'png', 1, data => {
  //   print(data);
  // });
}


}  //end draw
