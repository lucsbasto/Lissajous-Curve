class Curve {
  constructor() {
    this.path = []
    this.current = new Point()
  }
  addX(x) {
    this.current.x = x
  }
  addY(y) {
    this.current.y = y
  }
  addPoint() {
    this.path.push(this.current)
  }
  show() {
    stroke(0)
    strokeWeight(2)
    noFill()
    beginShape()
    for (let i of this.path) {
      vertex(i.x, i.y)
    }
    endShape()
    strokeWeight(4)
    point(this.current.x, this.current.y)
    this.current = new Point()
  }
}

class Point {
  constructor() {
    this.x = null
    this.y = null
  }
}

function make2DArray(rows, cols) {
  let x = [];
  for (let i = 0; i < rows; i++) {
    x[i] = [];
    for (let j = 0; j < cols; j++) {
      x[i][j] = [];
    }
  }
  return x;
}


function setup() {
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
  if (windowHeight > windowWidth) {
    vh = windowWidth - 100
  } else {
    vh = windowHeight - 100
  }
  angle = 0;
  w = vh / 10;
  createCanvas(vh, vh)
  cols = width / w - 1;
  rows = height / w - 1;
  curves = make2DArray(rows, cols)
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      curves[i][j] = new Curve()
    }
  }
}

function draw() {
  background(255);
  let d = w - 5
  let r = d / 2
  stroke(1);
  noFill();
  for (let i = 0; i < cols; i++) {
    let cx = w + i * w + w / 2
    let cy = w / 2
    stroke(1);
    strokeWeight(1)
    ellipse(cx, cy, d, d)
    let x = r * cos(angle * (i + 1) - HALF_PI);
    let y = r * sin(angle * (i + 1) - HALF_PI);
    strokeWeight(4)
    stroke(0)
    point(cx + x, cy + y)
    stroke(0, 50)
    strokeWeight(1)
    line(cx + x, 0, cx + x, height)
    for (let j = 0; j < rows; j++) {
      curves[j][i].addX(cx + x)
    }
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
    point(cx + x, cy + y, cy + y)
    stroke(0, 50)
    strokeWeight(1)
    line(0, cy + y, width, cy + y)
    for (let j = 0; j < cols; j++) {
      curves[i][j].addY(cy + y)
    }
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      curves[i][j].addPoint()
      curves[i][j].show()
    }
  }
  angle += 0.01
}