class Animal2{
    constructor(name,energy){
        this.name = name
        this.energy = energy
    }
    eat(amount){
        console.log(`${this.name} is eating...`)
        this.energy += amount

        return this.energy
    }

    sleep(amount){
        console.log(`${this.name} is sleeping...`)
        this.energy += amount

        return this.energy
    }

    play(length){
        console.log(`${this.name} is sleeping...`)
        this.energy -= length

        return this.energy
    }
}

const rabbit = new Animal2('bunny',200)

const deer = new Animal2('harini',500)