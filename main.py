@namespace
class SpriteKind:
    block = SpriteKind.create()
# This code has been written by williamarock

def on_on_overlap(sprite, otherSprite):
    # This is a timer that will disable this portion of the code for 500 ms every time the ball overlaps
    
    def on_throttle():
        # it will set the vx to the ball vx and the vy to ball vy times -1
        Ball2.set_velocity(Ball2.vx, -1 * Ball2.vy)
    timer.throttle("action", 500, on_throttle)
    
sprites.on_overlap(SpriteKind.projectile, SpriteKind.player, on_on_overlap)

# This function has been coded by wilkiamarock
def spawnBlocks(num: number, block1: List[any], block2: List[any], block3: List[any]):
    global x, color_selection, Block
    # will repeat everything inside it from number 0 to number 9
    for v_index in range(10):
        # loops for a total of 4 times everytime that the loop of v_index is looped once
        for h_index in range(4):
            # sets the variable x to v_index x 17
            x = v_index * 17
            # sets color_selection to pick a random number between 0 and 2
            color_selection = randint(0, 3)
            # this asks the program whether variable color_selection is equal to either 0, 1 or 2, and if it is equal to 0, then it will pick a red block. if it is equal to 1, it will pick and yellow block, if its equal to 2 then it will pick an orange block and if it is not equal to either 0, 1 or 2, then it will be picking a pink block.
            if color_selection == 0:
                # sets a red block sprite to the block variable
                Block = sprites.create(img("""
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
                    """),
                    SpriteKind.block)
            elif color_selection == 1:
                # sets a yellow block sprite to the block variable
                Block = sprites.create(img("""
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
                    """),
                    SpriteKind.block)
            elif color_selection == 2:
                # sets a orange block sprite to the block variable
                Block = sprites.create(img("""
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
                    """),
                    SpriteKind.block)
            else:
                # sets a pink block sprite to the block variable
                Block = sprites.create(img("""
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
                    """),
                    SpriteKind.block)
            # will set block sprite to a position x of x variable and y of h_index times 17 + 8
            Block.set_position(x, h_index * 17 + 8)
# This code (except for the if statement) has been written by williamarock

def on_on_overlap2(sprite2, otherSprite2):
    global list2
    # calls function findPosition
    findPosition(Ball2, Block)
    # if direction is equal to one, then the ball will bounce downward from the block x position, else it will bounce upwards from the block x position
    if direction == 1:
        # sets ball velocity to its vx and vy times -1, making it bounce at all time away from where it hit the block
        Ball2.set_velocity(Ball2.vx, -1 * Ball2.vy)
    else:
        # sets the ball velocity to vx times -1 and vy to ball vy.
        Ball2.set_velocity(-1 * Ball2.vx, Ball2.vy)
    # destroys othersprite
    sprites.destroy(otherSprite2)
    # if 50% is true, then a random variable from the list will be chosen and will change the score by that amount, else the score is changed by 1
    # else then...
    # 
    # 
    # This statement has been written by 80CaliberSpringroll
    if Math.percent_chance(50):
        # creates list of array score +1, score - 1, score + 2
        list2 = [info.score() + 1, info.score() - 1, info.score() + 2]
        # sets score to random value between 0 and 2 from list.
        info.set_score(list2[randint(0, 2)])
    else:
        # change score by 1
        info.change_score_by(1)
sprites.on_overlap(SpriteKind.projectile, SpriteKind.block, on_on_overlap2)

# This function has been written by 80CaliberSpringroll
def findPosition(ball: Sprite, block4: Sprite):
    global direction
    # if the x position of ball is smaller than the x position of block, then direction is set to 1, else it is set to 0
    if ball.x < block4.x:
        # set direction variable to 1
        direction = 1
    else:
        # set direction variable to 0
        direction = 0
# This section has been written by 80CaliberSpringroll
direction = 0
Block: Sprite = None
color_selection = 0
x = 0
list2: List[number] = []
Ball2: Sprite = None
# This creates the player sprite and sets it as a player kind
Burtha = sprites.create(assets.image("""
    Burtha
"""), SpriteKind.player)
# Sets the player sprite at x83 and y125
Burtha.set_position(83, 125)
# Allows the player to input only left and right inputs
controller.move_sprite(Burtha, 100, 0)
# Doesn't allow the player sprite to go outside of the walls
Burtha.set_stay_in_screen(True)
# Creates a sprite for the ball, and sets it as a kind projectile
Ball2 = sprites.create_projectile_from_sprite(img("""
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
    """),
    Burtha,
    50,
    50)
# Sets ball to a x70 y90 position on start.
Ball2.set_position(70, 90)
# Makes it so that the ball bounces on the wall when it touches them
Ball2.set_bounce_on_wall(True)
# sets the score variable 
info.set_score(0)
# calls the function spawnBlocks, which will spawn blocks for the game.
spawnBlocks(1, list2, list2, list2)
# This code has been written by williamisarock

def on_forever():
    # if ball goes under x119 of the bottom wall, then game over lose happens
    if Ball2.bottom > 119:
        game.game_over(False)
    # if score is equal to 25, then game over win happens
    if info.score() >= 25:
        game.game_over(True)
forever(on_forever)
