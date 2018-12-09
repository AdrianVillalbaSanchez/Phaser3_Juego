import 'phaser';
import MainScene from "./main-scene";
import Menu from './menu';
import config from './config';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add('Juego', MainScene);
    this.scene.add('Menu', Menu);
    this.scene.start('Menu');
  }
}
window.game = new Game();