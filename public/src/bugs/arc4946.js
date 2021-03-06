var config = {
    width: 800,
    height: 600,
    type: Phaser.AUTO,
    parent: 'phaser-example',
    scene: {
        create: create
    }
};

var game = new Phaser.Game(config);

function create ()
{
    var graphics = this.add.graphics();

    graphics.lineStyle(4, 0x00ff00, 1);

    graphics.strokeRect(32, 32, 256, 256);

    graphics.fillStyle(0xff0000, 0.8);

    graphics.lineStyle(34, 0xff00ff, 1);
    graphics.strokeEllipse(400, 250, 200, 128);

    graphics.lineStyle(64, 0x00ffff, 1);
    graphics.strokeCircle(260, 260, 120);

    // graphics.setAlpha(0.5);
}