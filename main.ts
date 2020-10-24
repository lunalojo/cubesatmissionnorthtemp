input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.lightLevel())
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.No)
})
input.onButtonPressed(Button.AB, function () {
    input.calibrateCompass()
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.temperature())
    while (input.temperature() > 8) {
        basic.showArrow(ArrowNames.South)
    }
    while (input.temperature() > 30) {
        basic.showArrow(ArrowNames.North)
    }
    basic.pause(100)
})
let ángulo = 0
basic.showString("Mission Northtemp")
basic.forever(function () {
    ángulo = input.compassHeading()
    if (ángulo <= 45) {
        basic.showString("N")
    } else {
        if (ángulo <= 135) {
            basic.showString("E")
        } else {
            if (ángulo <= 225) {
                basic.showString("S")
            } else {
                if (ángulo <= 315) {
                    basic.showString("W")
                } else {
                    basic.showString("N")
                }
            }
        }
    }
})
