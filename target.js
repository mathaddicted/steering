class Target {
    constructor(x__, y__) {
        this.position = createVector(x__, y__);
    }
    show() {
        stroke(0, 255, 0);
        strokeWeight(5);
        point(this.position.x, this.position.y);
    }

}