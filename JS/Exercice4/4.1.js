
 function calcSurface(length, width){
    return length *width;
}

const calcSurfaceArrow = (length, width) => length * width

const x = Number(prompt('length ?'))
const y = Number(prompt('width ?'))
console.log( calcSurface(x, y) )

