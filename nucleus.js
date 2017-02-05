function Nucleus() {
  this.x = width/2;
  this.y = height/2;
  this.r = 50;

  this.show = function() {
    fill(255, 100);
    strokeWeight(4);
    stroke(0, 255, 255);
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }
}