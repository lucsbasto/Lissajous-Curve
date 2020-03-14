class  Curve{
    constructor(){
        this.path = []
    }

    addPoint(x, y){
        this.path.push({x: x, y: y})
        console.log(this.path)
    }

    show(){
        stroke(333)
        strokeWeight(1)
        noFill()
        beginShape()
        for(let p of this.path){
            console.log("aaa", p)
            vertex(p.x, p.y)
        }
        endShape()
    }
}