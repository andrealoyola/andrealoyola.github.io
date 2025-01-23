let particulas = [];
let colorLila;
let colorVioleta;
let hexagonos;

function setup() {
  let myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.parent("#my-p5-sketch"); //esto es un id por eso se utiliza #
   colorLila = color(221, 229, 240);
  colorVioleta = color(97, 117, 188);
}
function draw() {
  background(0);

  // Crear nuevas partículas aleatoriamente
  if (frameCount % 5 == 0) {
    if (random() < 0.5) {
      particulas.push(new ParticulaVioleta(random(width), random(height)));
    } else {
      particulas.push(new ParticulaLila(random(width), random(height)));
    }
  }

  // Actualizar y mostrar todas las partículas
  for (let i = particulas.length - 1; i >= 0; i--) {
    particulas[i].update();
    particulas[i].display();

    // Eliminar la partícula si se desvanece
    if (particulas[i].termina()) {
      particulas.splice(i, 1);
    }
  }

  if (particulas.length > 1) {
    // Asegúrate de que haya al menos dos partículas
    for (let i = 0; i < particulas.length - 1; i++) {
      stroke(236, 240, 252, 80); // Color de la línea
      strokeWeight(2);
      drawingContext.setLineDash([5, 5]);
      line(
        particulas[i].x,
        particulas[i].y,
        particulas[i + 1].x,
        particulas[i + 1].y
      );
    }
  }
}
