function Animal(name,energy){
    let animal = {}
    animal.name = name
    animal.energy = energy

    animal.eat = function (amount){
        console.log(`${this.name} is eating...`)
        this.energy += amount

        return this.energy
    }

    animal.sleep = function (length){
        console.log(`${this.name} is sleeping...`)
        this.energy -= amount

        return this.energy
    }

    animal.play = function (length){
        console.log(`${this.name} is playing...`)
        this.energy -= amount

        return this.energy
    }

    return animal
}