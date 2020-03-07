angle = 0
w = 40

function setup() {
  createCanvas(400, 400);
  cols = width / w - 1;
}

function draw() {
  background(255);
  d = w - 5
  r = d / 2
  stroke(1);
  noFill();
  for (let i = 0; i < cols; i++) {
    cx = w + i * w + w / 2
    cy = w / 2
    strokeWeight(1)
    ellipse(cx, cy, d, d)
    let x = r * cos(angle - HALF_PI);
    let y = r * sin(angle - HALF_PI);
    strokeWeight(4)
    point(cx+ x, cy+ y)
    angle += 0.001
  }
}