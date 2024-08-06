let bgimg; // Declare variable for background image file
let cell; // Declare variable for cell graphic frame eg the hexagon

// function preload() {
//   img = loadImage('');
// describe('preload images and fonts');
// }

function setup() {
  createCanvas(1280, 720, P2D); // Create canvas with 1280x720 pixels and 2D renderer - ADD variable sizes later
  cell = createGraphics(windowWidth/4, windowHeight/4, WEBGL);
}

function draw() {
  background(220);

}
