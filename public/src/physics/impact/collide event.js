var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    physics: {
        default: 'impact'
    },
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('block', 'assets/sprites/block.png');
}

function create ()
{
    var blockA = this.impact.add.image(60, 300, 'block');
    var blockB = this.impact.add.image(730, 300, 'block');

    blockA.setTypeA().setCheckAgainstB().setActiveCollision().setMaxVelocity(300);
    blockB.setTypeB().setCheckAgainstA().setFixedCollision();

    blockA.setVelocityX(300);

    this.impact.world.on('collide', collide);
}

function collide (bodyA, bodyB, axis)
{
    bodyA.gameObject.setTint(0xff0000);
}
