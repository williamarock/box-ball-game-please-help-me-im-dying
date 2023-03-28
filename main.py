def on_on_overlap(sprite, otherSprite):
    Ball.set_velocity(50, -50)
sprites.on_overlap(SpriteKind.projectile, SpriteKind.player, on_on_overlap)

Ball: Sprite = None
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
info.set_life(3)
# Creates a sprite for the ball, and sets it as a kind projectile
Ball = sprites.create_projectile_from_sprite(img("""
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
# Makes it so that the ball bounces on the wall when it touches them
Ball.set_bounce_on_wall(True)
Death_Line = sprites.create(img("""
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    """),
    SpriteKind.enemy)
Death_Line.set_position(72, 50)
if Ball.overlaps_with(Death_Line):
    info.change_life_by(-1)