"use strict";

class AnimalShelter {
  constructor() {
    this.animal = null;
    this.dogs = [];
    this.cats = [];
  }

  enqueue(animal) {
    if (animal.species === "cat") {
      this.cats.push(animal);
    }

    if (animal.species === "dog") {
      this.dogs.push(animal);
    }

    return this;
  }

  dequeue(pref) {
    if (pref !== "cat" && pref !== "dog") {
      return null;
    }

    if (pref === "cat") {
      if (this.cats.length === 0) {
        return null;
      }
      let cat = this.cats.shift();
      return cat;
    }

    if (pref === "dog") {
      if (this.dogs.length === 0) {
        return null;
      }
      let dog = this.dogs.shift();
      return dog;
    }

    return "Something went wrong";
  }
}

module.exports = AnimalShelter;

let dog = {
  species: "dog",
  name: "Dawg",
  color: "black",
};
let dog1 = {
  species: "dog",
  name: "Dude",
  color: "brown",
};

let cat = {
  species: "cat",
  name: "Mew",
  color: "white",
};

let shelter = new AnimalShelter();

shelter.enqueue(dog);
shelter.enqueue(dog1);
shelter.enqueue(cat);

console.log(shelter.dogs);
console.log(shelter.cats);
console.log(shelter.dequeue("dog"));
console.log(shelter.dequeue("cat"));
console.log(shelter.dogs);
console.log(shelter.cats);
