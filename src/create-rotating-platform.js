export default function createRotatingPlatform(scene, x, y, numTiles = 5) {
  // Añadiendo el tilesprite
  const platform = scene.add.tileSprite(x, y, 64 * numTiles, 18, "wooden-plank");

  scene.matter.add.gameObject(platform, {
    restitution: 0, // Sin rebotes
    frictionAir: 0, // Gira siempre sin disminuir la velocidad de la resistencia del aire.
    friction: 0.2, // Un poco de fricción extra para que el jugador se pegue mejor.
    // La densidad establece la masa y la inercia según el área: 0.001 es el valor predeterminado. Lo ponemos más bajo
    // aquí para que la plataforma se incline / gire fácilmente.
    density: 0.0005
  });

  // Alias de la Matter.js API
  const { Constraint } = Phaser.Physics.Matter.Matter;

  // Cree una restricción de punto que fija el centro de la plataforma a un punto fijo en el espacio, por lo que no puede moverse
  const constraint = Constraint.create({
    pointA: { x: platform.x, y: platform.y },
    bodyB: platform.body,
    length: 0
  });

  // Necesitamos añadir la restricción al mundo del Matter para activarlo.
  scene.matter.world.add(constraint);

  // Le da a la plataforma una inclinación inicial aleatoria, como una sugerencia para el jugador de que estas plataformas giran
  const sign = Math.random() < 0.5 ? -1 : 1;
  const angle = sign * Phaser.Math.Between(15, 25);
  platform.setAngle(angle);
}
