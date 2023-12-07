let pitch = 0
let roll = 0
basic.forever(function () {
    pitch = input.rotation(Rotation.Pitch)
    roll = input.rotation(Rotation.Roll)
    if (Math.abs(pitch) < 20 && Math.abs(roll) < 20) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            # # # # #
            # # . # #
            # . # . #
            # # # # #
            # # # # #
            `)
    }
})
