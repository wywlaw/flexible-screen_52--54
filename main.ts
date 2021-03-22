function LED_frame5 () {
    y = x + 4 * matrix_const
}
function LED_frame2 () {
    y = x + 1 * matrix_const
}
function led_show () {
    rgb.clear()
    LED_frame1()
    LED_frame2()
    LED_frame3()
    LED_frame4()
    LED_frame5()
    rgb.show()
    basic.pause(delay_time)
}
function LED_frame4 () {
    y = x + 3 * matrix_const
}
function LED_frame3 () {
    y = x + 2 * matrix_const
}
function change_colour () {
    if (Math.idiv(z, colour_changing_time) % 3 == 0) {
        colour = neopixel.rgb(speed_const * (colour_changing_time - 1 - z % colour_changing_time), speed_const * (z % colour_changing_time), 0)
    } else if (1 == Math.idiv(z, colour_changing_time) % 3) {
        colour = neopixel.rgb(0, speed_const * (colour_changing_time - 1 - z % 8), speed_const * (z % colour_changing_time))
    } else {
        colour = neopixel.rgb(speed_const * (z % colour_changing_time), 0, speed_const * (colour_changing_time - 1 - z % colour_changing_time))
    }
}
function LED_frame1 () {
    y = x + 0 * matrix_const
}
let y = 0
let colour = 0
let z = 0
let x = 0
let rgb: neopixel.Strip = null
let matrix_const = 0
let speed_const = 0
let delay_time = 0
let colour_changing_time = 0
let number_of_screen = 1
let number_of_frame = 1
let matrix_high = 8
colour_changing_time = 16
delay_time = 0
let LED_const = 256
speed_const = Math.idiv(LED_const, colour_changing_time)
matrix_const = Math.idiv(LED_const, matrix_high)
rgb = neopixel.create(DigitalPin.P2, LED_const * number_of_screen, NeoPixelMode.RGB)
x = matrix_const * number_of_screen
z = 0
colour = neopixel.rgb(255, 255, 255)
rgb.setBrightness(20)
rgb.setMatrixWidth(matrix_high)
basic.forever(function () {
    change_colour()
    led_show()
    x += -1
    z += 1
    if ((0 - matrix_const) * number_of_frame > x) {
        x = matrix_const * number_of_screen
    }
})
