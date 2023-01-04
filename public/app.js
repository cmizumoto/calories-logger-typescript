// Here we specify what isPerson is and all its expected contents
// interface isPerson {
//   name: string;
//   age: number;
//   speak(a: string): void;
//   spend(a: number): number;
// }
// Now here we can create a variable and pass isPerson as an expected object
// Note that must correspond to everything we listed above, anything different will cause an error
// const me: isPerson = {
//   name: "miguel",
//   age: 30,
//   speak(text: string): void {
//     console.log(text);
//   },
//   spend(amount: number): number {
//     console.log("I spent", amount);
//     return amount;
//   },
// };
import { ListTemplate } from "./classes/ListTemplate.js";
import { Meal } from "./classes/Meals.js";
import { Snack } from "./classes/Snacks.js";
// Now we can create variables that are specific to a interface, in this case must return a string following the HasFormater
let foodOne;
let foodTwo;
// Assign those variables above to new types using the constructor and formatter
foodOne = new Snack("candy", "03-02-2022", 40);
foodTwo = new Meal("sandwich", "03-02-2022", 100);
// Also possible to create another array that only holds variables that have HasFormatter interface
let foods = [];
foods.push(foodOne);
foods.push(foodTwo);
const mealOne = new Meal("Rice", "01-01-2022", 100);
const mealTwo = new Meal("Beans", "01-01-2022", 200);
// In this array we only allow strings to be stored inside it
let strings = [];
// Also we can do the same for objects we create using the constructor, and only allow them to be stored in this array
let meals = [];
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
const anchor = document.querySelector("a");
/*
    ---Casting Types---
    But if we use the "!" to specify classes, TS identify this selector as an Element
    Now we can add the keyword "as" to cast this element type
*/
const form = document.querySelector(".new-item-form");
console.log(form.children);
const formType = document.querySelector("#type");
const formFood = document.querySelector("#food");
const formDate = document.querySelector("#date");
const formAmount = document.querySelector("#amount");
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (formType.value === "meal") {
        doc = new Meal(formFood.value, formDate.value, formAmount.valueAsNumber);
    }
    else {
        doc = new Snack(formFood.value, formDate.value, formAmount.valueAsNumber);
    }
    list.render(doc, formType.value, "end");
    formType.value = "Meal";
    formFood.value = "";
    formDate.value = "";
    formAmount.value = "";
    // here we log every element using the value property.
    // in the case of the date or number, it is possible to extract using valueAsDate and valueAsNumber
    console.log(doc);
});
