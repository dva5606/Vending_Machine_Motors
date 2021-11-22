radio.onReceivedString(function (receivedString) {
    if (receivedString == "PEACH") {
        if (true) {
            servos.P0.setAngle(180)
        }
        if (Grape__Strawberry == true) {
            Grape__Strawberry = false
        } else if (Grape__Strawberry == false) {
            Grape__Strawberry = true
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
let Grape__Strawberry = false
servos.P0.setAngle(90)
pins.servoWritePin(AnalogPin.P14, 90)
