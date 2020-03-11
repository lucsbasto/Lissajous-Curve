angle = 0
w = 80

function setup() {
  createCanvas(800, 800);
  cols = width / w - 1;
  rows = height / w - 1;
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
    stroke(1);
    strokeWeight(1)
    ellipse(cx, cy, d, d)
    let x = r * cos(angle * (i + 1) - HALF_PI);
    let y = r * sin(angle * (i + 1) - HALF_PI);
    strokeWeight(4)
    stroke(0)
    point(cx+ x, cy+ y)
    stroke(0, 50)
    strokeWeight(1)
    line(cx + x, 0, cx + x, height)
    }
    stroke(1);
    noFill();
    for (let i = 0; i < rows; i++) {
      cy = w + i * w + w / 2
      cx = w / 2
      stroke(1);
      strokeWeight(1)
      ellipse(cx, cy, d, d)
      let x = r * cos(angle * (i + 1) - HALF_PI);
      let y = r * sin(angle * (i + 1) - HALF_PI);
      strokeWeight(4)
      stroke(0)
      point(cx+ x, cy+ y)
      stroke(0, 50)
      strokeWeight(1)
      line(0, cy + y, width, cy + y)
      }
    angle += 0.01
}