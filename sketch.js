function setup() {
    createCanvas(500, 500);
    background(0);
    randomize();
}

function draw() {
    let a = random(0, 50);
    background(0, a);
    fill(r, g, b);
    rect(mouseX, 100, 70, 70);
    fill(g, r, b);
    rect(mouseX, 200, 70, 70);
    fill(b, r, g);
    rect(mouseX, 300, 70, 70);
}

function mouseClicked() {
    background(0);
    randomize();
}

function randomize() {
    r = random(255);
    g = random(255);
    b = random(255);
}