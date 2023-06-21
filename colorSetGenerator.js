const { createCanvas } = require('canvas');
const fs = require('fs');

async function createImage(color) {
        
    let canvas = createCanvas(1280, 720)
    let context = canvas.getContext('2d');


    context.fillStyle = `#${color}`
    context.fillRect(0, 0, 1280, 720)

    const buffer = canvas.toBuffer('image/png')
    fs.writeFileSync(`set/${color}_shade.png`, buffer)
 
}

async function generateSet() {
    let functions = []

    for (i = 0; i <= 4294967295; ++i) {
    let color = i.toString(16).padStart(6, '0');
    functions.push(await createImage(color))
    }

    Promise.all(functions)
        .then(console.log('Generation complete'))

}
generateSet()

