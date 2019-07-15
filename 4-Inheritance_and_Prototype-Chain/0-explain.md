[1] You should know the diff between Inheritance in ES5 & ES6
    # ES5
    [A] in Inherited function : 
            -> Animal.call(this, name, energy)

            => Dog.prototype = Object.create(Animal.prototype)
            => Dog.prototype.constructor = Dog
                        === to reset dog insanced from Dog Construcors!


     # ES6
    [A] in Inherited function :
            -> use extends ::: class Dog extends Animal {}

            => using super()
            constructor(name, energy, bread) {
                super(name, energy)
            }
