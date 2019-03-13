const animalMethods = {
    eat(amount){
        console.log(`${this.name} is eating...`)
        this.energy += amount

    },

    sleep(length){
        console.log(`${this.name} is sleeping...`)
        this.energy -= amount

    },

    play(length){
        console.log(`${this.name} is playing...`)
        this.energy -= amount

    }

}


function Animal(name,energy){
    let animal = Object.create(animalMethods)
    animal.name = name
    animal.energy = energy

    return animal
}