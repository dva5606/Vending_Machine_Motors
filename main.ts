radio.onReceivedString(function (receivedString) {
    if (receivedString == "PEACH") {
        basic.showString("PEACH")
        if (PEACH == true) {
            PEACH = false
        } else if (PEACH == false) {
            PEACH = true
        }
    }
    if (receivedString == "MANGO") {
        basic.showString("MANGO")
        if (MANGO == true) {
            MANGO = false
        } else if (MANGO == false) {
            MANGO = true
        }
    }
})
let MANGO = false
let PEACH = false
basic.showIcon(IconNames.Yes)
radio.setGroup(69)
servos.P0.setAngle(90)
