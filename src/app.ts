/* 
  ---Classes---
  Same as classes in JS, we can define a constructor and what type it will receive when called
  All informations are public by default, so it is possible to declare private
*/
class Meal {
  // readonly makes it possible to read this value inside and outside, but not able to change it
  // Possible to remove all this if we declare everything in the constructor arguments
  // readonly food: string;
  // private date: string;
  // public amount: number;

  // It is possible declare everything in the constructor parameter, but we need to add the readonly, private and public for it to work
  constructor(readonly food: string, private date: string, public amount: number) {}

  format() {
    return `${this.food} with ${this.amount} was consumed on ${this.date}`;
  }
}

const mealOne = new Meal("Rice", "01-01-2022", 100);
const mealTwo = new Meal("Beans", "01-01-2022", 200);

// In this array we only allow strings to be stored inside it
let strings: string[] = [];
// Also we can do the same for objects we create using the constructor, and only allow them to be stored in this array
let meals: Meal[] = [];
meals.push(mealOne);
meals.push(mealTwo);
console.log(meals);

meals.forEach((meal) => {
  // now here we won't be able to access meal.date, because we declared it private
  console.log(meal.food, meal.amount, meal.format());
});

/* 
    ---Non-null expression---
    We can put a "!" at the end of the selector to force and say this element exists and it is not null or undefined
    This work as same as an "as" assertion
*/
const anchor = document.querySelector("a")!;

/* 
    ---Casting Types---
    But if we use the "!" to specify classes, TS identify this selector as an Element
    Now we can add the keyword "as" to cast this element type
*/
const form = document.querySelector(".new-item-form") as HTMLFormElement;
console.log(form.children);

const formType = document.querySelector("#type") as HTMLSelectElement;
const formFood = document.querySelector("#food") as HTMLInputElement;
const formDate = document.querySelector("#date") as HTMLInputElement;
const formAmount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  // here we log every element using the value property.
  // in the case of the date or number, it is possible to extract using valueAsDate and valueAsNumber
  console.log(formType.value, formFood.value, formDate.valueAsDate, formAmount.valueAsNumber);
});
