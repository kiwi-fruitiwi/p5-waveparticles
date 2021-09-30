/*
@author Kiwi
@date 2021-09-30

We've been learning about standing

 */

let font

class waveParticle {
    constructor(x, y, r) {
        this.pos = new p5.Vector(x, y)
        this.vel = p5.Vector.random2D()
        this.acc = new p5.Vector(0, 0)
        this.r = r
    }

    update() {
        this.vel.add(this.acc)
        this.pos.add(this.vel)
        this.acc.setMag(0)
    }

    show() {
        strokeWeight(1)
        fill(0, 0, 100, 50)
        stroke(0, 0, 100, 80)
        circle(this.pos.x, this.pos.y, this.r*2)
    }

    // input "force" is a p5.Vector
    applyForce(force) {
        // F = ma, but we'll assume m=1 for now
        this.acc.add(force)
    }
}


let waveParticles
let gravity

function preload() {
    font = loadFont('fonts/Meiryo-01.ttf')
}

function setup() {
    createCanvas(640, 360)
    colorMode(HSB, 360, 100, 100, 100)
    waveParticles = []
    gravity = new p5.Vector(0, 0.1)

    for (let i=0; i<1000; i++) {
        waveParticles.push(
            new waveParticle(random(width), random(height), random(2, 4)))
    }
}

function draw() {
    background(209, 80, 30)


    waveParticles.forEach(function(p) {
        p.applyForce(gravity)
    })
    waveParticles.forEach(p => p.update())
    // waveParticles.forEach(p => p.show())
    for (let p of waveParticles)
        p.show()
}