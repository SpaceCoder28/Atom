var n; //nuclues object

var orbits = [];
var no = 5; //number of orbits to draw

function setup() {
  createCanvas(1200, 1200);
  
  n = new Nucleus(); //creating nucleus
  for(var i=0; i < no; i++) { //creating orbits and electrons
    orbits[i] = new Orbit(i+1);
  }
}

function draw() {
  background(0);

  n.show();//showing the nuclues
  for(var i=0; i < orbits.length; i++) { //showing the orbits and electrons
    orbits[i].show();
  }
}
