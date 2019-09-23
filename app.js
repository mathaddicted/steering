function setup() {
    createCanvas(600, 600);
    body = new Body(random(width), random(height));
    target = new Target(random(width), random(height));

}

function draw() {
    background(0);
    mouse = createVector(mouseX, mouseY);

    target.show();

    body.update();
    body.display();
    body.seek(mouse);

}