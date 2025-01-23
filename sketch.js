let circles = [];

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("canvas-container"); // Vincula el canvas al contenedor con ID "canvas-container"

  // Crear círculos con propiedades aleatorias
  for (let i = 0; i < 50; i++) {
    circles.push({
      x: random(width),
      y: random(height),
      radius: random(10, 20),
      speedX: random(-2, 2),
      speedY: random(-2, 2),
      color: color(random(255), random(255), random(221, 229, 240), 50),
    });
  }
}

function draw() {
  clear(); // Limpia el fondo para mantener las animaciones suaves
  noStroke();

  // Dibujar y animar los círculos
  for (let circle of circles) {
    fill(circle.color);
    ellipse(circle.x, circle.y, circle.radius * 2);

    // Mover los círculos
    circle.x += circle.speedX;
    circle.y += circle.speedY;

    // Rebotar en los bordes
    if (circle.x - circle.radius < 0 || circle.x + circle.radius > width) {
      circle.speedX *= -1;
    }
    if (circle.y - circle.radius < 0 || circle.y + circle.radius > height) {
      circle.speedY *= -1;
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // Ajustar canvas al redimensionar ventana
}
