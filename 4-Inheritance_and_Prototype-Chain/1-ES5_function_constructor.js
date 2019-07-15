function Animal(name, energy) {
	this.name = name;
	this.energy = energy;
}

Animal.prototype.eat = function(amount) {
	console.log(`${this.name} is eating`);
	this.energy += amount;
};

Animal.prototype.sleep = function(length) {
	console.log(`${this.name} is Sleepin`);
	this.energy += length;
}

Animal.prototype.play = function(length) {
	console.log(`${this.name} is Playing`);
	this.energy -= length;
}

// Make Instances  (Dog)
function Dog(name, energy, bread) {
	Animal.call(this, name, energy);
	this.bread = bread;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
	console.log(`${this.name} is Woof`);
}

const dog = new Dog('nana', 22, 'doodle');

// Make Instances  (Dog)

function Cat (name, energy, sound) {
	Animal.call(this, name, energy);
	this.sound = sound;
};

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.meow = function(length) {
	console.log(`${this.name} Meeeeow`);
	this.sound += length;
}


const cat = new Cat('losy', 99, 'high');
