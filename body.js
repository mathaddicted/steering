class Body {
    constructor(x_, y_) {
        this.position = createVector(x_, y_);
        this.velocity = createVector(0, 0);
        this.acceleration = createVector(0, 0);
        this.maxSpeed = 5;
        this.maxForce = 1;
        this.r = 6;
    }
    display() {
        var d = 16;
        noStroke();
        this.theta = this.velocity.heading() + PI / 2;
        translate(this.position.x, this.position.y);
        rotate(this.theta);
        beginShape();
        vertex(0, -this.r * 2);
        vertex(-this.r, this.r * 2);
        vertex(this.r, this.r * 2);
        endShape(CLOSE);
    }
    update() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
    }
    seek(target) {
        this.desired = p5.Vector.sub(target, this.position);

        this.desired.setMag(this.maxSpeed);

        this.steer = p5.Vector.sub(this.desired, this.velocity);
        this.steer.limit(this.maxForce);
        this.applyForce(this.steer);
    }
    applyForce(f_) {
        this.acceleration.mult(0);
        this.acceleration.add(f_.copy());
    }
}