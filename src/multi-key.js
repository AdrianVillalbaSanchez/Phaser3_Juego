// Clase para permitir que varias teclas Phaser sean tratadas como una entrada. Ej: la flecha izquierda y "A"

export default class MultiKey {
  constructor(scene, keys) {
    if (!Array.isArray(keys)) keys = [keys];
    this.keys = keys.map(key => scene.input.keyboard.addKey(key));
  }

  // ¿Están las teclas pulsadas?
  isDown() {
    return this.keys.some(key => key.isDown);
  }

  // ¿No están las teclas pulsadas?
  isUp() {
    return this.keys.every(key => key.isUp);
  }
}
