var Color = require("color");

var CompColors = function (colorInput) {

    var color = Color(colorInput);
    var hslColor = Color(color.hslString());

    return {
        primary: {
            color1: hslColor.rgb()
        },
        complementary: {
            color1: hslColor.rgb(),
            color2: hslColor.rotate(180).rgb()
        },
        triad: {
            color1: hslColor.rgb(),
            color2: hslColor.rotate(120).rgb(),
            color3: hslColor.rotate(120).rgb()
        },
        analogous: {
            color1: hslColor.rotate(-30).rgb(),
            color2: hslColor.rgb(),
            color3: hslColor.rotate(30).rgb()
        },
        splitComplementary: {
            color1: hslColor.rgb(),
            color2: hslColor.rotate(-30).rgb(),
            color3: hslColor.rotate(30).rgb()
        },
        tetradic: {
            color1: hslColor.rgb(),
            color2: hslColor.rotate(90).rgb(),
            color3: hslColor.rotate(180).rgb(),
            color4: hslColor.rotate(240).rgb()
        },
        square: {
            color1: hslColor.rgb(),
            color2: hslColor.rotate(90).rgb(),
            color3: hslColor.rotate(180).rgb(),
            color4: hslColor.rotate(270).rgb()
        }
    }
};


module.exports = CompColors;