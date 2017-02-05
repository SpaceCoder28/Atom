function Electron(x, y, R, a, sa) {
	this.show = function() {
		fill(0, 255, 255);
    stroke(0, 255, 255);
    strokeWeight(1);
    ellipse(x + R*cos(a), y + R*sin(a), 8, 8);
    a += sa;
	}
}