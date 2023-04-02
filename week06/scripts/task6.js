// Set up canvas
const canvas = document.getElementById("spaceCanvas");
const ctx = canvas.getContext("2d");

// Cube vars
const square = {
    sideLength: 10,
    x: canvas.width / 2,
    y: canvas.height / 2,
    dy: 0,
    gravity: 0.5, 
    dySpace: -10
};

// game loop
function gameLoop() {
    listenInputs();

    square.y += square.dy;
    square.dy += square.gravity;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(square.x, square.y, square.sideLength, square.sideLength);

    keepSquareInCanvas();
}

// Make sure square stays in canvas and reset accel if collision
function keepSquareInCanvas() {
    if (square.y > canvas.height - square.sideLength) {
        square.y = canvas.height - square.sideLength;
        square.dy = 0;
    }
    else if (square.y < square.sideLength) {
        square.y = square.sideLength;
        square.dy *= -.5;
    }
}

// Listen for any inputs
function listenInputs() {
    document.body.onkeydown = function(event) {
        if (event.code == "Space") {
            square.dy = square.dySpace;
        }
    }
}

// Game init
setInterval(gameLoop, 10);