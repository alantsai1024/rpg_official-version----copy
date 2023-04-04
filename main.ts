function Walk () {
    if (Battle == 0) {
        if (LastDirection == 0) {
            animation.runImageAnimation(
            Hero,
            [img`
                . . . . . . f f f f . . . . . . 
                . . . . f f e e e e f f . . . . 
                . . . f e e e f f e e e f . . . 
                . . f f f f f 2 2 f f f f f . . 
                . . f f e 2 e 2 2 e 2 e f f . . 
                . . f e 2 f 2 f f 2 f 2 e f . . 
                . . f f f 2 2 e e 2 2 f f f . . 
                . f f e f 2 f e e f 2 f e f f . 
                . f e e f f e e e e f e e e f . 
                . . f e e e e e e e e e e f . . 
                . . . f e e e e e e e e f . . . 
                . . e 4 f f f f f f f f 4 e . . 
                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f . . f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . f f e e e e f f . . . . 
                . . . f e e e f f e e e f . . . 
                . . . f f f f 2 2 f f f f . . . 
                . . f f e 2 e 2 2 e 2 e f f . . 
                . . f e 2 f 2 f f f 2 f e f . . 
                . . f f f 2 f e e 2 2 f f f . . 
                . . f e 2 f f e e 2 f e e f . . 
                . f f e f f e e e f e e e f f . 
                . f f e e e e e e e e e e f f . 
                . . . f e e e e e e e e f . . . 
                . . . e f f f f f f f f 4 e . . 
                . . . 4 f 2 2 2 2 2 e d d 4 . . 
                . . . e f f f f f f e e 4 . . . 
                . . . . f f f . . . . . . . . . 
                `,img`
                . . . . . . f f f f . . . . . . 
                . . . . f f e e e e f f . . . . 
                . . . f e e e f f e e e f . . . 
                . . f f f f f 2 2 f f f f f . . 
                . . f f e 2 e 2 2 e 2 e f f . . 
                . . f e 2 f 2 f f 2 f 2 e f . . 
                . . f f f 2 2 e e 2 2 f f f . . 
                . f f e f 2 f e e f 2 f e f f . 
                . f e e f f e e e e f e e e f . 
                . . f e e e e e e e e e e f . . 
                . . . f e e e e e e e e f . . . 
                . . e 4 f f f f f f f f 4 e . . 
                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f . . f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . f f e e e e f f . . . . 
                . . . f e e e f f e e e f . . . 
                . . . f f f f 2 2 f f f f . . . 
                . . f f e 2 e 2 2 e 2 e f f . . 
                . . f e f 2 f f f 2 f 2 e f . . 
                . . f f f 2 2 e e f 2 f f f . . 
                . . f e e f 2 e e f f 2 e f . . 
                . f f e e e f e e e f f e f f . 
                . f f e e e e e e e e e e f f . 
                . . . f e e e e e e e e f . . . 
                . . e 4 f f f f f f f f e . . . 
                . . 4 d d e 2 2 2 2 2 f 4 . . . 
                . . . 4 e e f f f f f f e . . . 
                . . . . . . . . . f f f . . . . 
                `],
            200,
            true
            )
        }
        if (LastDirection == 1) {
            animation.runImageAnimation(
            Hero,
            [img`
                . . . . . . f f f f f f . . . . 
                . . . . f f e e e e f 2 f . . . 
                . . . f f e e e e f 2 2 2 f . . 
                . . . f e e e f f e e e e f . . 
                . . . f f f f e e 2 2 2 2 e f . 
                . . . f e 2 2 2 f f f f e 2 f . 
                . . f f f f f f f e e e f f f . 
                . . f f e 4 4 e b f 4 4 e e f . 
                . . f e e 4 d 4 1 f d d e f . . 
                . . . f e e e 4 d d d d f . . . 
                . . . . f f e e 4 4 4 e f . . . 
                . . . . . 4 d d e 2 2 2 f . . . 
                . . . . . e d d e 2 2 2 f . . . 
                . . . . . f e e f 4 5 5 f . . . 
                . . . . . . f f f f f f . . . . 
                . . . . . . . f f f . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f f f . . . . 
                . . . . f f e e e e f 2 f . . . 
                . . . f f e e e e f 2 2 2 f . . 
                . . . f e e e f f e e e e f . . 
                . . . f f f f e e 2 2 2 2 e f . 
                . . . f e 2 2 2 f f f f e 2 f . 
                . . f f f f f f f e e e f f f . 
                . . f f e 4 4 e b f 4 4 e e f . 
                . . f e e 4 d 4 1 f d d e f . . 
                . . . f e e e e e d d d f . . . 
                . . . . . f 4 d d e 4 e f . . . 
                . . . . . f e d d e 2 2 f . . . 
                . . . . f f f e e f 5 5 f f . . 
                . . . . f f f f f f f f f f . . 
                . . . . . f f . . . f f f . . . 
                `,img`
                . . . . . . f f f f f f . . . . 
                . . . . f f e e e e f 2 f . . . 
                . . . f f e e e e f 2 2 2 f . . 
                . . . f e e e f f e e e e f . . 
                . . . f f f f e e 2 2 2 2 e f . 
                . . . f e 2 2 2 f f f f e 2 f . 
                . . f f f f f f f e e e f f f . 
                . . f f e 4 4 e b f 4 4 e e f . 
                . . f e e 4 d 4 1 f d d e f . . 
                . . . f e e e 4 d d d d f . . . 
                . . . . f f e e 4 4 4 e f . . . 
                . . . . . 4 d d e 2 2 2 f . . . 
                . . . . . e d d e 2 2 2 f . . . 
                . . . . . f e e f 4 5 5 f . . . 
                . . . . . . f f f f f f . . . . 
                . . . . . . . f f f . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f f f . . . . 
                . . . . f f e e e e f 2 f . . . 
                . . . f f e e e e f 2 2 2 f . . 
                . . . f e e e f f e e e e f . . 
                . . . f f f f e e 2 2 2 2 e f . 
                . . . f e 2 2 2 f f f f e 2 f . 
                . . f f f f f f f e e e f f f . 
                . . f f e 4 4 e b f 4 4 e e f . 
                . . f e e 4 d 4 1 f d d e f . . 
                . . . f e e e 4 d d d d f . . . 
                . . . . 4 d d e 4 4 4 e f . . . 
                . . . . e d d e 2 2 2 2 f . . . 
                . . . . f e e f 4 4 5 5 f f . . 
                . . . . f f f f f f f f f f . . 
                . . . . . f f . . . f f f . . . 
                `],
            200,
            true
            )
        }
        if (LastDirection == 2) {
            animation.runImageAnimation(
            Hero,
            [img`
                . . . . . . f f f f . . . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f e e e e e e f f f . . 
                . . f f e 2 2 2 2 2 2 e e f . . 
                . . f e 2 f f f f f f 2 e f . . 
                . . f f f f e e e e f f f f . . 
                . f f e f b f 4 4 f b f e f f . 
                . f e e 4 1 f d d f 1 4 e e f . 
                . . f e e d d d d d d e e f . . 
                . . . f e e 4 4 4 4 e e f . . . 
                . . e 4 f 2 2 2 2 2 2 f 4 e . . 
                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f . . f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f e e e e e e f f f . . 
                . . f f e 2 2 2 2 2 2 e e f . . 
                . f f e 2 f f f f f f 2 e f f . 
                . f f f f f e e e e f f f f f . 
                . . f e f b f 4 4 f b f e f . . 
                . . f e 4 1 f d d f 1 4 e f . . 
                . . . f e 4 d d d d 4 e f e . . 
                . . f e f 2 2 2 2 e d d 4 e . . 
                . . e 4 f 2 2 2 2 e d d e . . . 
                . . . . f 4 4 5 5 f e e . . . . 
                . . . . f f f f f f f . . . . . 
                . . . . f f f . . . . . . . . . 
                `,img`
                . . . . . . f f f f . . . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f e e e e e e f f f . . 
                . . f f e 2 2 2 2 2 2 e e f . . 
                . . f e 2 f f f f f f 2 e f . . 
                . . f f f f e e e e f f f f . . 
                . f f e f b f 4 4 f b f e f f . 
                . f e e 4 1 f d d f 1 4 e e f . 
                . . f e e d d d d d d e e f . . 
                . . . f e e 4 4 4 4 e e f . . . 
                . . e 4 f 2 2 2 2 2 2 f 4 e . . 
                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f . . f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f e e e e e e f f f . . 
                . . f e e 2 2 2 2 2 2 e f f . . 
                . f f e 2 f f f f f f 2 e f f . 
                . f f f f f e e e e f f f f f . 
                . . f e f b f 4 4 f b f e f . . 
                . . f e 4 1 f d d f 1 4 e f . . 
                . . e f e 4 d d d d 4 e f . . . 
                . . e 4 d d e 2 2 2 2 f e f . . 
                . . . e d d e 2 2 2 2 f 4 e . . 
                . . . . e e f 5 5 4 4 f . . . . 
                . . . . . f f f f f f f . . . . 
                . . . . . . . . . f f f . . . . 
                `],
            200,
            true
            )
        }
        if (LastDirection == 3) {
            animation.runImageAnimation(
            Hero,
            [img`
                . . . . f f f f f f . . . . . . 
                . . . f 2 f e e e e f f . . . . 
                . . f 2 2 2 f e e e e f f . . . 
                . . f e e e e f f e e e f . . . 
                . f e 2 2 2 2 e e f f f f . . . 
                . f 2 e f f f f 2 2 2 e f . . . 
                . f f f e e e f f f f f f f . . 
                . f e e 4 4 f b e 4 4 e f f . . 
                . . f e d d f 1 4 d 4 e e f . . 
                . . . f d d d d 4 e e e f . . . 
                . . . f e 4 4 4 e e f f . . . . 
                . . . f 2 2 2 e d d 4 . . . . . 
                . . . f 2 2 2 e d d e . . . . . 
                . . . f 5 5 4 f e e f . . . . . 
                . . . . f f f f f f . . . . . . 
                . . . . . . f f f . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . f f f f f f . . . . . . 
                . . . f 2 f e e e e f f . . . . 
                . . f 2 2 2 f e e e e f f . . . 
                . . f e e e e f f e e e f . . . 
                . f e 2 2 2 2 e e f f f f . . . 
                . f 2 e f f f f 2 2 2 e f . . . 
                . f f f e e e f f f f f f f . . 
                . f e e 4 4 f b e 4 4 e f f . . 
                . . f e d d f 1 4 d 4 e e f . . 
                . . . f d d d e e e e e f . . . 
                . . . f e 4 e d d 4 f . . . . . 
                . . . f 2 2 e d d e f . . . . . 
                . . f f 5 5 f e e f f f . . . . 
                . . f f f f f f f f f f . . . . 
                . . . f f f . . . f f . . . . . 
                `,img`
                . . . . f f f f f f . . . . . . 
                . . . f 2 f e e e e f f . . . . 
                . . f 2 2 2 f e e e e f f . . . 
                . . f e e e e f f e e e f . . . 
                . f e 2 2 2 2 e e f f f f . . . 
                . f 2 e f f f f 2 2 2 e f . . . 
                . f f f e e e f f f f f f f . . 
                . f e e 4 4 f b e 4 4 e f f . . 
                . . f e d d f 1 4 d 4 e e f . . 
                . . . f d d d d 4 e e e f . . . 
                . . . f e 4 4 4 e e f f . . . . 
                . . . f 2 2 2 e d d 4 . . . . . 
                . . . f 2 2 2 e d d e . . . . . 
                . . . f 5 5 4 f e e f . . . . . 
                . . . . f f f f f f . . . . . . 
                . . . . . . f f f . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . f f f f f f . . . . . . 
                . . . f 2 f e e e e f f . . . . 
                . . f 2 2 2 f e e e e f f . . . 
                . . f e e e e f f e e e f . . . 
                . f e 2 2 2 2 e e f f f f . . . 
                . f 2 e f f f f 2 2 2 e f . . . 
                . f f f e e e f f f f f f f . . 
                . f e e 4 4 f b e 4 4 e f f . . 
                . . f e d d f 1 4 d 4 e e f . . 
                . . . f d d d d 4 e e e f . . . 
                . . . f e 4 4 4 e d d 4 . . . . 
                . . . f 2 2 2 2 e d d e . . . . 
                . . f f 5 5 4 4 f e e f . . . . 
                . . f f f f f f f f f f . . . . 
                . . . f f f . . . f f . . . . . 
                `],
            200,
            true
            )
        }
    } else if (Battle == 1) {
        if (LastDirection == 0) {
            animation.runImageAnimation(
            Hero,
            [img`
                ........................
                ..............ffffff....
                .............f2feeeeff..
                ............f222feeeeff.
                .......cc...feeeeffeeef.
                .......cdc.fe2222eeffff.
                .......cddcf2effff222ef.
                ........cddcffeeefffffff
                .........cddce44fbe44eff
                ..........cdceddf14d4eef
                ..........cccdeddd4eeef.
                ...........edd4e44eeff..
                ............ee442222f...
                .............f2e2222f...
                .............f554444f...
                ..............ffffff....
                ................fff.....
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                `,img`
                ........................
                ..............fff.......
                .............f2fffff....
                ...........ff22eeeeeff..
                ..........ff222eeeeeeff.
                ..........feeeefffeeeef.
                .........fe2222eeefffff.
                .........f2efffff222efff
                ..cc.....fffeeefffffffff
                ..cdcc...fee44fbbe44efef
                ..ccddcc..feddfbb4d4eef.
                ....cdddceefddddd4eeef..
                .....ccdcddee2222222f...
                ......cccdd44e544444f...
                .........eeeeffffffff...
                .............ff...fff...
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                `],
            350,
            true
            )
        }
        if (LastDirection == 1) {
            animation.runImageAnimation(
            Hero,
            [img`
                ........................
                ..............ffffff....
                .............f2feeeeff..
                ............f222feeeeff.
                .......cc...feeeeffeeef.
                .......cdc.fe2222eeffff.
                .......cddcf2effff222ef.
                ........cddcffeeefffffff
                .........cddce44fbe44eff
                ..........cdceddf14d4eef
                ..........cccdeddd4eeef.
                ...........edd4e44eeff..
                ............ee442222f...
                .............f2e2222f...
                .............f554444f...
                ..............ffffff....
                ................fff.....
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                `,img`
                ........................
                ..............fff.......
                .............f2fffff....
                ...........ff22eeeeeff..
                ..........ff222eeeeeeff.
                ..........feeeefffeeeef.
                .........fe2222eeefffff.
                .........f2efffff222efff
                ..cc.....fffeeefffffffff
                ..cdcc...fee44fbbe44efef
                ..ccddcc..feddfbb4d4eef.
                ....cdddceefddddd4eeef..
                .....ccdcddee2222222f...
                ......cccdd44e544444f...
                .........eeeeffffffff...
                .............ff...fff...
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                `],
            350,
            true
            )
        }
        if (LastDirection == 2) {
            animation.runImageAnimation(
            Hero,
            [img`
                ........................
                ..............ffffff....
                .............f2feeeeff..
                ............f222feeeeff.
                .......cc...feeeeffeeef.
                .......cdc.fe2222eeffff.
                .......cddcf2effff222ef.
                ........cddcffeeefffffff
                .........cddce44fbe44eff
                ..........cdceddf14d4eef
                ..........cccdeddd4eeef.
                ...........edd4e44eeff..
                ............ee442222f...
                .............f2e2222f...
                .............f554444f...
                ..............ffffff....
                ................fff.....
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                `,img`
                ........................
                ..............fff.......
                .............f2fffff....
                ...........ff22eeeeeff..
                ..........ff222eeeeeeff.
                ..........feeeefffeeeef.
                .........fe2222eeefffff.
                .........f2efffff222efff
                ..cc.....fffeeefffffffff
                ..cdcc...fee44fbbe44efef
                ..ccddcc..feddfbb4d4eef.
                ....cdddceefddddd4eeef..
                .....ccdcddee2222222f...
                ......cccdd44e544444f...
                .........eeeeffffffff...
                .............ff...fff...
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                `],
            350,
            true
            )
        }
        if (LastDirection == 3) {
            animation.runImageAnimation(
            Hero,
            [img`
                ........................
                ..............ffffff....
                .............f2feeeeff..
                ............f222feeeeff.
                .......cc...feeeeffeeef.
                .......cdc.fe2222eeffff.
                .......cddcf2effff222ef.
                ........cddcffeeefffffff
                .........cddce44fbe44eff
                ..........cdceddf14d4eef
                ..........cccdeddd4eeef.
                ...........edd4e44eeff..
                ............ee442222f...
                .............f2e2222f...
                .............f554444f...
                ..............ffffff....
                ................fff.....
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                `,img`
                ........................
                ..............fff.......
                .............f2fffff....
                ...........ff22eeeeeff..
                ..........ff222eeeeeeff.
                ..........feeeefffeeeef.
                .........fe2222eeefffff.
                .........f2efffff222efff
                ..cc.....fffeeefffffffff
                ..cdcc...fee44fbbe44efef
                ..ccddcc..feddfbb4d4eef.
                ....cdddceefddddd4eeef..
                .....ccdcddee2222222f...
                ......cccdd44e544444f...
                .........eeeeffffffff...
                .............ff...fff...
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                `],
            350,
            true
            )
        }
    } else {
    	
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorLockedNorth, function (sprite, location) {
    game.gameOver(true)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    LastDirection = 0
    Walk()
})
function SpeedCreate () {
    HEROspeed = statusbars.create(40, 4, StatusBarKind.Health)
    HEROspeed.value = 0
    HEROspeed.max = 100
    HEROspeed.setLabel("Speed")
    HEROspeed.setColor(5, 1)
    HEROspeed.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    HEROspeed.setPosition(120, 20)
}
function BOSSHPcreate () {
    BOSSHP_1 = statusbars.create(40, 4, StatusBarKind.Health)
    BOSSHP_1.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    BOSSHP_1.max = 630
    BOSSHP_1.value = 630
    BOSSHP_1.setLabel("HP")
    BOSSHP_1.setColor(4, 1)
    BOSSHP_1.setPosition(43, 5)
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Scene != 0) {
        HeroInformation = [
        "HERO",
        "             等級:" + Level,
        "     生命值:" + HPvalue,
        "傷害:" + Damage,
        "        法力:" + SPvalue,
        "        武器:" + CurrentWeapon,
        "        抗性:" + SuperState
        ]
    }
    game.showLongText(HeroInformation, DialogLayout.Full)
})
function Enemy3Speedcreate () {
    EnemySpeed_3 = statusbars.create(40, 4, StatusBarKind.Health)
    EnemySpeed_3.setStatusBarFlag(StatusBarFlag.SmoothTransition, false)
    EnemySpeed_3.value = 0
    EnemySpeed_3.max = 100
    EnemySpeed_3.setLabel("Speed")
    EnemySpeed_3.setColor(2, 1)
    EnemySpeed_3.setPosition(35, 12)
}
function AssessBattle1 () {
    if (Battle == 1) {
        if (CurrentEnemy == 1) {
            controller.moveSprite(Hero, 0, 0)
            HPcreate()
            SpeedCreate()
            HeroSPcreate()
            Enemy1HPcreate()
            Enemy1Speedcreate()
            animation.runImageAnimation(
            Hero,
            [img`
                ........................
                ..............ffffff....
                .............f2feeeeff..
                ............f222feeeeff.
                .......cc...feeeeffeeef.
                .......cdc.fe2222eeffff.
                .......cddcf2effff222ef.
                ........cddcffeeefffffff
                .........cddce44fbe44eff
                ..........cdceddf14d4eef
                ..........cccdeddd4eeef.
                ...........edd4e44eeff..
                ............ee442222f...
                .............f2e2222f...
                .............f554444f...
                ..............ffffff....
                ................fff.....
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                `,img`
                ........................
                ..............fff.......
                .............f2fffff....
                ...........ff22eeeeeff..
                ..........ff222eeeeeeff.
                ..........feeeefffeeeef.
                .........fe2222eeefffff.
                .........f2efffff222efff
                ..cc.....fffeeefffffffff
                ..cdcc...fee44fbbe44efef
                ..ccddcc..feddfbb4d4eef.
                ....cdddceefddddd4eeef..
                .....ccdcddee2222222f...
                ......cccdd44e544444f...
                .........eeeeffffffff...
                .............ff...fff...
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                `],
            350,
            true
            )
            animation.runImageAnimation(
            Enemy1,
            [img`
                . . . . . . c c c c c c . . . . 
                . . . . . c 6 7 7 7 7 6 c . . . 
                . . . . c 7 7 7 7 7 7 7 7 c . . 
                . . . c 6 7 7 7 7 7 7 7 7 6 c . 
                . . . c 7 7 7 c 6 6 6 6 c 7 c . 
                . . . f 7 7 7 6 f 6 6 f 6 7 f . 
                . . . f 7 7 7 7 7 7 7 7 7 7 f . 
                . . c f 6 7 7 c 6 7 7 7 7 f . . 
                . c 7 7 f 6 7 7 c c c c f . . . 
                c 7 7 7 7 f c 6 7 7 7 2 7 c . . 
                c c 6 7 7 6 c f c 7 7 2 7 7 c . 
                . . c 6 6 6 c c f 6 7 1 1 1 1 c 
                . . f 6 6 6 6 c 6 6 1 1 1 1 1 f 
                . . f c 6 6 6 6 6 1 1 1 1 1 6 f 
                . . . f 6 6 6 1 1 1 1 1 1 6 f . 
                . . . . f c c c c c c c c c . . 
                `,img`
                . . . . . . . c c c c c c . . . 
                . . . . . . c 6 7 7 7 7 6 c . . 
                . . . . . c 7 7 7 7 7 7 7 7 c . 
                . . . . c 6 7 7 7 7 7 7 7 7 6 c 
                . . . . c 7 7 7 c 6 6 6 6 c 7 c 
                . . . . f 7 7 7 6 f 6 6 f 6 7 f 
                . . . . f 7 7 7 7 7 7 7 7 7 7 f 
                . . . . f 6 7 7 c 6 7 7 7 7 f . 
                . . c c c f 6 7 7 c c c c f . . 
                . c 7 7 7 c c f 7 7 7 2 6 c . . 
                c 7 7 7 7 6 f c 7 7 2 7 7 6 c . 
                c c c 6 6 6 c 6 6 7 1 1 1 1 c . 
                . . c 6 6 6 6 6 6 1 1 1 1 1 c . 
                . . c 6 6 6 6 6 1 1 1 1 1 6 c . 
                . . c c 6 6 7 1 1 1 1 1 6 c . . 
                . . . c c c c c c c c c c . . . 
                `],
            350,
            true
            )
            tiles.setCurrentTilemap(tilemap`層級2`)
            scene.centerCameraAt(150, 130)
            scaling.scaleToPercent(Hero, 150, ScaleDirection.Uniformly, ScaleAnchor.Middle)
            scaling.scaleToPercent(Enemy1, 150, ScaleDirection.Uniformly, ScaleAnchor.Middle)
            tiles.placeOnTile(Hero, tiles.getTileLocation(11, 8))
            tiles.placeOnTile(Enemy1, tiles.getTileLocation(6, 8))
        }
    }
}
function Enemy2Speedcreate () {
    EnemySpeed_2 = statusbars.create(40, 4, StatusBarKind.Health)
    EnemySpeed_2.setStatusBarFlag(StatusBarFlag.SmoothTransition, false)
    EnemySpeed_2.value = 0
    EnemySpeed_2.max = 100
    EnemySpeed_2.setLabel("Speed")
    EnemySpeed_2.setColor(2, 1)
    EnemySpeed_2.setPosition(35, 12)
}
function RecoverHP () {
    animation.runImageAnimation(
    Hero,
    [img`
        ........333333fffff33333
        ........33...f2feeeeff33
        .........33333333333333.
        .......cc...feeeeffeeef.
        .......c3333e2222eeff333
        .......33dcf2effff222ef3
        .......3cddcffeeeffffff3
        ........3333333333333333
        ..........cdceddf14d4eef
        ..........cccdeddd4eeef.
        .........333dd4e44ee333.
        .......33...ee442222f.33
        .......3.....f2e2222f.33
        ........333333354444f33.
        ..............f333333...
        ................fff.....
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ..............ffffff....
        .............f2feeeeff..
        ........33333222feeee333
        .......33...feeeeffeeef3
        .......3333fe2222eefff33
        .......cddc333333333333.
        ........cddcffeeefffffff
        .........cddce44fbe44eff
        .......3333dceddf14d3333
        .....33...cccdeddd4eeef3
        .....33333.edd4e44eeff.3
        .........333333333333333
        .............f2e2222f...
        .......333333f554444f...
        .......33.....fffff33333
        ........3333333333333333
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ..............ffffff....
        .............f2feeeeff..
        ............f222feeeeff.
        .......cc...feeeeffeeef.
        .......cd333e2222eefff33
        ......3333cf2effff222ef3
        ......3.cddcffeeeffffff3
        ......333cddce44fbe44ef3
        .........3333eddf14d4ee3
        ..........ccc33333333333
        ...........edd4e44eeff..
        ..........33ee442222f...
        ........33...f2e2222333.
        ........3....f554444f..3
        ........333...ffffff...3
        ...........3333333333333
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ..............ffffff....
        .............f2feeeeff..
        ............f222feeeeff.
        .......cc...feeeeffeeef.
        .......cdc.fe2222eeffff.
        .......cddcf2effff222ef.
        ........cddcffeeefffffff
        .........cddce44fbe44eff
        .......333cdceddf14d433f
        ......3...cccdeddd4eee33
        ......33...edd4e44eeff.3
        .......333333e4422233333
        .............3333333f...
        .............f554444f...
        ..........3333ffffff.333
        ..........33333333333333
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ..............ffffff....
        .............f2feeeeff..
        ............f222feeeeff.
        .......cc...feeeeffeeef.
        .......cdc.fe2222eeffff.
        .......cddcf2effff222ef.
        ........cddcffeeefffffff
        .........cddce44fbe44eff
        ..........cdceddf14d4eef
        ..........cccdeddd4eeef.
        ...........edd4e44eeff..
        .........3333e44222233..
        ........33...f2e2222f33.
        ........3....f554444f.33
        ........33333333ffff..33
        ...............3333333..
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `],
    250,
    true
    )
}
function TittleScene () {
    game.showLongText("歡迎來到RPG速通地下城", DialogLayout.Bottom)
    game.showLongText("勝利條件:玩家到指定位置", DialogLayout.Bottom)
    game.showLongText("失敗條件:玩家HP為0", DialogLayout.Bottom)
    game.showLongText("按下B後可以查看玩家訊息", DialogLayout.Bottom)
    game.splash("1F", "難度:簡單")
}
function Enemy1HPcreate () {
    EnemyHP_1 = statusbars.create(40, 4, StatusBarKind.Health)
    EnemyHP_1.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    EnemyHP_1.max = 80
    EnemyHP_1.value = 80
    EnemyHP_1.setLabel("HP")
    EnemyHP_1.setColor(10, 1)
    EnemyHP_1.setPosition(43, 5)
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    LastDirection = 3
    Walk()
})
function AssessBattle3 () {
    if (Battle == 1) {
        if (CurrentEnemy == 3) {
            controller.moveSprite(Hero, 0, 0)
            HPcreate()
            SpeedCreate()
            HeroSPcreate()
            Enemy3HPcreate()
            Enemy3Speedcreate()
            animation.runImageAnimation(
            Hero,
            [img`
                ........................
                ..............ffffff....
                .............f2feeeeff..
                ............f222feeeeff.
                .......cc...feeeeffeeef.
                .......cdc.fe2222eeffff.
                .......cddcf2effff222ef.
                ........cddcffeeefffffff
                .........cddce44fbe44eff
                ..........cdceddf14d4eef
                ..........cccdeddd4eeef.
                ...........edd4e44eeff..
                ............ee442222f...
                .............f2e2222f...
                .............f554444f...
                ..............ffffff....
                ................fff.....
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                `,img`
                ........................
                ..............fff.......
                .............f2fffff....
                ...........ff22eeeeeff..
                ..........ff222eeeeeeff.
                ..........feeeefffeeeef.
                .........fe2222eeefffff.
                .........f2efffff222efff
                ..cc.....fffeeefffffffff
                ..cdcc...fee44fbbe44efef
                ..ccddcc..feddfbb4d4eef.
                ....cdddceefddddd4eeef..
                .....ccdcddee2222222f...
                ......cccdd44e544444f...
                .........eeeeffffffff...
                .............ff...fff...
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                `],
            350,
            true
            )
            animation.runImageAnimation(
            Enemy3,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . c c c c . . . . 
                . . . . . . c c 5 5 5 5 c c . . 
                . . . . . c 5 5 5 5 5 5 5 5 c . 
                . . . . c 5 5 5 f 1 5 5 5 5 5 c 
                . . . c 5 5 5 5 f f 5 5 5 5 5 c 
                . . . c 5 5 5 5 5 5 5 5 5 5 5 c 
                . . c d 5 5 5 5 5 5 b 1 b b c c 
                . . c d d d 5 5 5 5 5 3 3 3 5 c 
                . . c d d d 5 5 5 5 5 5 5 5 b . 
                . c c d d d d b 5 5 c b b c . . 
                c d c d d d d b b 5 5 c b b c . 
                c d d d d d d d d c c c c c c . 
                . c d d d b 5 5 d c c c c . . . 
                . . c c c b 5 5 b c c c c c . . 
                . . . . c b 5 5 d c b b b c . . 
                `,img`
                . . . . . . . c c c c c . . . . 
                . . . . . . c 5 5 5 5 5 c c . . 
                . . . . . c 5 5 f 1 5 5 5 5 c . 
                . . . . c 5 5 5 f f 5 5 5 5 5 c 
                . . . c 5 5 5 5 5 5 5 5 5 5 5 c 
                . . . c 5 5 5 5 5 5 b 1 b b c c 
                . . c d 5 5 5 5 5 5 5 3 3 3 5 c 
                . . c d d d 5 5 5 5 5 3 3 3 5 c 
                . . c d d d 5 5 5 b 5 5 5 5 c . 
                . . c d d d d b 5 5 c b b c . . 
                c c c d d d d b b 5 5 c b b c . 
                c d d d d d d d d c c c c c c . 
                . c d d d b 5 5 b c c c . . . . 
                . . c c c b b 5 5 d c . . . . . 
                . . . . . c c c c c c c . . . . 
                . . . . . . . c b b b c . . . . 
                `,img`
                . . . . . . . c c c c c . . . . 
                . . . . . . c 5 5 5 5 5 c c . . 
                . . . . . c 5 5 f 1 5 5 5 5 c . 
                . . . . c 5 5 5 f f 5 5 5 5 5 c 
                . . . c 5 5 5 5 5 5 5 5 5 5 5 c 
                . . . c 5 5 5 5 5 5 b 1 b b c c 
                . . c d 5 5 5 5 5 5 5 3 3 3 5 c 
                . . c d d d 5 5 5 5 5 5 5 5 5 c 
                . . c d d d 5 5 5 b 5 5 5 5 c . 
                . . c d d d d b 5 5 c b b c . . 
                c c c d d d d b b 5 5 c b b c . 
                c d d d d d d d d c c c c c c . 
                . c c d d d b 5 5 b c c . . . . 
                . . . c c c b b 5 5 d c . . . . 
                . . . . . c c c c c c c . . . . 
                . . . . . . . c b b b c . . . . 
                `,img`
                . . . . . . . c c c c c . . . . 
                . . . . . . c 5 5 5 5 5 c c . . 
                . . . . . c 5 5 f 1 5 5 5 5 c . 
                . . . . c 5 5 5 f f 5 5 5 5 5 c 
                . . . c 5 5 5 5 5 5 5 5 5 5 5 c 
                . . . c 5 5 5 5 5 5 b 1 b b c c 
                . . c d 5 5 5 5 5 5 5 3 3 3 5 c 
                . . c d d d 5 5 5 5 5 5 5 5 5 c 
                . . c d d d 5 5 5 b 5 5 5 5 c . 
                . . c d d d d b 5 5 c b b c . . 
                . c c d d d d b b 5 5 c b b c . 
                c c d d d d d d b b c c c c c . 
                c d d d d d 5 5 b 5 5 c c . . . 
                c c c c c c b b 5 5 b c . . . . 
                . . . . . . c c c c c c . . . . 
                . . . . . . c b b b c . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . c c c c . . . . 
                . . . . . . c c 5 5 5 5 c c . . 
                . . . . . c 5 5 5 5 5 5 5 5 c . 
                . . . . c 5 5 5 f 1 5 5 5 5 5 c 
                . . . c 5 5 5 5 f f 5 5 5 5 5 c 
                . . . c 5 5 5 5 5 5 b 1 b b c c 
                . . c d 5 5 5 5 5 5 b b 3 3 c c 
                . . c d d d 5 5 5 5 5 3 3 3 5 c 
                . . c d d d 5 5 5 5 5 5 5 5 b . 
                . . c d d d d b 5 5 c b b c . . 
                c c c d d d d b b 5 5 c b b c . 
                c d d d d d d d d c c c c c c . 
                c c d d d b 5 5 d c c c c . . . 
                . . c c c b 5 5 b c c b c . . . 
                . . . . . c b 5 5 d c c c . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . c c c c . . . . 
                . . . . . . c c 5 5 5 5 c c . . 
                . . . . . c 5 5 5 5 5 5 5 5 c . 
                . . . . c 5 5 5 f 1 5 5 5 5 5 c 
                . . . c 5 5 5 5 f f 5 5 5 5 5 c 
                . . . c 5 5 5 5 5 5 5 5 5 5 5 c 
                . . c d 5 5 5 5 5 5 b 1 b b c c 
                . . c d d d 5 5 5 5 5 3 3 3 5 c 
                . . c d d d 5 5 5 5 5 5 5 5 b . 
                . . c d d d d b 5 5 c b b c . . 
                c c c d d d d b b 5 5 c b b c . 
                c d d d d d d d d c c c c c c . 
                . c c d d b 5 5 d c c c c . . . 
                . . . c c b 5 5 c c c b b c . . 
                . . . . . c 5 5 d c c c c c . . 
                `],
            350,
            true
            )
            tiles.setCurrentTilemap(tilemap`層級2`)
            scene.centerCameraAt(150, 130)
            scaling.scaleToPercent(Hero, 150, ScaleDirection.Uniformly, ScaleAnchor.Middle)
            scaling.scaleToPercent(Enemy3, 150, ScaleDirection.Uniformly, ScaleAnchor.Middle)
            tiles.placeOnTile(Hero, tiles.getTileLocation(11, 8))
            tiles.placeOnTile(Enemy3, tiles.getTileLocation(5, 8))
        }
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    LastDirection = 1
    Walk()
})
function Enemy1Speedcreate () {
    EnemySpeed_1 = statusbars.create(40, 4, StatusBarKind.Health)
    EnemySpeed_1.setStatusBarFlag(StatusBarFlag.SmoothTransition, false)
    EnemySpeed_1.value = 0
    EnemySpeed_1.max = 100
    EnemySpeed_1.setLabel("Speed")
    EnemySpeed_1.setColor(2, 1)
    EnemySpeed_1.setPosition(35, 12)
}
function HPcreate () {
    HP = statusbars.create(40, 4, StatusBarKind.Health)
    HP.max = HPvalue
    HP.value = HPvalue
    HP.setLabel("HP")
    HP.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    HP.setPosition(129, 5)
}
function DestoryStatue () {
    sprites.destroy(HP, effects.none, 100)
    sprites.destroy(SP, effects.none, 100)
    sprites.destroy(HEROspeed, effects.none, 100)
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    LastDirection = 2
    Walk()
})
function Scene1F () {
    tiles.setCurrentTilemap(tilemap`層級1`)
    Hero = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    treasure1 = sprites.create(img`
        . . b b b b b b b b b b b b . . 
        . b e 4 4 4 4 4 4 4 4 4 4 e b . 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e e 4 4 4 4 4 4 4 4 4 4 e e b 
        b e e e e e e e e e e e e e e b 
        b e e e e e e e e e e e e e e b 
        b b b b b b b d d b b b b b b b 
        c b b b b b b c c b b b b b b c 
        c c c c c c b c c b c c c c c c 
        b e e e e e c b b c e e e e e b 
        b e e e e e e e e e e e e e e b 
        b c e e e e e e e e e e e e c b 
        b b b b b b b b b b b b b b b b 
        . b b . . . . . . . . . . b b . 
        `, SpriteKind.Food)
    treasure2 = sprites.create(img`
        . . b b b b b b b b b b b b . . 
        . b a 2 2 2 2 2 2 2 2 2 2 a b . 
        b a 2 2 2 2 2 2 2 2 2 2 2 2 a b 
        b a 2 2 2 2 2 2 2 2 2 2 2 2 a b 
        b a 2 2 2 2 2 2 2 2 2 2 2 2 a b 
        b a a 2 2 2 2 2 2 2 2 2 2 a a b 
        b a a a a a a a a a a a a a a b 
        b a a a a a a a a a a a a a a b 
        b b b b b b b d d b b b b b b b 
        c b b b b b b c c b b b b b b c 
        c c c c c c b c c b c c c c c c 
        b 2 2 2 2 2 c b b c 2 2 2 2 2 b 
        b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b 
        b c 2 2 2 2 2 2 2 2 2 2 2 2 c b 
        b b b b b b b b b b b b b b b b 
        . b b . . . . . . . . . . b b . 
        `, SpriteKind.Food)
    treasure3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . 6 6 6 9 9 6 6 6 . . . . 
        . . . 9 9 9 9 6 6 6 6 6 6 . . . 
        . . 6 9 9 9 9 8 8 8 1 1 6 6 . . 
        . . 9 9 9 9 9 8 8 8 1 1 9 6 . . 
        . 6 9 9 9 9 8 8 8 8 8 9 9 6 6 . 
        . 6 9 9 9 8 8 8 6 6 6 6 9 6 6 . 
        . 6 6 9 9 8 8 6 6 6 6 6 6 6 6 . 
        . 6 8 9 9 8 8 6 6 6 6 6 6 6 6 . 
        . . 6 8 9 9 8 6 6 6 6 6 8 6 . . 
        . . 6 8 8 9 8 8 6 6 6 8 6 6 . . 
        . . . 6 8 8 8 8 8 8 8 8 6 . . . 
        . . . . 6 6 8 8 8 8 6 6 . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    Enemy1 = sprites.create(img`
        . . . . . . c c c c c c . . . . 
        . . . . . c 6 7 7 7 7 6 c . . . 
        . . . . c 7 7 7 7 7 7 7 7 c . . 
        . . . c 6 7 7 7 7 7 7 7 7 6 c . 
        . . . c 7 7 7 c 6 6 6 6 c 7 c . 
        . . . f 7 7 7 6 f 6 6 f 6 7 f . 
        . . . f 7 7 7 7 7 7 7 7 7 7 f . 
        . . c f 6 7 7 c 6 7 7 7 7 f . . 
        . c 7 7 f 6 7 7 c c c c f . . . 
        c 7 7 7 7 f c 6 7 7 7 2 7 c . . 
        c c 6 7 7 6 c f c 7 7 2 7 7 c . 
        . . c 6 6 6 c c f 6 7 1 1 1 1 c 
        . . f 6 6 6 6 c 6 6 1 1 1 1 1 f 
        . . f c 6 6 6 6 6 1 1 1 1 1 6 f 
        . . . f 6 6 6 1 1 1 1 1 1 6 f . 
        . . . . f c c c c c c c c c . . 
        `, SpriteKind.Enemy)
    Enemy2 = sprites.create(img`
        . . . . . . c c c c c c . . . . 
        . . . . . c 6 5 5 5 5 6 c . . . 
        . . . . c 5 5 5 5 5 5 5 5 c . . 
        . . . c 6 5 5 5 5 5 5 5 5 6 c . 
        . . . c 5 5 5 c 6 6 6 6 c 5 c . 
        . . . f 5 5 5 6 f 6 6 f 6 5 f . 
        . . . f 5 5 5 5 5 5 5 5 5 5 f . 
        . . c f 6 5 5 c 6 5 5 5 5 f . . 
        . c 5 5 f 6 5 5 c c c c f . . . 
        c 5 5 5 5 f c 6 5 5 5 2 5 c . . 
        c c 6 5 5 6 c f c 7 5 2 5 5 c . 
        . . c 6 6 6 c c f 6 5 1 1 1 1 c 
        . . f 6 6 6 6 c 6 6 1 1 1 1 1 f 
        . . f c 6 6 6 6 6 1 1 1 1 1 6 f 
        . . . f 6 6 6 1 1 1 1 1 1 6 f . 
        . . . . f c c c c c c c c c . . 
        `, SpriteKind.Enemy)
    Enemy3 = sprites.create(img`
        .........ccc............
        .........cccccccc.......
        ......cc..cc55555cc.....
        ......cccc555555555c....
        ......ccb55555555555c...
        ...cc..b55555ff155555c..
        ...cccb5555555ff55d55c..
        ....ccb55555d55555555c..
        .....b55555d5555d5555c..
        ..cc.b555ddd55555bbbbc..
        ..cccd55ddddd5555d555c..
        ...ccdd5dbdddbbbd555c...
        ....bdddb555bbbbbccc....
        ..cccdddb555cbbbbbbc....
        ...ccddddb555cbbbbbbc...
        ....cdddddb555cbbbbbc...
        ...ccddddddb55cbbbbbcc..
        ..ccbddddd55bcbbbbbbcc..
        ccdddddddd5555bbbbbbc...
        cdddddddbdd555bbbbbc....
        .ccddddbbbdd55cbbccc....
        ...cccbbcbddddccdddcc...
        ......cccdd555dcccccc...
        ........cccccccc........
        `, SpriteKind.Enemy)
    BOSS1 = sprites.create(img`
        ...........22...........
        .........225522.........
        ........255444522.......
        .......2544aaa4452......
        ......254affffa4452.....
        .....254ff1111ff4452....
        .....25fb111111bf4522...
        ....254f11111111f44522..
        ...254fd11111111df44522.
        ..254afd11111111df44452.
        ..254afddd1111dddfaa452.
        ..254afbdbfddfbdbfaa452.
        .2544afcdcf11fcdcfaa452.
        .254aaafb111111bfaaa4522
        .254aafffcdb1bdffffa4452
        .254fc111cbfbfc111cfa452
        .254f1b1b1ffff1b1b1fa452
        .254fbfbffffffbfbfbfa452
        .2544aaaaffffffaaaaa4452
        .225444aaaafffaaaaa44522
        ...255444aaaaaaaaa44522.
        ....2225444444444445522.
        ......2225555555552222..
        .........2222222222.....
        `, SpriteKind.Enemy)
    tiles.placeOnTile(Hero, tiles.getTileLocation(0, 0))
    tiles.placeOnTile(Enemy1, tiles.getTileLocation(5, 8))
    tiles.placeOnTile(Enemy2, tiles.getTileLocation(6, 1))
    tiles.placeOnTile(Enemy3, tiles.getTileLocation(12, 3))
    tiles.placeOnTile(treasure1, tiles.getTileLocation(4, 15))
    tiles.placeOnTile(treasure2, tiles.getTileLocation(6, 0))
    tiles.placeOnTile(treasure3, tiles.getTileLocation(12, 2))
    tiles.placeOnTile(BOSS1, tiles.getTileLocation(14, 1))
    scene.cameraFollowSprite(Hero)
    controller.moveSprite(Hero, 100, 100)
}
function BOSSSpeedCreate () {
    BOSSSpeed_1 = statusbars.create(40, 4, StatusBarKind.Health)
    BOSSSpeed_1.max = 100
    BOSSSpeed_1.value = 0
    BOSSSpeed_1.setLabel("Speed")
    BOSSSpeed_1.setColor(2, 1)
    BOSSSpeed_1.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    BOSSSpeed_1.setPosition(35, 12)
}
function HeroSPcreate () {
    SP = statusbars.create(40, 4, StatusBarKind.Health)
    SP.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    SP.max = SPvalue
    SP.value = SPvalue
    SP.setLabel("SP")
    SP.setColor(8, 1)
    SP.setPosition(129, 12)
}
function AssessBattle2 () {
    if (Battle == 1) {
        if (CurrentEnemy == 2) {
            controller.moveSprite(Hero, 0, 0)
            HPcreate()
            SpeedCreate()
            HeroSPcreate()
            Enemy2HPcreate()
            Enemy2Speedcreate()
            animation.runImageAnimation(
            Hero,
            [img`
                ........................
                ..............ffffff....
                .............f2feeeeff..
                ............f222feeeeff.
                .......cc...feeeeffeeef.
                .......cdc.fe2222eeffff.
                .......cddcf2effff222ef.
                ........cddcffeeefffffff
                .........cddce44fbe44eff
                ..........cdceddf14d4eef
                ..........cccdeddd4eeef.
                ...........edd4e44eeff..
                ............ee442222f...
                .............f2e2222f...
                .............f554444f...
                ..............ffffff....
                ................fff.....
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                `,img`
                ........................
                ..............fff.......
                .............f2fffff....
                ...........ff22eeeeeff..
                ..........ff222eeeeeeff.
                ..........feeeefffeeeef.
                .........fe2222eeefffff.
                .........f2efffff222efff
                ..cc.....fffeeefffffffff
                ..cdcc...fee44fbbe44efef
                ..ccddcc..feddfbb4d4eef.
                ....cdddceefddddd4eeef..
                .....ccdcddee2222222f...
                ......cccdd44e544444f...
                .........eeeeffffffff...
                .............ff...fff...
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                `],
            350,
            true
            )
            animation.runImageAnimation(
            Enemy2,
            [img`
                . . . . . . c c c c c c . . . . 
                . . . . . c 6 5 5 5 5 6 c . . . 
                . . . . c 5 5 5 5 5 5 5 5 c . . 
                . . . c 6 5 5 5 5 5 5 5 5 6 c . 
                . . . c 5 5 5 c 6 6 6 6 c 5 c . 
                . . . f 5 5 5 6 f 6 6 f 6 5 f . 
                . . . f 5 5 5 5 5 5 5 5 5 5 f . 
                . . c f 6 5 5 c 6 5 5 5 5 f . . 
                . c 5 5 f 6 5 5 c c c c f . . . 
                c 5 5 5 5 f c 6 5 5 5 2 5 c . . 
                c c 6 5 5 6 c f c 5 5 2 5 5 c . 
                . . c 6 6 6 c c f 6 5 1 1 1 1 c 
                . . f 6 6 6 6 c 6 6 1 1 1 1 1 f 
                . . f c 6 6 6 6 6 1 1 1 1 1 6 f 
                . . . f 6 6 6 1 1 1 1 1 1 6 f . 
                . . . . f c c c c c c c c c . . 
                `,img`
                . . . . . . . c c c c c c . . . 
                . . . . . . c 6 5 5 5 5 6 c . . 
                . . . . . c 5 5 5 5 5 5 5 5 c . 
                . . . . c 6 5 5 5 5 5 5 5 5 6 c 
                . . . . c 5 5 5 c 6 6 6 6 c 5 c 
                . . . . f 5 5 5 6 f 6 6 f 6 5 f 
                . . . . f 5 5 5 5 5 5 5 5 5 5 f 
                . . . . f 6 5 5 c 6 5 5 5 5 f . 
                . . c c c f 6 5 5 c c c c f . . 
                . c 5 5 5 c c f 5 5 5 2 6 c . . 
                c 5 5 5 5 6 f c 5 5 2 5 5 6 c . 
                c c c 6 6 6 c 6 6 5 1 1 1 1 c . 
                . . c 6 6 6 6 6 6 1 1 1 1 1 c . 
                . . c 6 6 6 6 6 1 1 1 1 1 6 c . 
                . . c c 6 6 5 1 1 1 1 1 6 c . . 
                . . . c c c c c c c c c c . . . 
                `],
            350,
            true
            )
            tiles.setCurrentTilemap(tilemap`層級2`)
            scene.centerCameraAt(150, 130)
            scaling.scaleToPercent(Hero, 150, ScaleDirection.Uniformly, ScaleAnchor.Middle)
            scaling.scaleToPercent(Enemy2, 150, ScaleDirection.Uniformly, ScaleAnchor.Middle)
            tiles.placeOnTile(Hero, tiles.getTileLocation(11, 8))
            tiles.placeOnTile(Enemy2, tiles.getTileLocation(6, 8))
        }
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    Scene = 2
    if (Scene == 2) {
        tiles.setCurrentTilemap(tilemap`層級10`)
        tiles.placeOnTile(Hero, tiles.getTileLocation(14, 0))
        game.splash("2F", "難度:地獄")
        game.showLongText("這層戰鬥每回合將會受灼燒傷害", DialogLayout.Bottom)
    }
})
function Enemy3HPcreate () {
    EnemyHP_3 = statusbars.create(40, 4, StatusBarKind.Health)
    EnemyHP_3.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    EnemyHP_3.max = 400
    EnemyHP_3.value = 400
    EnemyHP_3.setLabel("HP")
    EnemyHP_3.setColor(10, 1)
    EnemyHP_3.setPosition(43, 5)
}
function AssessBattle4 () {
    if (Battle == 1) {
        if (CurrentEnemy == 4) {
            controller.moveSprite(Hero, 0, 0)
            HPcreate()
            SpeedCreate()
            HeroSPcreate()
            BOSSHPcreate()
            BOSSSpeedCreate()
            animation.runImageAnimation(
            Hero,
            [img`
                ........................
                ..............ffffff....
                .............f2feeeeff..
                ............f222feeeeff.
                .......cc...feeeeffeeef.
                .......cdc.fe2222eeffff.
                .......cddcf2effff222ef.
                ........cddcffeeefffffff
                .........cddce44fbe44eff
                ..........cdceddf14d4eef
                ..........cccdeddd4eeef.
                ...........edd4e44eeff..
                ............ee442222f...
                .............f2e2222f...
                .............f554444f...
                ..............ffffff....
                ................fff.....
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                `,img`
                ........................
                ..............fff.......
                .............f2fffff....
                ...........ff22eeeeeff..
                ..........ff222eeeeeeff.
                ..........feeeefffeeeef.
                .........fe2222eeefffff.
                .........f2efffff222efff
                ..cc.....fffeeefffffffff
                ..cdcc...fee44fbbe44efef
                ..ccddcc..feddfbb4d4eef.
                ....cdddceefddddd4eeef..
                .....ccdcddee2222222f...
                ......cccdd44e544444f...
                .........eeeeffffffff...
                .............ff...fff...
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                `],
            350,
            true
            )
            animation.runImageAnimation(
            BOSS1,
            [img`
                ........22222...........
                .......22555522.........
                ......2255555522........
                ....222555555552222.....
                ....255555ffff55552.....
                ...22555ff1111ff552.....
                ...2555fb111111bf522....
                ...2555fd1111111f552....
                ...255fdd1111111df52....
                ...255fddd111111df522...
                ...255fdddddd111df552...
                ...255fbddddbfd1df5522..
                ...255fcbbbdcfddbf5552..
                ..22555fcbb11111f55552..
                ..255555fffff1b1f55552..
                ..255555fb111cfbf55552..
                ..255555ffb1b1ff555522..
                ..2555f5fffbfbf555552...
                ..2555ffffffff5555552...
                ..25555fffff555555522...
                ..225555555555555552....
                ...2555555555555552.....
                ...225555555555522......
                .....222222222222.......
                `,img`
                ........22222...........
                .......22555522.........
                ......2255555522........
                ...22225555555522222....
                ..22555555ffff555552....
                ..255555ff1111ff55522...
                .225555fb111111bf55522..
                .255555fd1111111f55552..
                225555fdd1111111df55552.
                255555fddd111111df555522
                255555fdddddd111df555552
                .25555fbddddbfd1df555552
                .25555fcbbbdcfddbf555552
                .225555fcbb11111f5555552
                ..255555fffff1b1f5555552
                ..255555fb111cfbf5555552
                ..255555ffb1b1ff55555522
                ..2555f5fffbfbf55555552.
                ..2555ffffffff55555552..
                ..25555fffff5555555522..
                ..2555555555555555522...
                ...25555555555555522....
                ...2255555555555222.....
                .....222222222222.......
                `,img`
                ........22222...........
                .......22555522.2.......
                ......225555552222......
                .....2255555555252......
                ..2..25555ffff55552.....
                ..222555ff1111ff552.2...
                ..22555fb111111bf5222...
                ..22555fd1111111f5522...
                ..2555fdd1111111df552...
                ..2555fddd111111df552...
                2.2555fdddddd111df552...
                225555fbddddbfd1df5522..
                225555fcbbbdcfddbf5552..
                2555555fcbb11111f55552.2
                25555555fffff1b1f55552.2
                25555555fb111cfbf5555222
                25555555ffb1b1ff55555222
                .25555f5fffbfbf55555552.
                .25555ffffffff555555552.
                .255555fffff55555555552.
                ..555555555555555555522.
                ..22555555555555555222..
                ...22555555555555222....
                .....222222222222.......
                `],
            200,
            true
            )
            tiles.setCurrentTilemap(tilemap`層級2`)
            scene.centerCameraAt(150, 130)
            scaling.scaleToPercent(Hero, 150, ScaleDirection.Uniformly, ScaleAnchor.Middle)
            scaling.scaleToPercent(BOSS1, 180, ScaleDirection.Uniformly, ScaleAnchor.Middle)
            tiles.placeOnTile(Hero, tiles.getTileLocation(11, 8))
            tiles.placeOnTile(BOSS1, tiles.getTileLocation(5, 8))
        }
    }
}
blockMenu.onMenuOptionSelected(function (option, index) {
    if (TouchWeapon == "長劍") {
        if (Weapons == 0) {
            if (option == "裝備") {
                blockMenu.closeMenu()
                game.showLongText("傷害+10", DialogLayout.Bottom)
                Damage += 10
                Weapons = 1
                CurrentWeapon = "長劍"
            }
            if (option == "丟棄") {
                blockMenu.closeMenu()
                Weapons = 0
                Damage += 0
                CurrentWeapon = "赤拳"
            }
        }
        if (Weapons == 2) {
            if (option == "裝備") {
                blockMenu.closeMenu()
                game.showLongText("傷害 -40", DialogLayout.Bottom)
                Damage += -40
                Weapons = 1
                CurrentWeapon = "長劍"
            }
            if (option == "丟棄") {
                blockMenu.closeMenu()
                Weapons = 1
                Damage += 0
                CurrentWeapon = "玄鐵劍"
            }
        }
    }
    if (TouchWeapon == "玄鐵劍") {
        if (Weapons == 0) {
            if (option == "裝備") {
                blockMenu.closeMenu()
                game.showLongText("傷害+50", DialogLayout.Bottom)
                Damage += 50
                Weapons = 2
                CurrentWeapon = "玄鐵劍"
            }
            if (option == "丟棄") {
                blockMenu.closeMenu()
                Weapons = 2
                Damage += 0
                CurrentWeapon = "赤拳"
            }
        }
        if (Weapons == 1) {
            if (option == "裝備") {
                blockMenu.closeMenu()
                game.showLongText("傷害+40", DialogLayout.Bottom)
                Damage += 40
                Weapons = 2
                CurrentWeapon = "玄鐵劍"
            }
            if (option == "丟棄") {
                blockMenu.closeMenu()
                Weapons = 2
                Damage += 0
                CurrentWeapon = "長劍"
            }
        }
    }
    if (option == "服用") {
        blockMenu.closeMenu()
        FireRistent = 1
        SuperState = "火免"
        game.showLongText("玩家獲得對火屬性傷害免疫", DialogLayout.Bottom)
    }
    if (Battle == 1) {
        if (CurrentEnemy == 1) {
            timer.throttle("AttackAction", 2000, function () {
                if (option == "攻擊") {
                    blockMenu.closeMenu()
                    HEROspeed.value = 0
                    EnemyHP_1.value += 0 - Damage
                    Hero.setPosition(140, 140)
                    scene.cameraShake(3, 600)
                    music.play(music.createSoundEffect(WaveShape.Noise, 1600, 1, 255, 255, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
                    Enemy1.startEffect(effects.fire)
                    timer.after(600, function () {
                        Hero.setPosition(180, 140)
                        effects.clearParticles(Enemy1)
                    })
                } else if (option == "治癒") {
                    if (SP.value >= 8) {
                        blockMenu.closeMenu()
                        RecoverHP()
                        HEROspeed.value = 0
                        SP.value += -8
                        HP.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
                        HP.value += RecoverValue
                        music.play(music.createSoundEffect(WaveShape.Noise, 200, 600, 255, 255, 1000, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
                    }
                }
                timer.after(500, function () {
                    animation.runImageAnimation(
                    Hero,
                    [img`
                        ........................
                        ..............ffffff....
                        .............f2feeeeff..
                        ............f222feeeeff.
                        .......cc...feeeeffeeef.
                        .......cdc.fe2222eeffff.
                        .......cddcf2effff222ef.
                        ........cddcffeeefffffff
                        .........cddce44fbe44eff
                        ..........cdceddf14d4eef
                        ..........cccdeddd4eeef.
                        ...........edd4e44eeff..
                        ............ee442222f...
                        .............f2e2222f...
                        .............f554444f...
                        ..............ffffff....
                        ................fff.....
                        ........................
                        ........................
                        ........................
                        ........................
                        ........................
                        ........................
                        ........................
                        `,img`
                        ........................
                        ..............fff.......
                        .............f2fffff....
                        ...........ff22eeeeeff..
                        ..........ff222eeeeeeff.
                        ..........feeeefffeeeef.
                        .........fe2222eeefffff.
                        .........f2efffff222efff
                        ..cc.....fffeeefffffffff
                        ..cdcc...fee44fbbe44efef
                        ..ccddcc..feddfbb4d4eef.
                        ....cdddceefddddd4eeef..
                        .....ccdcddee2222222f...
                        ......cccdd44e544444f...
                        .........eeeeffffffff...
                        .............ff...fff...
                        ........................
                        ........................
                        ........................
                        ........................
                        ........................
                        ........................
                        ........................
                        ........................
                        `],
                    350,
                    true
                    )
                })
            })
        }
        if (CurrentEnemy == 2) {
            timer.throttle("AttackAction", 2000, function () {
                if (option == "攻擊") {
                    blockMenu.closeMenu()
                    HEROspeed.value = 0
                    EnemyHP_2.value += 0 - Damage
                    Hero.setPosition(140, 140)
                    scene.cameraShake(3, 600)
                    music.play(music.createSoundEffect(WaveShape.Noise, 1600, 1, 255, 255, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
                    Enemy2.startEffect(effects.fire)
                    timer.after(600, function () {
                        Hero.setPosition(180, 140)
                        effects.clearParticles(Enemy2)
                    })
                } else if (option == "治癒") {
                    if (SP.value >= 8) {
                        blockMenu.closeMenu()
                        RecoverHP()
                        HEROspeed.value = 0
                        SP.value += -8
                        HP.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
                        HP.value += RecoverValue
                        music.play(music.createSoundEffect(WaveShape.Noise, 200, 600, 255, 255, 1000, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
                    }
                }
                timer.after(500, function () {
                    animation.runImageAnimation(
                    Hero,
                    [img`
                        ........................
                        ..............ffffff....
                        .............f2feeeeff..
                        ............f222feeeeff.
                        .......cc...feeeeffeeef.
                        .......cdc.fe2222eeffff.
                        .......cddcf2effff222ef.
                        ........cddcffeeefffffff
                        .........cddce44fbe44eff
                        ..........cdceddf14d4eef
                        ..........cccdeddd4eeef.
                        ...........edd4e44eeff..
                        ............ee442222f...
                        .............f2e2222f...
                        .............f554444f...
                        ..............ffffff....
                        ................fff.....
                        ........................
                        ........................
                        ........................
                        ........................
                        ........................
                        ........................
                        ........................
                        `,img`
                        ........................
                        ..............fff.......
                        .............f2fffff....
                        ...........ff22eeeeeff..
                        ..........ff222eeeeeeff.
                        ..........feeeefffeeeef.
                        .........fe2222eeefffff.
                        .........f2efffff222efff
                        ..cc.....fffeeefffffffff
                        ..cdcc...fee44fbbe44efef
                        ..ccddcc..feddfbb4d4eef.
                        ....cdddceefddddd4eeef..
                        .....ccdcddee2222222f...
                        ......cccdd44e544444f...
                        .........eeeeffffffff...
                        .............ff...fff...
                        ........................
                        ........................
                        ........................
                        ........................
                        ........................
                        ........................
                        ........................
                        ........................
                        `],
                    350,
                    true
                    )
                })
            })
        }
        if (CurrentEnemy == 3) {
            timer.throttle("AttackAction", 2000, function () {
                if (option == "攻擊") {
                    blockMenu.closeMenu()
                    HEROspeed.value = 0
                    EnemyHP_3.value += 0 - Damage
                    Hero.setPosition(140, 140)
                    scene.cameraShake(3, 600)
                    music.play(music.createSoundEffect(WaveShape.Noise, 1600, 1, 255, 255, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
                    Enemy3.startEffect(effects.fire)
                    timer.after(600, function () {
                        Hero.setPosition(180, 140)
                        effects.clearParticles(Enemy3)
                    })
                } else if (option == "治癒") {
                    if (SP.value >= 8) {
                        blockMenu.closeMenu()
                        RecoverHP()
                        HEROspeed.value = 0
                        SP.value += -8
                        HP.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
                        HP.value += RecoverValue
                        music.play(music.createSoundEffect(WaveShape.Noise, 200, 600, 255, 255, 1000, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
                    }
                }
                timer.after(500, function () {
                    animation.runImageAnimation(
                    Hero,
                    [img`
                        ........................
                        ..............ffffff....
                        .............f2feeeeff..
                        ............f222feeeeff.
                        .......cc...feeeeffeeef.
                        .......cdc.fe2222eeffff.
                        .......cddcf2effff222ef.
                        ........cddcffeeefffffff
                        .........cddce44fbe44eff
                        ..........cdceddf14d4eef
                        ..........cccdeddd4eeef.
                        ...........edd4e44eeff..
                        ............ee442222f...
                        .............f2e2222f...
                        .............f554444f...
                        ..............ffffff....
                        ................fff.....
                        ........................
                        ........................
                        ........................
                        ........................
                        ........................
                        ........................
                        ........................
                        `,img`
                        ........................
                        ..............fff.......
                        .............f2fffff....
                        ...........ff22eeeeeff..
                        ..........ff222eeeeeeff.
                        ..........feeeefffeeeef.
                        .........fe2222eeefffff.
                        .........f2efffff222efff
                        ..cc.....fffeeefffffffff
                        ..cdcc...fee44fbbe44efef
                        ..ccddcc..feddfbb4d4eef.
                        ....cdddceefddddd4eeef..
                        .....ccdcddee2222222f...
                        ......cccdd44e544444f...
                        .........eeeeffffffff...
                        .............ff...fff...
                        ........................
                        ........................
                        ........................
                        ........................
                        ........................
                        ........................
                        ........................
                        ........................
                        `],
                    350,
                    true
                    )
                })
            })
        }
        if (CurrentEnemy == 4) {
            timer.throttle("AttackAction", 2000, function () {
                if (option == "攻擊") {
                    blockMenu.closeMenu()
                    HEROspeed.value = 0
                    BOSSHP_1.value += 0 - Damage
                    Hero.setPosition(140, 140)
                    scene.cameraShake(3, 600)
                    music.play(music.createSoundEffect(WaveShape.Noise, 1600, 1, 255, 255, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
                    BOSS1.startEffect(effects.fire)
                    timer.after(600, function () {
                        Hero.setPosition(180, 140)
                        effects.clearParticles(BOSS1)
                    })
                } else if (option == "治癒") {
                    if (SP.value >= 8) {
                        blockMenu.closeMenu()
                        RecoverHP()
                        HEROspeed.value = 0
                        SP.value += -8
                        HP.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
                        HP.value += RecoverValue
                        music.play(music.createSoundEffect(WaveShape.Noise, 200, 600, 255, 255, 1000, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
                    }
                }
                timer.after(500, function () {
                    animation.runImageAnimation(
                    Hero,
                    [img`
                        ........................
                        ..............ffffff....
                        .............f2feeeeff..
                        ............f222feeeeff.
                        .......cc...feeeeffeeef.
                        .......cdc.fe2222eeffff.
                        .......cddcf2effff222ef.
                        ........cddcffeeefffffff
                        .........cddce44fbe44eff
                        ..........cdceddf14d4eef
                        ..........cccdeddd4eeef.
                        ...........edd4e44eeff..
                        ............ee442222f...
                        .............f2e2222f...
                        .............f554444f...
                        ..............ffffff....
                        ................fff.....
                        ........................
                        ........................
                        ........................
                        ........................
                        ........................
                        ........................
                        ........................
                        `,img`
                        ........................
                        ..............fff.......
                        .............f2fffff....
                        ...........ff22eeeeeff..
                        ..........ff222eeeeeeff.
                        ..........feeeefffeeeef.
                        .........fe2222eeefffff.
                        .........f2efffff222efff
                        ..cc.....fffeeefffffffff
                        ..cdcc...fee44fbbe44efef
                        ..ccddcc..feddfbb4d4eef.
                        ....cdddceefddddd4eeef..
                        .....ccdcddee2222222f...
                        ......cccdd44e544444f...
                        .........eeeeffffffff...
                        .............ff...fff...
                        ........................
                        ........................
                        ........................
                        ........................
                        ........................
                        ........................
                        ........................
                        ........................
                        `],
                    350,
                    true
                    )
                })
            })
        }
    }
})
function Enemy2HPcreate () {
    EnemyHP_2 = statusbars.create(40, 4, StatusBarKind.Health)
    EnemyHP_2.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    EnemyHP_2.max = 100
    EnemyHP_2.value = 100
    EnemyHP_2.setLabel("HP")
    EnemyHP_2.setColor(10, 1)
    EnemyHP_2.setPosition(43, 5)
}
let CrossCut = 0
let EXP = 0
let Moving = false
let EnemyHP_2: StatusBarSprite = null
let EnemyHP_3: StatusBarSprite = null
let BOSSSpeed_1: StatusBarSprite = null
let BOSS1: Sprite = null
let Enemy2: Sprite = null
let treasure3: Sprite = null
let treasure2: Sprite = null
let treasure1: Sprite = null
let SP: StatusBarSprite = null
let HP: StatusBarSprite = null
let EnemySpeed_1: StatusBarSprite = null
let Enemy3: Sprite = null
let EnemyHP_1: StatusBarSprite = null
let EnemySpeed_2: StatusBarSprite = null
let Enemy1: Sprite = null
let EnemySpeed_3: StatusBarSprite = null
let HeroInformation: string[] = []
let BOSSHP_1: StatusBarSprite = null
let HEROspeed: StatusBarSprite = null
let Hero: Sprite = null
let LastDirection = 0
let RecoverValue = 0
let SuperState = ""
let CurrentEnemy = 0
let FireRistent = 0
let CurrentWeapon = ""
let TouchWeapon = ""
let Weapons = 0
let Damage = 0
let SPvalue = 0
let HPvalue = 0
let Level = 0
let Battle = 0
let Scene = 0
Scene = 0
if (Scene == 0) {
    Scene1F()
    TittleScene()
}
Battle = 0
Level = 1
HPvalue = 100
SPvalue = 10
Damage = 10
Weapons = 0
TouchWeapon = ""
CurrentWeapon = "赤拳"
FireRistent = 0
CurrentEnemy = 0
SuperState = "無"
RecoverValue = 60
let TEST = sprites.create(img`
    11111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111bfffff111111111111111111
    111111111111111111111111111111111eefffffffd1111111111111111
    11111111111111111111111111111111beffffc2eff1111111111111111
    1111111111111111111111111111111ffffffeeffffc111111111111111
    111111111111111111111111111111fffeecfeffefeff11111111111111
    11111111111111111111111111111dfffbbefffefefffd1111111111111
    111111111111111111111111111111feeeeeefffffffffd111111111111
    111111111111111111111111111111beedfeeefffffffffd11111111111
    1111111111111111111111111111111fcc7bbbefffeeffffd1111111111
    11111111111111111111111111111111ceffebffffcfffffc1111111111
    111111111111111111111111111111111cceffffeefefffcf1111111111
    1111111111111111111111111111111111bffeeeffefefeccb111111111
    11111111111111111111111111111111111febdeceefefcccc111111111
    1111111111111111111111111111111111deebbeefffefccccc1111ffb1
    1111111111111111111111111111111111feeeeeefffcccccccc11eeef1
    1111111111111111111111111111111111edbeeecffcfcccccccddeffb1
    1111111111111111111111111111111111eeebfccfffccccccceffeffd1
    11111111111111111111111111111111ddeeeeee4efffcccceeefebbd11
    11111111111111111111111111111111bbbeecffeef2eeefffffec11111
    11111111111111111111111111111111bdbeeffeee22eeeeeeefffff111
    1111111111111111111111111111111ddbcecfffe2eeee222eeffffcc11
    1111111111111111111111111111111ccdc4efcffffee22efffccccccf1
    1111111111111111111111111111decbdbbeeffcccffffffcccccccccfd
    1111111111111111111111111bebbbcbb11ccffccccccffffcccccccccb
    1111111111111111111111dccfeb1111111ecffcccbcccfccffcccfcc11
    1111111111111111111bbbcdee111111111cfccfcbbbbccfcccffcccc11
    111111111111111dbcbdddd11111111111cccccffcbbbccffcccccccc11
    111111111111bbcbdd1111111111111111ccccfffccbccccfccccddcc11
    111111111bbbbd11111111111111111111ccccffffcccccccfccb111111
    11111bbbddd11111111111111111111111fffffebbfcccccccfb1111111
    11bbbd1111111111111111111111111111ffffe1111fcccccccd1111111
    1bdddd11111111111111111111111111bffffc1111111bccccfd1111111
    111111111111111111111111111111111cccc111111111dcfffd1111111
    111111111111111111111111111111111111111111111111ceff1111111
    1111111111111111111111111111111111111111111111111ce2f111111
    11111111111111111111111111111111111111111111111111fee111111
    11111111111111111111111111111111111111111111111111b2e111111
    `, SpriteKind.Enemy)
TEST.setPosition(0, 0)
game.onUpdate(function () {
    Moving = controller.up.isPressed() || controller.left.isPressed() || (controller.right.isPressed() || controller.down.isPressed())
    if (!(Moving)) {
        animation.stopAnimation(animation.AnimationTypes.MovementAnimation, Hero)
    }
})
forever(function () {
    music.play(music.createSong(hex`0078000408020405001c000f0a006400f4010a00000400000000000000000000000000000000023c0000000400012408000c00011d0c001000012410001400012218001c00011b1c002000011d20002400011e24002800011d28002c00011b2c003000011907001c00020a006400f4016400000400000000000000000000000000000000033c0000000400012408000c00011d0c001000012410001400012218001c00011b1c002000011d20002400011e24002800011d28002c00011b2c003000011908001c000e050046006603320000040a002d00000064001400013200020100023c0000000400012408000c00011d0c001000012410001400012218001c00011b1c002000011d20002400011e24002800011d28002c00011b2c003000011909010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80033000000010002000a0800090002000a1000110002000a18001900010a20002100010a28002900010a30003100010a38003900010a`), music.PlaybackMode.UntilDone)
    music.play(music.createSong(hex`0078000408020405001c000f0a006400f4010a0000040000000000000000000000000000000002420000000400011d08000c0001271000140001241400180001221c002000012020002400012228002c0001242c003000012530003400012434003800012238003c00012407001c00020a006400f401640000040000000000000000000000000000000003420000000400011d08000c0001271000140001241400180001221c002000012020002400012228002c0001242c003000012530003400012434003800012238003c00012408001c000e050046006603320000040a002d0000006400140001320002010002420000000400011d08000c0001271000140001241400180001221c002000012020002400012228002c0001242c003000012530003400012434003800012238003c00012409010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800300000000100010a08000900010a10001100010a18001900010a20002100010a28002900010a30003100010a38003900010a`), music.PlaybackMode.UntilDone)
})
game.onUpdateInterval(100, function () {
    if (Scene == 0) {
        if (controller.A.isPressed()) {
            Scene = 1
        }
    }
    if (Scene == 1) {
        if (Battle == 0) {
            if (Hero.overlapsWith(treasure1)) {
                sprites.destroy(treasure1, effects.none, 100)
                TouchWeapon = "長劍"
                game.splash("獲得長劍")
                game.showLongText("請問要裝備還是丟棄", DialogLayout.Bottom)
                blockMenu.showMenu(["裝備", "丟棄"], MenuStyle.List, MenuLocation.BottomHalf)
            }
            if (Hero.overlapsWith(treasure2)) {
                sprites.destroy(treasure2, effects.none, 100)
                TouchWeapon = "玄鐵劍"
                game.splash("獲得玄鐵劍")
                game.showLongText("請問要裝備還是丟棄", DialogLayout.Bottom)
                blockMenu.showMenu(["裝備", "丟棄"], MenuStyle.List, MenuLocation.BottomHalf)
            }
            if (Hero.overlapsWith(treasure3)) {
                sprites.destroy(treasure3, effects.none, 100)
                game.splash("獲得地心火芝")
                game.showLongText("請問要服用還是丟棄", DialogLayout.Bottom)
                blockMenu.showMenu(["服用", "丟棄"], MenuStyle.List, MenuLocation.BottomHalf)
            }
        }
        if (Hero.overlapsWith(Enemy1)) {
            Battle = 1
            CurrentEnemy = 1
            controller.moveSprite(Hero, 0, 0)
            AssessBattle1()
        }
        if (Hero.overlapsWith(Enemy2)) {
            Battle = 1
            CurrentEnemy = 2
            controller.moveSprite(Hero, 0, 0)
            AssessBattle2()
        }
        if (Hero.overlapsWith(Enemy3)) {
            Battle = 1
            CurrentEnemy = 3
            controller.moveSprite(Hero, 0, 0)
            AssessBattle3()
        }
        if (Hero.overlapsWith(BOSS1)) {
            Battle = 1
            CurrentEnemy = 4
            controller.moveSprite(Hero, 0, 0)
            AssessBattle4()
        }
    }
    if (Battle == 1) {
        if (HP.value <= 0) {
            game.gameOver(false)
        }
        if (CurrentEnemy == 1) {
            if (HEROspeed.value >= 100) {
                timer.throttle("ChooseAction", 2000, function () {
                    blockMenu.showMenu(["攻擊", "治癒"], MenuStyle.List, MenuLocation.BottomHalf)
                })
            }
            if (EnemyHP_1.value > 0) {
                HEROspeed.setStatusBarFlag(StatusBarFlag.SmoothTransition, false)
                HEROspeed.value += 5
                EnemySpeed_1.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
                EnemySpeed_1.value += 1
                if (EnemySpeed_1.value == 100) {
                    timer.throttle("EnemyAction1", 10000, function () {
                        Enemy1.setPosition(140, 135)
                        HP.value += -30
                        Hero.setPosition(200, 135)
                        animation.runImageAnimation(
                        Enemy1,
                        [img`
                            . . . . c c c c c c c . . . . . 
                            . . . c 6 7 7 7 7 7 6 c . . . . 
                            . . c 6 7 c 6 6 6 6 c 7 c . . . 
                            . . c 7 7 6 f 6 6 f 6 7 6 c . . 
                            . . c 7 7 7 7 7 7 7 7 7 7 c . . 
                            . . f 7 7 7 6 1 f f 1 8 7 f . . 
                            . . f 7 7 7 f 1 f f 1 f 6 f . . 
                            . . f 6 7 7 f 2 2 2 2 f f . . . 
                            . . c f 6 7 7 2 2 2 2 f c c . . 
                            . c 7 7 c c 7 7 7 7 7 7 7 7 c . 
                            c 7 7 7 6 c f 7 7 7 7 1 1 1 7 c 
                            c c 6 6 6 c c f 6 7 1 1 1 1 1 f 
                            . . c 6 6 6 c 6 6 1 1 1 1 1 1 f 
                            . . c 6 6 6 6 6 6 1 1 1 1 1 6 f 
                            . . . c 6 6 6 6 1 1 1 1 1 6 f . 
                            . . . . c c c c c c c c f f . . 
                            `,img`
                            . . . c c c c c c c . . . . . . 
                            . . c 7 f f 6 6 f f c . . . . . 
                            . c 6 7 6 6 6 6 6 6 7 c . . . . 
                            . c 7 7 7 7 7 7 7 7 7 7 c . . . 
                            . c 7 7 7 6 1 f f 1 8 7 c . . . 
                            . f 7 7 7 f 1 f f 1 f 6 f . . . 
                            . f 7 7 7 f 2 2 2 2 f 6 f . . . 
                            . f 6 7 7 f 2 2 2 2 f 6 c c . . 
                            . . c f 7 7 2 2 2 2 7 7 7 7 c . 
                            . c 7 7 c c 7 7 7 7 7 1 1 1 7 c 
                            c 7 7 7 6 c f 7 7 7 1 1 1 1 1 f 
                            c c 6 6 6 c c f 6 1 1 1 1 1 1 f 
                            . . c 6 6 6 c 6 6 1 1 1 1 1 6 f 
                            . . c 6 6 6 6 6 6 1 1 1 1 1 6 f 
                            . . . c 6 6 6 6 6 1 1 1 1 6 f . 
                            . . . . c c c c c c c c f f . . 
                            `,img`
                            . . . c c c c c c c . . . . . . 
                            . . c 7 f f 6 6 f f c . . . . . 
                            . c 6 7 6 6 6 6 6 6 7 c . . . . 
                            . c 7 7 7 7 7 7 7 7 7 7 c . . . 
                            . c 7 7 7 6 1 f f 1 8 7 c . . . 
                            . f 7 7 7 f 1 f f 1 f 6 f . . . 
                            . f 7 7 7 f 2 2 2 2 f 6 f . . . 
                            . f 6 7 7 f 2 2 2 2 f 6 c c . . 
                            . . c f 7 7 2 2 2 2 7 7 7 7 c . 
                            . c 7 7 c c 7 7 7 7 7 1 1 1 7 c 
                            c 7 7 7 6 c f 7 7 7 1 1 1 1 1 f 
                            c c 6 6 6 c c f 6 1 1 1 1 1 1 f 
                            . . c 6 6 6 c 6 6 1 1 1 1 1 6 f 
                            . . c 6 6 6 6 6 6 1 1 1 1 1 6 f 
                            . . . c 6 6 6 6 6 1 1 1 1 6 f . 
                            . . . . c c c c c c c c f f . . 
                            `,img`
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            c c c c c . . . . . . . . . . . 
                            c 6 7 7 7 c c . . . . . . . . . 
                            . c c 7 7 7 c c . . . . . . . . 
                            . . . c 7 7 6 c . . . . . . . . 
                            . . . c 6 6 6 c . . . . . . . . 
                            . . c c 6 6 6 c c c c c c . . . 
                            . c 6 6 6 c c 6 7 7 7 7 6 c . . 
                            c c 6 6 6 c 7 7 7 7 7 7 7 7 c . 
                            c 6 6 6 c 6 7 7 7 7 7 7 7 7 6 c 
                            c 6 6 6 c 7 7 7 c 6 6 6 6 c 7 c 
                            c 6 6 6 f 7 7 7 c c 6 6 c c 7 f 
                            c 6 6 6 f 7 7 7 6 f 6 6 f 6 7 f 
                            . c c 6 6 f 6 7 c 1 f f c 1 c . 
                            . . . c c c c c c c c c c c c . 
                            `,img`
                            c c c c c . . . . . . . . . . . 
                            c 6 7 7 7 c c . . . . . . . . . 
                            . c c 7 7 7 c c . . . . . . . . 
                            . . . c 7 7 6 c . . . . . . . . 
                            . . . c 6 6 6 c . . . . . . . . 
                            . . c c 6 6 6 c . . . . . . . . 
                            . c c 6 6 6 c c c c c c c . . . 
                            . c 6 6 6 c c 6 7 7 7 7 6 c . . 
                            c c 6 6 6 c 7 7 7 7 7 7 7 7 c . 
                            c 6 6 6 c 6 7 7 7 7 7 7 7 7 6 c 
                            c 6 6 6 c 7 7 7 c 6 6 6 6 c 7 c 
                            c 6 6 6 f 7 7 7 c c 6 6 c c 7 f 
                            c 6 6 6 f 7 7 7 6 f 6 6 f 6 7 f 
                            . c 6 6 f 6 7 7 7 7 7 7 7 7 f . 
                            . c c 6 6 f 6 7 c 1 f f c 1 c . 
                            . . . c c c c c c c c c c c c . 
                            `,img`
                            c c c c c . . . . . . . . . . . 
                            c 6 7 7 7 c c . . . . . . . . . 
                            . c c 7 7 7 c c . . . . . . . . 
                            . . . c 7 7 6 c . . . . . . . . 
                            . . . c 6 6 6 c . . . . . . . . 
                            . . c c 6 6 6 c . . . . . . . . 
                            . c c 6 6 6 c c c c c c c . . . 
                            . c 6 6 6 c c 6 7 7 7 7 6 c . . 
                            c c 6 6 6 c 7 7 7 7 7 7 7 7 c . 
                            c 6 6 6 c 6 7 7 7 7 7 7 7 7 6 c 
                            c 6 6 6 c 7 7 7 c 6 6 6 6 c 7 c 
                            c 6 6 6 f 7 7 7 c c 6 6 c c 7 f 
                            c 6 6 6 f 7 7 7 6 f 6 6 f 6 7 f 
                            . c 6 6 f 6 7 7 7 7 7 7 7 7 f . 
                            . c c 6 6 f 6 7 c 1 f f c 1 c . 
                            . . . c c c c c c c c c c c c . 
                            `],
                        800,
                        true
                        )
                        animation.runImageAnimation(
                        Hero,
                        [img`
                            ........................
                            ........................
                            ........................
                            ........................
                            ........................
                            ........................
                            ........................
                            ..................ccc...
                            .................cddc...
                            ................cddc....
                            ..............ccddc.....
                            .............ecddcff....
                            ............edcccf2eff..
                            ..........ffeddeefe2e2f.
                            .........f5244ed4ef2e22f
                            .........f5e4edd4ef2e2ff
                            ........ff4224dffef2efef
                            ........ff4224d1bffefeef
                            ........ff422e44ef2efeef
                            .........f422eed4f2feeef
                            ..........ffffe44f2feef.
                            .............feeefefeff.
                            ..............feffffff..
                            ...............fff......
                            `,img`
                            ........................
                            ..............fff.......
                            .............f2fffff....
                            ...........ff22eeeeeff..
                            ..........ff222eeeeeeff.
                            ..........feeeefffeeeef.
                            .........fe2222eeefffff.
                            .........f2efffff222efff
                            ..cc.....fffeeefffffffff
                            ..cdcc...fee44fbbe44efef
                            ..ccddcc..feddfbb4d4eef.
                            ....cdddceefddddd4eeef..
                            .....ccdcddee2222222f...
                            ......cccdd44e544444f...
                            .........eeeeffffffff...
                            .............ff...fff...
                            ........................
                            ........................
                            ........................
                            ........................
                            ........................
                            ........................
                            ........................
                            ........................
                            `],
                        800,
                        true
                        )
                        music.play(music.createSoundEffect(WaveShape.Noise, 3300, 1400, 255, 0, 400, SoundExpressionEffect.Tremolo, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
                        scene.cameraShake(4, 1000)
                        timer.after(800, function () {
                            EnemySpeed_1.value = 0
                            Enemy1.setPosition(100, 135)
                            Hero.setPosition(180, 140)
                            animation.runImageAnimation(
                            Enemy1,
                            [img`
                                . . . . . . c c c c c c . . . . 
                                . . . . . c 6 7 7 7 7 6 c . . . 
                                . . . . c 7 7 7 7 7 7 7 7 c . . 
                                . . . c 6 7 7 7 7 7 7 7 7 6 c . 
                                . . . c 7 7 7 c 6 6 6 6 c 7 c . 
                                . . . f 7 7 7 6 f 6 6 f 6 7 f . 
                                . . . f 7 7 7 7 7 7 7 7 7 7 f . 
                                . . c f 6 7 7 c 6 7 7 7 7 f . . 
                                . c 7 7 f 6 7 7 c c c c f . . . 
                                c 7 7 7 7 f c 6 7 7 7 2 7 c . . 
                                c c 6 7 7 6 c f c 7 7 2 7 7 c . 
                                . . c 6 6 6 c c f 6 7 1 1 1 1 c 
                                . . f 6 6 6 6 c 6 6 1 1 1 1 1 f 
                                . . f c 6 6 6 6 6 1 1 1 1 1 6 f 
                                . . . f 6 6 6 1 1 1 1 1 1 6 f . 
                                . . . . f c c c c c c c c c . . 
                                `,img`
                                . . . . . . . c c c c c c . . . 
                                . . . . . . c 6 7 7 7 7 6 c . . 
                                . . . . . c 7 7 7 7 7 7 7 7 c . 
                                . . . . c 6 7 7 7 7 7 7 7 7 6 c 
                                . . . . c 7 7 7 c 6 6 6 6 c 7 c 
                                . . . . f 7 7 7 6 f 6 6 f 6 7 f 
                                . . . . f 7 7 7 7 7 7 7 7 7 7 f 
                                . . . . f 6 7 7 c 6 7 7 7 7 f . 
                                . . c c c f 6 7 7 c c c c f . . 
                                . c 7 7 7 c c f 7 7 7 2 6 c . . 
                                c 7 7 7 7 6 f c 7 7 2 7 7 6 c . 
                                c c c 6 6 6 c 6 6 7 1 1 1 1 c . 
                                . . c 6 6 6 6 6 6 1 1 1 1 1 c . 
                                . . c 6 6 6 6 6 1 1 1 1 1 6 c . 
                                . . c c 6 6 7 1 1 1 1 1 6 c . . 
                                . . . c c c c c c c c c c . . . 
                                `],
                            350,
                            true
                            )
                            animation.runImageAnimation(
                            Hero,
                            [img`
                                ........................
                                ..............ffffff....
                                .............f2feeeeff..
                                ............f222feeeeff.
                                .......cc...feeeeffeeef.
                                .......cdc.fe2222eeffff.
                                .......cddcf2effff222ef.
                                ........cddcffeeefffffff
                                .........cddce44fbe44eff
                                ..........cdceddf14d4eef
                                ..........cccdeddd4eeef.
                                ...........edd4e44eeff..
                                ............ee442222f...
                                .............f2e2222f...
                                .............f554444f...
                                ..............ffffff....
                                ................fff.....
                                ........................
                                ........................
                                ........................
                                ........................
                                ........................
                                ........................
                                ........................
                                `,img`
                                ........................
                                ..............fff.......
                                .............f2fffff....
                                ...........ff22eeeeeff..
                                ..........ff222eeeeeeff.
                                ..........feeeefffeeeef.
                                .........fe2222eeefffff.
                                .........f2efffff222efff
                                ..cc.....fffeeefffffffff
                                ..cdcc...fee44fbbe44efef
                                ..ccddcc..feddfbb4d4eef.
                                ....cdddceefddddd4eeef..
                                .....ccdcddee2222222f...
                                ......cccdd44e544444f...
                                .........eeeeffffffff...
                                .............ff...fff...
                                ........................
                                ........................
                                ........................
                                ........................
                                ........................
                                ........................
                                ........................
                                ........................
                                `],
                            350,
                            true
                            )
                        })
                    })
                }
            }
            if (EnemyHP_1.value <= 0) {
                controller.moveSprite(Hero, 100, 100)
                Battle = 0
                sprites.destroy(Enemy1, effects.fire, 500)
                timer.after(1100, function () {
                    DestoryStatue()
                    sprites.destroy(EnemyHP_1, effects.none, 100)
                    sprites.destroy(EnemySpeed_1, effects.none, 100)
                    tiles.setCurrentTilemap(tilemap`層級1`)
                    scaling.scaleToPercent(Hero, 100, ScaleDirection.Uniformly, ScaleAnchor.Middle)
                    tiles.placeOnTile(Hero, tiles.getTileLocation(4, 8))
                    scene.cameraFollowSprite(Hero)
                    Walk()
                    EXP += 100
                    game.splash("EXP +100")
                    if (EXP >= 100) {
                        Level = 2
                        HPvalue = 150
                        game.splash("升級! 1 to 2", "HP 100 to 150")
                    }
                })
            }
        }
        if (CurrentEnemy == 2) {
            if (HEROspeed.value >= 100) {
                timer.throttle("ChooseAction", 2000, function () {
                    blockMenu.showMenu(["攻擊", "治癒"], MenuStyle.List, MenuLocation.BottomHalf)
                })
            }
            if (EnemyHP_2.value > 0) {
                HEROspeed.setStatusBarFlag(StatusBarFlag.SmoothTransition, false)
                HEROspeed.value += 5
                EnemySpeed_2.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
                EnemySpeed_2.value += 3
                if (EnemySpeed_2.value == 100) {
                    timer.throttle("EnemyAction2", 3333, function () {
                        Enemy2.setPosition(140, 135)
                        HP.value += -50
                        Hero.setPosition(200, 135)
                        animation.runImageAnimation(
                        Enemy2,
                        [img`
                            . . . . c c c c c c c . . . . . 
                            . . . c 6 5 5 5 5 5 6 c . . . . 
                            . . c 6 5 c 6 6 6 6 c 5 c . . . 
                            . . c 5 5 6 f 6 6 f 6 5 6 c . . 
                            . . c 5 5 5 5 5 5 5 5 5 5 c . . 
                            . . f 5 5 5 6 1 f f 1 8 5 f . . 
                            . . f 5 5 5 f 1 f f 1 f 6 f . . 
                            . . f 6 5 5 f 2 2 2 2 f f . . . 
                            . . c f 6 5 5 2 2 2 2 f c c . . 
                            . c 5 5 c c 5 5 5 5 5 5 5 5 c . 
                            c 5 5 5 6 c f 5 5 5 5 1 1 1 5 c 
                            c c 6 6 6 c c f 6 5 1 1 1 1 1 f 
                            . . c 6 6 6 c 6 6 1 1 1 1 1 1 f 
                            . . c 6 6 6 6 6 6 1 1 1 1 1 6 f 
                            . . . c 6 6 6 6 1 1 1 1 1 6 f . 
                            . . . . c c c c c c c c f f . . 
                            `,img`
                            . . . c c c c c c c . . . . . . 
                            . . c 5 f f 6 6 f f c . . . . . 
                            . c 6 5 6 6 6 6 6 6 5 c . . . . 
                            . c 5 5 5 5 5 5 5 5 5 5 c . . . 
                            . c 5 5 5 6 1 f f 1 8 5 c . . . 
                            . f 5 5 5 f 1 f f 1 f 6 f . . . 
                            . f 5 5 5 f 2 2 2 2 f 6 f . . . 
                            . f 6 5 5 f 2 2 2 2 f 6 c c . . 
                            . . c f 5 5 2 2 2 2 5 5 5 5 c . 
                            . c 5 5 c c 5 5 5 5 5 1 1 1 5 c 
                            c 5 5 5 6 c f 5 5 5 1 1 1 1 1 f 
                            c c 6 6 6 c c f 6 1 1 1 1 1 1 f 
                            . . c 6 6 6 c 6 6 1 1 1 1 1 6 f 
                            . . c 6 6 6 6 6 6 1 1 1 1 1 6 f 
                            . . . c 6 6 6 6 6 1 1 1 1 6 f . 
                            . . . . c c c c c c c c f f . . 
                            `,img`
                            . . . c c c c c c c . . . . . . 
                            . . c 5 f f 6 6 f f c . . . . . 
                            . c 6 5 6 6 6 6 6 6 5 c . . . . 
                            . c 5 5 5 5 5 5 5 5 5 5 c . . . 
                            . c 5 5 5 6 1 f f 1 8 5 c . . . 
                            . f 5 5 5 f 1 f f 1 f 6 f . . . 
                            . f 5 5 5 f 2 2 2 2 f 6 f . . . 
                            . f 6 5 5 f 2 2 2 2 f 6 c c . . 
                            . . c f 5 5 2 2 2 2 5 5 5 5 c . 
                            . c 5 5 c c 5 5 5 5 5 1 1 1 5 c 
                            c 5 5 5 6 c f 5 5 5 1 1 1 1 1 f 
                            c c 6 6 6 c c f 6 1 1 1 1 1 1 f 
                            . . c 6 6 6 c 6 6 1 1 1 1 1 6 f 
                            . . c 6 6 6 6 6 6 1 1 1 1 1 6 f 
                            . . . c 6 6 6 6 6 1 1 1 1 6 f . 
                            . . . . c c c c c c c c f f . . 
                            `,img`
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            c c c c c . . . . . . . . . . . 
                            c 6 5 5 5 c c . . . . . . . . . 
                            . c c 5 5 5 c c . . . . . . . . 
                            . . . c 5 5 6 c . . . . . . . . 
                            . . . c 6 6 6 c . . . . . . . . 
                            . . c c 6 6 6 c c c c c c . . . 
                            . c 6 6 6 c c 6 5 5 5 5 6 c . . 
                            c c 6 6 6 c 5 5 5 5 5 5 5 5 c . 
                            c 6 6 6 c 6 5 5 5 5 5 5 5 5 6 c 
                            c 6 6 6 c 5 5 5 c 6 6 6 6 c 5 c 
                            c 6 6 6 f 5 5 5 c c 6 6 c c 5 f 
                            c 6 6 6 f 5 5 5 6 f 6 6 f 6 5 f 
                            . c c 6 6 f 6 5 c 1 f f c 1 c . 
                            . . . c c c c c c c c c c c c . 
                            `,img`
                            c c c c c . . . . . . . . . . . 
                            c 6 5 5 5 c c . . . . . . . . . 
                            . c c 5 5 5 c c . . . . . . . . 
                            . . . c 5 5 6 c . . . . . . . . 
                            . . . c 6 6 6 c . . . . . . . . 
                            . . c c 6 6 6 c . . . . . . . . 
                            . c c 6 6 6 c c c c c c c . . . 
                            . c 6 6 6 c c 6 5 5 5 5 6 c . . 
                            c c 6 6 6 c 5 5 5 5 5 5 5 5 c . 
                            c 6 6 6 c 6 5 5 5 5 5 5 5 5 6 c 
                            c 6 6 6 c 5 5 5 c 6 6 6 6 c 5 c 
                            c 6 6 6 f 5 5 5 c c 6 6 c c 5 f 
                            c 6 6 6 f 5 5 5 6 f 6 6 f 6 5 f 
                            . c 6 6 f 6 5 5 5 5 5 5 5 5 f . 
                            . c c 6 6 f 6 5 c 1 f f c 1 c . 
                            . . . c c c c c c c c c c c c . 
                            `,img`
                            c c c c c . . . . . . . . . . . 
                            c 6 5 5 5 c c . . . . . . . . . 
                            . c c 5 5 5 c c . . . . . . . . 
                            . . . c 5 5 6 c . . . . . . . . 
                            . . . c 6 6 6 c . . . . . . . . 
                            . . c c 6 6 6 c . . . . . . . . 
                            . c c 6 6 6 c c c c c c c . . . 
                            . c 6 6 6 c c 6 5 5 5 5 6 c . . 
                            c c 6 6 6 c 5 5 5 5 5 5 5 5 c . 
                            c 6 6 6 c 6 5 5 5 5 5 5 5 5 6 c 
                            c 6 6 6 c 5 5 5 c 6 6 6 6 c 5 c 
                            c 6 6 6 f 5 5 5 c c 6 6 c c 5 f 
                            c 6 6 6 f 5 5 5 6 f 6 6 f 6 5 f 
                            . c 6 6 f 6 5 5 5 5 5 5 5 5 f . 
                            . c c 6 6 f 6 5 c 1 f f c 1 c . 
                            . . . c c c c c c c c c c c c . 
                            `],
                        800,
                        true
                        )
                        animation.runImageAnimation(
                        Hero,
                        [img`
                            ........................
                            ........................
                            ........................
                            ........................
                            ........................
                            ........................
                            ........................
                            ..................ccc...
                            .................cddc...
                            ................cddc....
                            ..............ccddc.....
                            .............ecddcff....
                            ............edcccf2eff..
                            ..........ffeddeefe2e2f.
                            .........f5244ed4ef2e22f
                            .........f5e4edd4ef2e2ff
                            ........ff4224dffef2efef
                            ........ff4224d1bffefeef
                            ........ff422e44ef2efeef
                            .........f422eed4f2feeef
                            ..........ffffe44f2feef.
                            .............feeefefeff.
                            ..............feffffff..
                            ...............fff......
                            `,img`
                            ........................
                            ..............fff.......
                            .............f2fffff....
                            ...........ff22eeeeeff..
                            ..........ff222eeeeeeff.
                            ..........feeeefffeeeef.
                            .........fe2222eeefffff.
                            .........f2efffff222efff
                            ..cc.....fffeeefffffffff
                            ..cdcc...fee44fbbe44efef
                            ..ccddcc..feddfbb4d4eef.
                            ....cdddceefddddd4eeef..
                            .....ccdcddee2222222f...
                            ......cccdd44e544444f...
                            .........eeeeffffffff...
                            .............ff...fff...
                            ........................
                            ........................
                            ........................
                            ........................
                            ........................
                            ........................
                            ........................
                            ........................
                            `],
                        800,
                        true
                        )
                        music.play(music.createSoundEffect(WaveShape.Noise, 3300, 1400, 255, 0, 400, SoundExpressionEffect.Tremolo, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
                        scene.cameraShake(4, 1000)
                        timer.after(800, function () {
                            EnemySpeed_2.value = 0
                            Enemy2.setPosition(100, 135)
                            Hero.setPosition(180, 140)
                            animation.runImageAnimation(
                            Enemy2,
                            [img`
                                . . . . . . c c c c c c . . . . 
                                . . . . . c 6 5 5 5 5 6 c . . . 
                                . . . . c 5 5 5 5 5 5 5 5 c . . 
                                . . . c 6 5 5 5 5 5 5 5 5 6 c . 
                                . . . c 5 5 5 c 6 6 6 6 c 5 c . 
                                . . . f 5 5 5 6 f 6 6 f 6 5 f . 
                                . . . f 5 5 5 5 5 5 5 5 5 5 f . 
                                . . c f 6 5 5 c 6 5 5 5 5 f . . 
                                . c 5 5 f 6 5 5 c c c c f . . . 
                                c 5 5 5 5 f c 6 5 5 5 2 5 c . . 
                                c c 6 5 5 6 c f c 5 5 2 5 5 c . 
                                . . c 6 6 6 c c f 6 5 1 1 1 1 c 
                                . . f 6 6 6 6 c 6 6 1 1 1 1 1 f 
                                . . f c 6 6 6 6 6 1 1 1 1 1 6 f 
                                . . . f 6 6 6 1 1 1 1 1 1 6 f . 
                                . . . . f c c c c c c c c c . . 
                                `,img`
                                . . . . . . . c c c c c c . . . 
                                . . . . . . c 6 5 5 5 5 6 c . . 
                                . . . . . c 5 5 5 5 5 5 5 5 c . 
                                . . . . c 6 5 5 5 5 5 5 5 5 6 c 
                                . . . . c 5 5 5 c 6 6 6 6 c 5 c 
                                . . . . f 5 5 5 6 f 6 6 f 6 5 f 
                                . . . . f 5 5 5 5 5 5 5 5 5 5 f 
                                . . . . f 6 5 5 c 6 5 5 5 5 f . 
                                . . c c c f 6 5 5 c c c c f . . 
                                . c 5 5 5 c c f 5 5 5 2 6 c . . 
                                c 5 5 5 5 6 f c 5 5 2 5 5 6 c . 
                                c c c 6 6 6 c 6 6 5 1 1 1 1 c . 
                                . . c 6 6 6 6 6 6 1 1 1 1 1 c . 
                                . . c 6 6 6 6 6 1 1 1 1 1 6 c . 
                                . . c c 6 6 5 1 1 1 1 1 6 c . . 
                                . . . c c c c c c c c c c . . . 
                                `],
                            350,
                            true
                            )
                            animation.runImageAnimation(
                            Hero,
                            [img`
                                ........................
                                ..............ffffff....
                                .............f2feeeeff..
                                ............f222feeeeff.
                                .......cc...feeeeffeeef.
                                .......cdc.fe2222eeffff.
                                .......cddcf2effff222ef.
                                ........cddcffeeefffffff
                                .........cddce44fbe44eff
                                ..........cdceddf14d4eef
                                ..........cccdeddd4eeef.
                                ...........edd4e44eeff..
                                ............ee442222f...
                                .............f2e2222f...
                                .............f554444f...
                                ..............ffffff....
                                ................fff.....
                                ........................
                                ........................
                                ........................
                                ........................
                                ........................
                                ........................
                                ........................
                                `,img`
                                ........................
                                ..............fff.......
                                .............f2fffff....
                                ...........ff22eeeeeff..
                                ..........ff222eeeeeeff.
                                ..........feeeefffeeeef.
                                .........fe2222eeefffff.
                                .........f2efffff222efff
                                ..cc.....fffeeefffffffff
                                ..cdcc...fee44fbbe44efef
                                ..ccddcc..feddfbb4d4eef.
                                ....cdddceefddddd4eeef..
                                .....ccdcddee2222222f...
                                ......cccdd44e544444f...
                                .........eeeeffffffff...
                                .............ff...fff...
                                ........................
                                ........................
                                ........................
                                ........................
                                ........................
                                ........................
                                ........................
                                ........................
                                `],
                            350,
                            true
                            )
                        })
                    })
                }
            }
            if (EnemyHP_2.value <= 0) {
                controller.moveSprite(Hero, 100, 100)
                Battle = 0
                sprites.destroy(Enemy2, effects.fire, 500)
                DestoryStatue()
                sprites.destroy(EnemyHP_2, effects.none, 100)
                sprites.destroy(EnemySpeed_2, effects.none, 100)
                timer.after(1100, function () {
                    tiles.setCurrentTilemap(tilemap`層級1`)
                    scaling.scaleToPercent(Hero, 100, ScaleDirection.Uniformly, ScaleAnchor.Middle)
                    tiles.placeOnTile(Hero, tiles.getTileLocation(6, 2))
                    scene.cameraFollowSprite(Hero)
                    Walk()
                    EXP += 100
                    game.splash("EXP +100")
                    if (EXP >= 200) {
                        game.splash("升級! 2 to 3", "傷害 +30")
                        Level = 3
                        Damage += 30
                    }
                })
            }
        }
        if (CurrentEnemy == 3) {
            if (HEROspeed.value >= 100) {
                timer.throttle("ChooseAction", 2000, function () {
                    blockMenu.showMenu(["攻擊", "治癒"], MenuStyle.List, MenuLocation.BottomHalf)
                })
            }
            if (EnemyHP_3.value > 0) {
                HEROspeed.setStatusBarFlag(StatusBarFlag.SmoothTransition, false)
                HEROspeed.value += 5
                EnemySpeed_3.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
                EnemySpeed_3.value += 3
                if (EnemySpeed_3.value == 100) {
                    timer.throttle("EnemyAction2", 3333, function () {
                        Enemy3.setPosition(140, 135)
                        HP.value += -50
                        Hero.setPosition(200, 135)
                        animation.runImageAnimation(
                        Enemy3,
                        [img`
                            ........................
                            ........................
                            ...........ccc..........
                            ...........cccc.........
                            .......ccc..ccccccc.....
                            .......cccccc555555cc...
                            ........ccb5555555555c..
                            .....cc..b555555555555c.
                            .....cccb555555ff155555c
                            ......cb55555555ff55d55c
                            ......b5555555555555555c
                            ...cc.b555dd5555bb13bbc.
                            ...cccd55ddddd555b3335c.
                            .....bdddddddddd55b335c.
                            ..cccdddddb55bbddd5555c.
                            ..cccdddddb555bbbbcccc..
                            ...ccddddddb5555cbcdc...
                            ccccbdddddd5cb55cbcc....
                            cddddddddd5555ccbbc.....
                            .cddddddbdd555bbbcc.....
                            ..ccdddbbbdd55cbcdc.....
                            ....ccbbcbddddccdddcc...
                            ......cccdd555dcccccc...
                            ........cccccccc........
                            `,img`
                            .........ccc............
                            .........cccccccc.......
                            ......cc..cc55555cc.....
                            ......cccc555555555c....
                            ......ccb55555555555c...
                            ...cc..b55555ff155555c..
                            ...cccb5555555ff55d55c..
                            ....ccb55555d55555555c..
                            .....b55555d5555d5555c..
                            ..cc.b555ddd55555bbbbc..
                            ..cccd55ddddd5555d555c..
                            ...ccdd5dbdddbbbd555c...
                            ....bdddb555bbbbbccc....
                            ..cccdddb555cbbbbbbc....
                            ...ccddddb555cbbbbbbc...
                            ....cdddddb555cbbbbbc...
                            ...ccddddddb55cbbbbbcc..
                            ..ccbddddd55bcbbbbbbcc..
                            ccdddddddd5555bbbbbbc...
                            cdddddddbdd555bbbbbc....
                            .ccddddbbbdd55cbbccc....
                            ...cccbbcbddddccdddcc...
                            ......cccdd555dcccccc...
                            ........cccccccc........
                            `,img`
                            ........ccc.............
                            ........cccccccc........
                            .....cc..cc55555cc......
                            .....cccc555555555c.....
                            .....ccb55555555555c....
                            ...cc.b5555bcc555555c...
                            ...ccb55555555c55d55c...
                            ....cb5555dd55555555c...
                            .....5555dd5555d5555c...
                            ..cc.555dd555555dbbbc...
                            ..ccc55ddd555555d555c...
                            ...ccd5dbdd5555d555c....
                            ....bdddb555bbbbbccc....
                            ..cccdddb555cbbbbbbbc...
                            ...ccddddb555cbbbbbbbc..
                            ....cdddddb555cbbbbbbc..
                            ...ccddddddb55cbbbbbbcc.
                            ...cbddddd55bcbbbbbbbcc.
                            ..cbdddddd5555bbbbbbbc..
                            .cddddddbdd555bbbbbbc...
                            cddddddbbbdd55cbbccc....
                            ccccccbbcbddddccdddcc...
                            ......cccdd555dcccccc...
                            ........cccccccc........
                            `,img`
                            ........................
                            ........................
                            ........................
                            ...........ccc..........
                            ...........cccc.........
                            .......ccc..ccccccc.....
                            .......cccccc555555cc...
                            ........ccb5555555555c..
                            .....cc..b555555555555c.
                            .....cccb55555bcc555555c
                            ......cb555555555c55d55c
                            ......b5555555555555555c
                            ...cc.b555dd5555bb1bbbc.
                            ....ccd55ddddd5bbbb335c.
                            ...ccbdddddddd5bbbb335c.
                            .ccccddddddddd55bbb335c.
                            cdcccdddddb55bb5bb3335c.
                            cddbddddddb555bb5b3335c.
                            cddddddddddb5555b53335c.
                            ccddddddbd55bb55c5555c..
                            .ccddddbbbdd55cccbccc...
                            ...ccbbbcbddddccdddc....
                            .....ccccdd555dccccc....
                            ........cccccccc........
                            `,img`
                            ........................
                            ........................
                            ........................
                            ...........ccc..........
                            ...........cccc.........
                            .......ccc..ccccccc.....
                            .......cccccc555555cc...
                            ........ccb5555555555c..
                            .....cc..b555555555555c.
                            .....cccb55555bcc555555c
                            ......cb555555555c55d55c
                            ......b5555555555555555c
                            ...cc.b555dd5555bb1bbbc.
                            ....ccd55ddddd5bbbb335c.
                            ...ccbdddddddd5bbbb335c.
                            .ccccddddddddd55bb3335c.
                            cdcccdddddb55bb55b3335c.
                            cddbddddddb555bb553335c.
                            cddddddddddb5555b5555c..
                            ccddddddbd55bb55cbccc...
                            .ccddddbbbdd55ccbbc.....
                            ...ccbbbcbddddccdddc....
                            .....ccccdd555dccccc....
                            ........cccccccc........
                            `,img`
                            ........................
                            ........................
                            ........................
                            ...........ccc..........
                            ...........cccc.........
                            .......ccc..ccccccc.....
                            .......cccccc555555cc...
                            ........ccb5555555555c..
                            .....cc..b555555555555c.
                            .....cccb55555bcc555555c
                            ......cb555555555c55d55c
                            ......b5555555555555555c
                            ...cc.b555dd5555bb1bbbc.
                            ....ccd55ddddd55bbb335c.
                            ...ccbddddddddd5bb3335c.
                            .ccccdddddddddd55b3335c.
                            cdcccdddddb55bbd553335c.
                            cddbddddddb555bb55555c..
                            cddddddddddb5555bbccc...
                            ccddddddbd55bb55cbc.....
                            .ccddddbbbdd55ccbdc.....
                            ...ccbbbcbddddccdddc....
                            .....ccccdd555dccccc....
                            ........cccccccc........
                            `],
                        800,
                        true
                        )
                        animation.runImageAnimation(
                        Hero,
                        [img`
                            ........................
                            ........................
                            ........................
                            ........................
                            ........................
                            ........................
                            ........................
                            ..................ccc...
                            .................cddc...
                            ................cddc....
                            ..............ccddc.....
                            .............ecddcff....
                            ............edcccf2eff..
                            ..........ffeddeefe2e2f.
                            .........f5244ed4ef2e22f
                            .........f5e4edd4ef2e2ff
                            ........ff4224dffef2efef
                            ........ff4224d1bffefeef
                            ........ff422e44ef2efeef
                            .........f422eed4f2feeef
                            ..........ffffe44f2feef.
                            .............feeefefeff.
                            ..............feffffff..
                            ...............fff......
                            `,img`
                            ........................
                            ..............fff.......
                            .............f2fffff....
                            ...........ff22eeeeeff..
                            ..........ff222eeeeeeff.
                            ..........feeeefffeeeef.
                            .........fe2222eeefffff.
                            .........f2efffff222efff
                            ..cc.....fffeeefffffffff
                            ..cdcc...fee44fbbe44efef
                            ..ccddcc..feddfbb4d4eef.
                            ....cdddceefddddd4eeef..
                            .....ccdcddee2222222f...
                            ......cccdd44e544444f...
                            .........eeeeffffffff...
                            .............ff...fff...
                            ........................
                            ........................
                            ........................
                            ........................
                            ........................
                            ........................
                            ........................
                            ........................
                            `],
                        800,
                        true
                        )
                        music.play(music.createSoundEffect(WaveShape.Noise, 3300, 1400, 255, 0, 400, SoundExpressionEffect.Tremolo, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
                        scene.cameraShake(4, 1000)
                        timer.after(800, function () {
                            EnemySpeed_3.value = 0
                            Enemy3.setPosition(100, 135)
                            Hero.setPosition(180, 140)
                            animation.runImageAnimation(
                            Enemy3,
                            [img`
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . c c c c . . . . 
                                . . . . . . c c 5 5 5 5 c c . . 
                                . . . . . c 5 5 5 5 5 5 5 5 c . 
                                . . . . c 5 5 5 f 1 5 5 5 5 5 c 
                                . . . c 5 5 5 5 f f 5 5 5 5 5 c 
                                . . . c 5 5 5 5 5 5 5 5 5 5 5 c 
                                . . c d 5 5 5 5 5 5 b 1 b b c c 
                                . . c d d d 5 5 5 5 5 3 3 3 5 c 
                                . . c d d d 5 5 5 5 5 5 5 5 b . 
                                . c c d d d d b 5 5 c b b c . . 
                                c d c d d d d b b 5 5 c b b c . 
                                c d d d d d d d d c c c c c c . 
                                . c d d d b 5 5 d c c c c . . . 
                                . . c c c b 5 5 b c c c c c . . 
                                . . . . c b 5 5 d c b b b c . . 
                                `,img`
                                . . . . . . . c c c c c . . . . 
                                . . . . . . c 5 5 5 5 5 c c . . 
                                . . . . . c 5 5 f 1 5 5 5 5 c . 
                                . . . . c 5 5 5 f f 5 5 5 5 5 c 
                                . . . c 5 5 5 5 5 5 5 5 5 5 5 c 
                                . . . c 5 5 5 5 5 5 b 1 b b c c 
                                . . c d 5 5 5 5 5 5 5 3 3 3 5 c 
                                . . c d d d 5 5 5 5 5 3 3 3 5 c 
                                . . c d d d 5 5 5 b 5 5 5 5 c . 
                                . . c d d d d b 5 5 c b b c . . 
                                c c c d d d d b b 5 5 c b b c . 
                                c d d d d d d d d c c c c c c . 
                                . c d d d b 5 5 b c c c . . . . 
                                . . c c c b b 5 5 d c . . . . . 
                                . . . . . c c c c c c c . . . . 
                                . . . . . . . c b b b c . . . . 
                                `,img`
                                . . . . . . . c c c c c . . . . 
                                . . . . . . c 5 5 5 5 5 c c . . 
                                . . . . . c 5 5 f 1 5 5 5 5 c . 
                                . . . . c 5 5 5 f f 5 5 5 5 5 c 
                                . . . c 5 5 5 5 5 5 5 5 5 5 5 c 
                                . . . c 5 5 5 5 5 5 b 1 b b c c 
                                . . c d 5 5 5 5 5 5 5 3 3 3 5 c 
                                . . c d d d 5 5 5 5 5 5 5 5 5 c 
                                . . c d d d 5 5 5 b 5 5 5 5 c . 
                                . . c d d d d b 5 5 c b b c . . 
                                c c c d d d d b b 5 5 c b b c . 
                                c d d d d d d d d c c c c c c . 
                                . c c d d d b 5 5 b c c . . . . 
                                . . . c c c b b 5 5 d c . . . . 
                                . . . . . c c c c c c c . . . . 
                                . . . . . . . c b b b c . . . . 
                                `,img`
                                . . . . . . . c c c c c . . . . 
                                . . . . . . c 5 5 5 5 5 c c . . 
                                . . . . . c 5 5 f 1 5 5 5 5 c . 
                                . . . . c 5 5 5 f f 5 5 5 5 5 c 
                                . . . c 5 5 5 5 5 5 5 5 5 5 5 c 
                                . . . c 5 5 5 5 5 5 b 1 b b c c 
                                . . c d 5 5 5 5 5 5 5 3 3 3 5 c 
                                . . c d d d 5 5 5 5 5 5 5 5 5 c 
                                . . c d d d 5 5 5 b 5 5 5 5 c . 
                                . . c d d d d b 5 5 c b b c . . 
                                . c c d d d d b b 5 5 c b b c . 
                                c c d d d d d d b b c c c c c . 
                                c d d d d d 5 5 b 5 5 c c . . . 
                                c c c c c c b b 5 5 b c . . . . 
                                . . . . . . c c c c c c . . . . 
                                . . . . . . c b b b c . . . . . 
                                `,img`
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . c c c c . . . . 
                                . . . . . . c c 5 5 5 5 c c . . 
                                . . . . . c 5 5 5 5 5 5 5 5 c . 
                                . . . . c 5 5 5 f 1 5 5 5 5 5 c 
                                . . . c 5 5 5 5 f f 5 5 5 5 5 c 
                                . . . c 5 5 5 5 5 5 b 1 b b c c 
                                . . c d 5 5 5 5 5 5 b b 3 3 c c 
                                . . c d d d 5 5 5 5 5 3 3 3 5 c 
                                . . c d d d 5 5 5 5 5 5 5 5 b . 
                                . . c d d d d b 5 5 c b b c . . 
                                c c c d d d d b b 5 5 c b b c . 
                                c d d d d d d d d c c c c c c . 
                                c c d d d b 5 5 d c c c c . . . 
                                . . c c c b 5 5 b c c b c . . . 
                                . . . . . c b 5 5 d c c c . . . 
                                `,img`
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . c c c c . . . . 
                                . . . . . . c c 5 5 5 5 c c . . 
                                . . . . . c 5 5 5 5 5 5 5 5 c . 
                                . . . . c 5 5 5 f 1 5 5 5 5 5 c 
                                . . . c 5 5 5 5 f f 5 5 5 5 5 c 
                                . . . c 5 5 5 5 5 5 5 5 5 5 5 c 
                                . . c d 5 5 5 5 5 5 b 1 b b c c 
                                . . c d d d 5 5 5 5 5 3 3 3 5 c 
                                . . c d d d 5 5 5 5 5 5 5 5 b . 
                                . . c d d d d b 5 5 c b b c . . 
                                c c c d d d d b b 5 5 c b b c . 
                                c d d d d d d d d c c c c c c . 
                                . c c d d b 5 5 d c c c c . . . 
                                . . . c c b 5 5 c c c b b c . . 
                                . . . . . c 5 5 d c c c c c . . 
                                `],
                            350,
                            true
                            )
                            animation.runImageAnimation(
                            Hero,
                            [img`
                                ........................
                                ..............ffffff....
                                .............f2feeeeff..
                                ............f222feeeeff.
                                .......cc...feeeeffeeef.
                                .......cdc.fe2222eeffff.
                                .......cddcf2effff222ef.
                                ........cddcffeeefffffff
                                .........cddce44fbe44eff
                                ..........cdceddf14d4eef
                                ..........cccdeddd4eeef.
                                ...........edd4e44eeff..
                                ............ee442222f...
                                .............f2e2222f...
                                .............f554444f...
                                ..............ffffff....
                                ................fff.....
                                ........................
                                ........................
                                ........................
                                ........................
                                ........................
                                ........................
                                ........................
                                `,img`
                                ........................
                                ..............fff.......
                                .............f2fffff....
                                ...........ff22eeeeeff..
                                ..........ff222eeeeeeff.
                                ..........feeeefffeeeef.
                                .........fe2222eeefffff.
                                .........f2efffff222efff
                                ..cc.....fffeeefffffffff
                                ..cdcc...fee44fbbe44efef
                                ..ccddcc..feddfbb4d4eef.
                                ....cdddceefddddd4eeef..
                                .....ccdcddee2222222f...
                                ......cccdd44e544444f...
                                .........eeeeffffffff...
                                .............ff...fff...
                                ........................
                                ........................
                                ........................
                                ........................
                                ........................
                                ........................
                                ........................
                                ........................
                                `],
                            350,
                            true
                            )
                        })
                    })
                }
            }
            if (EnemyHP_3.value <= 0) {
                controller.moveSprite(Hero, 100, 100)
                Battle = 0
                sprites.destroy(Enemy3, effects.fire, 500)
                DestoryStatue()
                sprites.destroy(EnemyHP_3, effects.none, 100)
                sprites.destroy(EnemySpeed_3, effects.none, 100)
                timer.after(1100, function () {
                    tiles.setCurrentTilemap(tilemap`層級1`)
                    scaling.scaleToPercent(Hero, 100, ScaleDirection.Uniformly, ScaleAnchor.Middle)
                    tiles.placeOnTile(Hero, tiles.getTileLocation(12, 4))
                    scene.cameraFollowSprite(Hero)
                    Walk()
                    EXP += 100
                    game.splash("EXP +100")
                    if (EXP >= 300) {
                        game.splash("升級! 3 to 4", "法力 +20")
                        Level = 3
                        SPvalue += 20
                    }
                })
            }
        }
        if (CurrentEnemy == 4) {
            if (HEROspeed.value >= 100) {
                timer.throttle("ChooseAction", 2000, function () {
                    blockMenu.showMenu(["攻擊", "治癒"], MenuStyle.List, MenuLocation.BottomHalf)
                })
            }
            if (BOSSHP_1.value > 0) {
                HEROspeed.setStatusBarFlag(StatusBarFlag.SmoothTransition, false)
                HEROspeed.value += 5
                BOSSSpeed_1.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
                BOSSSpeed_1.value += 2
                if (BOSSSpeed_1.value == 100) {
                    timer.throttle("EnemyAction2", 5000, function () {
                        BOSS1.setPosition(140, 135)
                        HP.value += -100
                        Hero.setPosition(200, 135)
                        animation.runImageAnimation(
                        BOSS1,
                        [img`
                            ...........222..........
                            .......222555222........
                            ...2.22555555555222222..
                            ..22255555ffff55555222..
                            ..225555ff1111ff555552..
                            ..25555fb111111bf55522..
                            .22555fbd1111111f555522.
                            .25555fdd1111111df55552.
                            .25555fddd111111df555552
                            .25555fdddddd111df555552
                            225555fdddddd111df555552
                            225555fbddddddd1df557772
                            255555ffbbddbfd1df577777
                            2555555fcbbdcfddbf777777
                            2555555fffbddccffff75577
                            2555555ffffcfbbb1bcf5557
                            .55555ffffffffcd1b1f5552
                            .55ffffffffff55fdfdf5552
                            25555ffffff55555f5f55552
                            255555555555555555555552
                            255555555555555555555552
                            222555555555555555555522
                            ..222225555555552222222.
                            ......22222222222.......
                            `,img`
                            .........22222..........
                            ......22225552222.......
                            ......255555555522......
                            ..22222555555555522.....
                            ..2555555fffff5555522...
                            ..25555ffb1111ff555522..
                            ..2555fb1111111bf5555522
                            ..2555f111111111f5555552
                            .2255ffff1111111df555552
                            .255fb111c1dd111df555552
                            .255ffb1b1fdcf11bf555552
                            .2555ffbfbfb11111f555522
                            225555ffffcfdb1b1f55552.
                            2555555fcccfcfbfbf55552.
                            25555555ffffffffff55552.
                            225555555ffffff55555522.
                            .25555555ffffff5555552..
                            .2255f55fffffff5555552..
                            .2255fffffffff55555552..
                            .25555fffffff5555555522.
                            .2555555555555555555552.
                            .2222225555555555555552.
                            ......22222552222222522.
                            ..........2222......22..
                            `],
                        800,
                        true
                        )
                        animation.runImageAnimation(
                        Hero,
                        [img`
                            ........................
                            ........................
                            ........................
                            ........................
                            ........................
                            ........................
                            ........................
                            ..................ccc...
                            .................cddc...
                            ................cddc....
                            ..............ccddc.....
                            .............ecddcff....
                            ............edcccf2eff..
                            ..........ffeddeefe2e2f.
                            .........f5244ed4ef2e22f
                            .........f5e4edd4ef2e2ff
                            ........ff4224dffef2efef
                            ........ff4224d1bffefeef
                            ........ff422e44ef2efeef
                            .........f422eed4f2feeef
                            ..........ffffe44f2feef.
                            .............feeefefeff.
                            ..............feffffff..
                            ...............fff......
                            `,img`
                            ........................
                            ..............fff.......
                            .............f2fffff....
                            ...........ff22eeeeeff..
                            ..........ff222eeeeeeff.
                            ..........feeeefffeeeef.
                            .........fe2222eeefffff.
                            .........f2efffff222efff
                            ..cc.....fffeeefffffffff
                            ..cdcc...fee44fbbe44efef
                            ..ccddcc..feddfbb4d4eef.
                            ....cdddceefddddd4eeef..
                            .....ccdcddee2222222f...
                            ......cccdd44e544444f...
                            .........eeeeffffffff...
                            .............ff...fff...
                            ........................
                            ........................
                            ........................
                            ........................
                            ........................
                            ........................
                            ........................
                            ........................
                            `],
                        800,
                        true
                        )
                        music.play(music.createSoundEffect(WaveShape.Noise, 3300, 1400, 255, 0, 400, SoundExpressionEffect.Tremolo, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
                        scene.cameraShake(4, 1000)
                        timer.after(800, function () {
                            BOSSSpeed_1.value = 0
                            BOSS1.setPosition(100, 135)
                            Hero.setPosition(180, 140)
                            animation.runImageAnimation(
                            BOSS1,
                            [img`
                                ........22222...........
                                .......22555522.........
                                ......2255555522........
                                ....222555555552222.....
                                ....255555ffff55552.....
                                ...22555ff1111ff552.....
                                ...2555fb111111bf522....
                                ...2555fd1111111f552....
                                ...255fdd1111111df52....
                                ...255fddd111111df522...
                                ...255fdddddd111df552...
                                ...255fbddddbfd1df5522..
                                ...255fcbbbdcfddbf5552..
                                ..22555fcbb11111f55552..
                                ..255555fffff1b1f55552..
                                ..255555fb111cfbf55552..
                                ..255555ffb1b1ff555522..
                                ..2555f5fffbfbf555552...
                                ..2555ffffffff5555552...
                                ..25555fffff555555522...
                                ..225555555555555552....
                                ...2555555555555552.....
                                ...225555555555522......
                                .....222222222222.......
                                `,img`
                                ........22222...........
                                .......22555522.........
                                ......2255555522........
                                ...22225555555522222....
                                ..22555555ffff555552....
                                ..255555ff1111ff55522...
                                .225555fb111111bf55522..
                                .255555fd1111111f55552..
                                225555fdd1111111df55552.
                                255555fddd111111df555522
                                255555fdddddd111df555552
                                .25555fbddddbfd1df555552
                                .25555fcbbbdcfddbf555552
                                .225555fcbb11111f5555552
                                ..255555fffff1b1f5555552
                                ..255555fb111cfbf5555552
                                ..255555ffb1b1ff55555522
                                ..2555f5fffbfbf55555552.
                                ..2555ffffffff55555552..
                                ..25555fffff5555555522..
                                ..2555555555555555522...
                                ...25555555555555522....
                                ...2255555555555222.....
                                .....222222222222.......
                                `,img`
                                ........22222...........
                                .......22555522.2.......
                                ......225555552222......
                                .....2255555555252......
                                ..2..25555ffff55552.....
                                ..222555ff1111ff552.2...
                                ..22555fb111111bf5222...
                                ..22555fd1111111f5522...
                                ..2555fdd1111111df552...
                                ..2555fddd111111df552...
                                2.2555fdddddd111df552...
                                225555fbddddbfd1df5522..
                                225555fcbbbdcfddbf5552..
                                2555555fcbb11111f55552.2
                                25555555fffff1b1f55552.2
                                25555555fb111cfbf5555222
                                25555555ffb1b1ff55555222
                                .25555f5fffbfbf55555552.
                                .25555ffffffff555555552.
                                .255555fffff55555555552.
                                ..555555555555555555522.
                                ..22555555555555555222..
                                ...22555555555555222....
                                .....222222222222.......
                                `],
                            200,
                            true
                            )
                            animation.runImageAnimation(
                            Hero,
                            [img`
                                ........................
                                ..............ffffff....
                                .............f2feeeeff..
                                ............f222feeeeff.
                                .......cc...feeeeffeeef.
                                .......cdc.fe2222eeffff.
                                .......cddcf2effff222ef.
                                ........cddcffeeefffffff
                                .........cddce44fbe44eff
                                ..........cdceddf14d4eef
                                ..........cccdeddd4eeef.
                                ...........edd4e44eeff..
                                ............ee442222f...
                                .............f2e2222f...
                                .............f554444f...
                                ..............ffffff....
                                ................fff.....
                                ........................
                                ........................
                                ........................
                                ........................
                                ........................
                                ........................
                                ........................
                                `,img`
                                ........................
                                ..............fff.......
                                .............f2fffff....
                                ...........ff22eeeeeff..
                                ..........ff222eeeeeeff.
                                ..........feeeefffeeeef.
                                .........fe2222eeefffff.
                                .........f2efffff222efff
                                ..cc.....fffeeefffffffff
                                ..cdcc...fee44fbbe44efef
                                ..ccddcc..feddfbb4d4eef.
                                ....cdddceefddddd4eeef..
                                .....ccdcddee2222222f...
                                ......cccdd44e544444f...
                                .........eeeeffffffff...
                                .............ff...fff...
                                ........................
                                ........................
                                ........................
                                ........................
                                ........................
                                ........................
                                ........................
                                ........................
                                `],
                            350,
                            true
                            )
                        })
                    })
                }
            }
            if (BOSSHP_1.value <= 0) {
                controller.moveSprite(Hero, 100, 100)
                Battle = 0
                sprites.destroy(BOSS1, effects.fire, 500)
                DestoryStatue()
                sprites.destroy(BOSSHP_1, effects.none, 100)
                sprites.destroy(BOSSSpeed_1, effects.none, 100)
                timer.after(1100, function () {
                    tiles.setCurrentTilemap(tilemap`層級1`)
                    scaling.scaleToPercent(Hero, 100, ScaleDirection.Uniformly, ScaleAnchor.Middle)
                    tiles.placeOnTile(Hero, tiles.getTileLocation(14, 2))
                    scene.cameraFollowSprite(Hero)
                    Walk()
                    EXP += 500
                    game.splash("EXP +500")
                    if (EXP >= 800) {
                        game.splash("升級! 4 to 5", "習得'十字斬'")
                        game.splash("升級! 5 to 6", "治癒量 60 to 120")
                        game.splash("升級! 6 to 7", "HP 150 to 300")
                        game.splash("升級! 7 to 8", "傷害 +60")
                        Level = 8
                        CrossCut = 1
                        RecoverValue = 120
                        HPvalue = 300
                        SPvalue += 60
                    }
                })
            }
        }
    }
})
