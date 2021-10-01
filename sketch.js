/*
@author Kiwi
@date 2021-09-30

We've been learning about standing

 */

let font

let winry, cody, sum
let waveParticles
let gravity

function preload() {
    font = loadFont('fonts/Meiryo-01.ttf')
}

function setup() {
    createCanvas(640, 360)
    colorMode(HSB, 360, 100, 100, 100)
    frameRate(144)
    waveParticles = []

    winry = new waveParticle(0, height/2, 4)
    cody = new waveParticle(0, height/2, 4)

    sum = new waveParticle(0, height/2, 4)
    sum.c = color(0, 0, 50)

    cody.offset = 100

    waveParticles.push(winry)
    waveParticles.push(cody)
    waveParticles.push(sum)

    // gravity = new p5.Vector(0, 0.1)
    // for (let i=0; i<1000; i++) {
    //     waveParticles.push(
    //         new waveParticle(random(width), random(height), random(2, 4)))
    // }
}

function draw() {
    background(209, 80, 30, 10)
    translate(0, height/2)

    waveParticles.forEach(p => p.update())
    sum.pos.y = winry.pos.y + cody.pos.y

    waveParticles.forEach(p => p.edges())
    waveParticles.forEach(p => p.show())
}