import 'phaser';

export default class Menu extends Phaser.Scene {
    constructor (key) {
        super(key);
    }

    preload() {
    }

    create() {
        this.add.text(180, 50, 'Menú Principal');
        this.add.text(180, 140, 'Pulsa la tecla 1 para comenzar');

        this.input.keyboard.once('keyup_ONE', function () {
            this.scene.start('Juego');
        }, this);

    }
};