/*
@author Kiwi
@date 2021-09-30

We've been learning about standing

 */

let font

class waveParticle {
    constructor(x, y, r, n, c) {
        this.pos = new p5.Vector(x, y)
        this.vel = new p5.Vector(1, 0)
        this.r = r

        // formula for nth harmonic's period, since the fundamental is 2*width
        this.period = 2*width/n

        // angle
        this.amp = 50

        // this is the time variable in our sine function
        this.t = 0

        // how much we move per frame
        this.speed = 1

        // color
        this.c = color(0, 0, 100)
    }

    update() {
        this.t += this.speed
        this.pos.x += this.vel.x * this.speed
        this.pos.y = this.amp*sin((TAU/this.period)*this.t)

        // sin waves are in the general form of: Asin(ω(x+c)) + d
        // ω is the angular velocity, and ωT=2π
        // thus T=2π/ω and ω=2π/T
    }

    // bounce horizontally and invert our y coordinate whenever we hit a wall
    edges() {
        // we have two walls: x=0 and x=width
        if ((this.pos.x === width) || (this.pos.x === 0)) {
            this.vel.x *= -1
        }
    }

    show() {
        strokeWeight(1)
        fill(this.c)
        stroke(this.c)
        circle(this.pos.x, this.pos.y, this.r*2)
    }

    // input "force" is a p5.Vector
    // applyForce(force) {
    //     // F = ma, but we'll assume m=1 for now
    //     this.acc.add(force)
    // }
}

let winry, cody, kiwi, aerry
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

    kiwi = new waveParticle(0, height/2, 2, 1, color(201, 96, 83))
    winry = new waveParticle(0, height/2, 2, 3, color(89, 100, 58))
    cody = new waveParticle(0, height/2, 2, 2, color(216, 96, 98))
    aerry = new waveParticle(0, height/2, 2, 4, color(0, 66, 76))

    waveParticles.push(winry)
    waveParticles.push(cody)
    waveParticles.push(kiwi)
    waveParticles.push(aerry)

    // gravity = new p5.Vector(0, 0.1)
    // for (let i=0; i<1000; i++) {
    //     waveParticles.push(
    //         new waveParticle(random(width), random(height), random(2, 4)))
    // }
}

function draw() {
    background(209, 80, 30, 5)
    translate(0, height/2)

    waveParticles.forEach(p => p.update())
    waveParticles.forEach(p => p.edges())
    waveParticles.forEach(p => p.show())

    // waveParticles.forEach(p => p.applyForce(gravity))
    // waveParticles.forEach(p => p.update())
    //
    // for (let p of waveParticles)
    //     p.show()
}