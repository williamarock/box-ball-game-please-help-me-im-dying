let Burtha = sprites.create(assets.image`Burtha`, SpriteKind.Player)
Burtha.setPosition(83, 125)
controller.moveSprite(Burtha, 100, 0)
Burtha.setStayInScreen(true)
let Ball = sprites.createProjectileFromSprite(img`
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
Ball.setBounceOnWall(true)
if (Ball.overlapsWith(Burtha)) {
	
}
