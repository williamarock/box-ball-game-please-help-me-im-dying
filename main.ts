namespace SpriteKind {
    export const block = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    Ball2.setVelocity(Ball2.vx, -1 * Ball2.vy)
})
function spawnBlocks (num: number, block1: any[], block2: any[], block3: any[]) {
    for (let index = 0; index <= 9; index++) {
        for (let index2 = 0; index2 <= 2; index2++) {
            x = index * 18
            if (index2 % 2 == 1) {
                x = index * 18 + 8
            }
            blockpick = randint(0, 2)
            if (blockpick == 0) {
                Block = sprites.create(img`
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    `, SpriteKind.block)
            } else if (blockpick == 1) {
                Block = sprites.create(img`
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    `, SpriteKind.block)
            } else {
                Block = sprites.create(img`
                    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                    `, SpriteKind.block)
            }
            Block.setPosition(x, index2 * 18 + 20)
        }
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.block, function (sprite, otherSprite) {
    findPosition(Ball2, Block)
    if (direction == 1) {
        Ball2.setVelocity(Ball2.vx, -1 * Ball2.vy)
    } else {
        Ball2.setVelocity(-1 * Ball2.vx, Ball2.vy)
    }
    sprites.destroy(otherSprite)
    if (Math.percentChance(50)) {
        list = [info.score() + 1, info.score() - 1, info.score() + 2]
        info.setScore(list[randint(0, 2)])
    } else {
        info.changeScoreBy(1)
    }
})
function findPosition (ball: Sprite, block: Sprite) {
    if (ball.x < block.x - 8 || ball.x > block.x + 8) {
        direction = 1
    } else {
        direction = 0
    }
}
let direction = 0
let Block: Sprite = null
let blockpick = 0
let x = 0
let list: number[] = []
let Ball2: Sprite = null
// This creates the player sprite and sets it as a player kind
let Burtha = sprites.create(assets.image`Burtha`, SpriteKind.Player)
// Sets the player sprite at x83 and y125
Burtha.setPosition(83, 125)
// Allows the player to input only left and right inputs
controller.moveSprite(Burtha, 100, 0)
// Doesn't allow the player sprite to go outside of the walls
Burtha.setStayInScreen(true)
// Creates a sprite for the ball, and sets it as a kind projectile
Ball2 = sprites.createProjectileFromSprite(img`
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
// Sets ball to a x70 y90 position on start.
Ball2.setPosition(70, 90)
// Makes it so that the ball bounces on the wall when it touches them
Ball2.setBounceOnWall(true)
// sets the score variable 
info.setScore(0)
// calls the function spawnBlocks, which will spawn blocks for the game.
spawnBlocks(1, list, list, list)
forever(function () {
    // if ball goes under x119 of the bottom wall, then game over lose happens
    if (Ball2.bottom > 119) {
        game.gameOver(false)
    }
    // if score is equal to 20, then game over win happens
    if (info.score() == 20) {
        game.gameOver(true)
    }
})
