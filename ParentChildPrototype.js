Animal.prototype.eat = function(amount){
        console.log(`${this.name} is eating...`)
        this.energy += amount

    }

    Animal.prototype.sleep = function(length){
        console.log(`${this.name} is sleeping...`)
        this.energy -= length

    }

    Animal.prototype.play = function(length){
        console.log(`${this.name} is playing...`)
        this.energy -= length

    }


function Animal(name,energy){
    let animal = Object.create(Animal.prototype)
    animal.name = name
    animal.energy = energy

    return animal
}