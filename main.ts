/**
 * Hector Moreno
 * 
 * S2A
 */
input.onButtonPressed(Button.A, function () {
    posicion += 10
    servos.P0.setAngle(posicion)
    if (posicion == 180) {
        servos.P0.stop()
    }
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 180; index++) {
        posicion += 1
        servos.P0.setAngle(posicion)
        if (posicion == 180) {
            posicion += -1
            servos.P0.setAngle(posicion)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    posicion += -10
    servos.P0.setAngle(posicion)
    if (posicion == 0) {
        servos.P0.stop()
    }
})
let posicion = 0
servos.P0.setRange(0, 180)
servos.P0.setAngle(0)
posicion = 0
basic.showLeds(`
    # . # . #
    . # . # .
    # . # . #
    . # . # .
    # . # . #
    `)
basic.showLeds(`
    . # . # .
    # . # . #
    . # . # .
    # . # . #
    . # . # .
    `)
basic.showLeds(`
    # . # . #
    . # . # .
    # . # . #
    . # . # .
    # . # . #
    `)
basic.showLeds(`
    . # . # .
    # . # . #
    . # . # .
    # . # . #
    . # . # .
    `)
basic.showLeds(`
    # . # . #
    . # . # .
    # . # . #
    . # . # .
    # . # . #
    `)
basic.showLeds(`
    . # . # .
    # . # . #
    . # . # .
    # . # . #
    . # . # .
    `)
basic.showIcon(IconNames.Surprised)
