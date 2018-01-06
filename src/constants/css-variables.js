class HslaColor {
    constructor(hue=0, sat=0, lght=100, opty=1) { // default is white
        this.hue = hue; // hue
        this.sat = sat; // saturation
        this.lght = lght; // lightness
        this.opty = opty; // opacity
    }
    val = (hueAdj=0, satAdj=0, lghtAdj=0, optyAdj=0) => {
        return `hsla(${this.hue + hueAdj}, ${this.sat+ + satAdj}%, ${this.lght + lghtAdj}%, ${this.opty + optyAdj})`;
    }
}

export const colors = {
    blue: "rgba(0, 116, 217, 1)",
    navy: "	rgba(0, 31, 63, 1)",
    aqua: "rgba(127, 219, 255, 1)",
    teal: new HslaColor(180, 59, 51, 1),
    olive: "rgba(61, 153, 112, 1)",
    green: "rgba(46, 204, 64, 1)",
    lime: "rgba(1, 255, 112, 1)",
    yellow: "rgba(255, 220, 0, 1)",
    orange: "rgba(255, 133, 27, 1)",
    red: "rgba(255, 65, 54, 1)",
    maroon: "rgba(133, 20, 75, 1)",
    fuchsia: "rgba(240, 18, 190, 1)",
    purple: "rgba(177, 13, 201, 1)",
    black: "rgba(17, 17, 17, 1)",
    gray: "rgba(170, 170, 170, 1)",
    silver: "rgba(221, 221, 221, 1)",
    white: "rgba(255, 255, 255, 1)"
};

export const opaqueColor = (color, opacity=1) => {
    const newColor = color.replace("1)", `${opacity})`);
    console.log(newColor);
    return newColor;
}

export const spacing = {
    xsmall: "0.25em",
    small: "0.5em",
    med: "1em",
    lg: "2em",
    xlg: "4em"
};

export const verticalSpacing = {
    xsmall: "0.25em 0",
    small: "0.5em 0",
    med: "1em 0",
    lg: "2em 0",
    xlg: "4em 0"
};