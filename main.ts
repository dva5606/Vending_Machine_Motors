radio.onReceivedString(function (receivedString) {
    if (receivedString == "PEACH") {
        if (true) {
            servos.P0.setAngle(180)
        }
        if (Cherry__Watermelon == true) {
            Cherry__Watermelon = false
        } else if (Cherry__Watermelon == false) {
            Cherry__Watermelon = true
        }
    }
    if (receivedString == "MANGO") {
        if (true) {
            pins.servoWritePin(AnalogPin.P14, 180)
        }
        if (Peach__Wild_Berry == true) {
            Peach__Wild_Berry = false
        } else if (Peach__Wild_Berry == false) {
            Peach__Wild_Berry = true
        }
    }
})
let Peach__Wild_Berry = false
let Cherry__Watermelon = false
servos.P0.setAngle(90)
pins.servoWritePin(AnalogPin.P14, 90)
