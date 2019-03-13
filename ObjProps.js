const animalMethods = {
    eat(amount){
        console.log(`${this.name} is eating...`)
        this.energy += amount

        return this.energy
    },

    sleep(length){
        console.log(`${this.name} is sleeping...`)
        this.energy -= amount

        return this.energy
    },

    play(length){
        console.log(`${this.name} is playing...`)
        this.energy -= amount

        return this.energy
    }

}

function Animal(name,energy){
    let animal = {}
    animal.name = name
    animal.energy = energy

    animal.eat = animalMethods.eat
    animal.sleep = animalMethods.sleep
    animal.play = animalMethods.play

    return animal
}