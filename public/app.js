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
/*
  GENERICS
  Allow us to make reusable blocks of codes, which can be used by different types
*/
// By uing this <T> (can be anything, but is usually T), we capture everything that is passed and when returned, this function will know what it was captured
// we can be more specific and tell more about this extends, like in this case to only allow object with the name and must be a string
// const addUID = <T extends {name: string}>(obj: T) => {
// and need to remember to extend it as the type we need, otherwise it will allow any type
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
const docOne = addUID({ name: "miguel", age: 40 });
// in this case we cannot access the type age from docOne, because we never specified that the name existed in the first place when we used spread inside
console.log(docOne.age);
// As defined above, we just have to indicate what data will be, string, number, object..., becoming reusable
const docThree = {
    uid: 1,
    resourceName: "person",
    data: { name: "miguel" },
};
// Another example, possible to pass an array that contains a specific type
const docFour = {
    uid: 2,
    resourceName: "Shopping",
    data: ["test", "test2"],
};
/*
  ENUMS
  It allow us to set of constants keywords and associate them with numeric values
  For example, in these two objects bellow, our resourceType will get messy if we start to escalate, what number is what
  So we create an enum and specify our contents, book, movies, directors, person
  now we can give these types and typescript will distribute these values.
  when we console.log these values, we will get the index of the enum position;
*/
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const artOne = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    // resourceType: 3,
    data: { title: "name of the wind" },
};
const artTwo = {
    uid: 20,
    resourceType: ResourceType.FILM,
    // resourceType: 4,
    data: { title: "name of the wind" },
};
