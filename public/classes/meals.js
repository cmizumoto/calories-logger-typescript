/*
  ---Classes---
  Same as classes in JS, we can define a constructor and what type it will receive when called
  All informations are public by default, so it is possible to declare private
*/
// With implements, this class must contain HasFormatter method to not receive errors
export class Meal {
    // readonly makes it possible to read this value inside and outside, but not able to change it
    // Possible to remove all this if we declare everything in the constructor arguments
    // readonly food: string;
    // private date: string;
    // public amount: number;
    // It is possible declare everything in the constructor parameter, but we need to add the readonly, private and public for it to work
    constructor(food, date, amount) {
        this.food = food;
        this.date = date;
        this.amount = amount;
    }
    // Now as declared in the interfaces, we can use the format method that must return a string
    format() {
        return `${this.food} with ${this.amount} kcal was consumed on ${this.date}`;
    }
}
