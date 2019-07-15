class Animal {
	constructor(name, energy) {
		this.name = name;
		this.energy = energy;
	}

	eat(amount) {
		console.log(`${this.name} is Eating`);
		this.energy += amount;
	}

	sleep(length) {
		console.log(`${this.name} is Sleeping`);
		this.energy += length;
	}

	play(length) {
		console.log(`${this.name} is Playing`);
		this.energy -= length;
	}
}

class Dog extends Animal {
	constructor(name, energy, bread) {
		super(name, energy);
		this.bread = bread;
	}

	bark() {
		console.log(`${this.name} is braking`);
	}
}

const dog = new Dog('losy', 22, 'breading');
