namespace SpriteKind {
    export const block = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    timer.throttle("action", 500, function () {
        Ball2.setVelocity(Ball2.vx, -1 * Ball2.vy)
    })
})
function spawnBlocks (num: number, block1: any[], block2: any[], block3: any[]) {
    for (let v_index = 0; v_index <= 9; v_index++) {
        // loops for a total of 4 times everytime that the loop of v_index is looped once
        for (let h_index = 0; h_index <= 3; h_index++) {
            // sets the variable x to v_index x 17
            x = v_index * 17
            // sets color_selection to pick a random number between 0 and 2
            color_selection = randint(0, 3)
            // this asks the program whether variable color_selection is equal to either 0, 1 or 2, and if it is equal to 0, then it will pick a red block. if it is equal to 1, it will pick and yellow block, if its equal to 2 then it will pick an orange block and if it is not equal to either 0, 1 or 2, then it will be picking a pink block.
            if (color_selection == 0) {
                // sets a red block sprite to the block variable
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
            } else if (color_selection == 1) {
                // sets a yellow block sprite to the block variable
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
            } else if (color_selection == 2) {
                // sets a orange block sprite to the block variable
                Block = sprites.create(img`
                    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                    `, SpriteKind.block)
            } else {
                // sets a pink block sprite to the block variable
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
            // will set block sprite to a position x of x variable and y of h_index times 17 + 8
            Block.setPosition(x, h_index * 17 + 8)
        }
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.block, function (sprite, otherSprite) {
    // calls function findPosition
    findPosition(Ball2, Block)
    // if direction is equal to one, then the ball will bounce downward from the block x position, else it will bounce upwards from the block x position
    if (direction == 1) {
        // sets ball velocity to its vx and vy times -1, making it bounce at all time away from where it hit the block
        Ball2.setVelocity(Ball2.vx, -1 * Ball2.vy)
    } else {
        // sets the ball velocity to vx times -1 and vy to ball vy.
        Ball2.setVelocity(-1 * Ball2.vx, Ball2.vy)
    }
    // destroys othersprite
    sprites.destroy(otherSprite)
    // if 50% is true, then a random variable from the list will be chosen and will change the score by that amount, else the score is changed by 1
    // else then...
    if (Math.percentChance(50)) {
        // creates list of array score +1, score - 1, score + 2
        list = [info.score() + 1, info.score() - 1, info.score() + 2]
        // sets score to random value between 0 and 2 from list.
        info.setScore(list[randint(0, 2)])
    } else {
        // change score by 1
        info.changeScoreBy(1)
    }
})
function findPosition (ball: Sprite, block: Sprite) {
    // if the x position of ball is smaller than the x position of block, then direction is set to 1, else it is set to 0
    if (ball.x < block.x) {
        // set direction variable to 1
        direction = 1
    } else {
        // set direction variable to 0
        direction = 0
    }
}
let direction = 0
let Block: Sprite = null
let color_selection = 0
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
    // if score is equal to 25, then game over win happens
    if (info.score() >= 25) {
        game.gameOver(true)
    }
})
