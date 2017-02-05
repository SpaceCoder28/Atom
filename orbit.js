function Orbit(on) { // on = orbit number, n = nucleus
  var ne = 2 * on * on; //number of electrons in this orbit
  var electrons = []; //to store all the electrons
  
  var a = 2 * PI / ne; //dividing 360 degrees equally
  var k = a; //starting angle

  for(var i=0; i < ne; i++) {
    electrons[i] = new Electron(n.x, n.y, n.r+(on*n.r*0.90), k, 0.01/on);
    k += a;
  }
  
  this.show = function() {
    noFill();
    strokeWeight(1);
    stroke(255, 100);
    ellipse(n.x, n.y, (n.r+on*n.r*0.90)*2, (n.r+on*n.r*0.90)*2);
    
    for(var i=0; i < ne; i++) {
      electrons[i].show();
    }
  }
}