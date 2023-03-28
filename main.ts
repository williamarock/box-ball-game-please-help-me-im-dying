// When spritekind projectile overlaps with spritekind player, the velocity gets reversed on the y and random between -50 and 50 for the x
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    Ball.setVelocity(randint(-50, 50), -50)
})
let Ball: Sprite = null
// This creates the player sprite and sets it as a player kind
let Burtha = sprites.create(assets.image`Burtha`, SpriteKind.Player)
// Sets the player sprite at x83 and y125
Burtha.setPosition(83, 125)
// Allows the player to input only left and right inputs
controller.moveSprite(Burtha, 100, 0)
info.setLife(3)
// Doesn't allow the player sprite to go outside of the walls
Burtha.setStayInScreen(true)
// Creates a sprite for the ball, and sets it as a kind projectile
Ball = sprites.createProjectileFromSprite(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . c c c c . . . . . . 
    . . . . c c c 5 5 c c c . . . . 
    . . . d d d d c c c c c c . . . 
    . . c d d d d b b b 1 1 c c . . 
    . . d d d d d b b b 1 1 5 c . . 
    . c d d d d b b b b b 5 5 c c . 
    . c d d d b b b c c c c 5 c c . 
    . c c d d b b c c c c c c c c . 
    . c b d d b b c c c c c c c c . 
    . . c b d d b c c c c c b c . . 
    . . c b b d b b c c c b c c . . 
    . . . c b b b b b b b b c . . . 
    . . . . c c b b b b c c . . . . 
    . . . . . . c c c c . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, Burtha, 50, 50)
// Makes it so that the ball bounces on the wall when it touches them
Ball.setBounceOnWall(true)
