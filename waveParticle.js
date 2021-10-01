class waveParticle {
    constructor(x, y, n) {
        this.pos = new p5.Vector(x, y)
        this.vel = new p5.Vector(1, 0)
        this.r = 2

        // formula for nth harmonic's period, since the fundamental is 2*width
        this.period = 2*width/n

        // angle
        this.amp = 50

        // this is the time variable in our sine function
        this.t = 0

        // how much we move per frame
        this.speed = 0.5

        // color
        this.c = color(0, 0, 100)

        this.offset = 0
    }

    update() {
        // sin waves are in the general form of: Asin(ω(x+c)) + d
        // ω is the angular velocity, and ωT=2π
        // thus T=2π/ω and ω=2π/T

        this.t += this.speed
        this.pos.x += this.vel.x * this.speed
        this.pos.y = this.amp*sin((TAU/this.period)*(this.t-this.offset))
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