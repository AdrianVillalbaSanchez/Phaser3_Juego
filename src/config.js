import 'phaser';

export default {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: "#000c1f",
  parent: "game-container",
  pixelArt: true,
  physics: { default: "matter" },
  plugins: {
    scene: [
      {
        plugin: PhaserMatterCollisionPlugin, 
        key: "matterCollision", 
        mapping: "matterCollision" 
      }
    ]
  }
};

