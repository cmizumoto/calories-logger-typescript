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
import { HasFormatter } from "./interfaces/HasFormatter.js";

// Now we can create variables that are specific to a interface, in this case must return a string following the HasFormater
let foodOne: HasFormatter;
let foodTwo: HasFormatter;

// Assign those variables above to new types using the constructor and formatter
foodOne = new Snack("candy", "03-02-2022", 40);
foodTwo = new Meal("sandwich", "03-02-2022", 100);

// Also possible to create another array that only holds variables that have HasFormatter interface
let foods: HasFormatter[] = [];
foods.push(foodOne);
foods.push(foodTwo);

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

const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;

  if (formType.value === "meal") {
    doc = new Meal(formFood.value, formDate.value, formAmount.valueAsNumber);
  } else {
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
const addUID = <T extends object>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

const docOne = addUID({ name: "miguel", age: 40 });

// in this case we cannot access the type age from docOne, because we never specified that the name existed in the first place when we used spread inside
console.log(docOne.age);

/* 
  Generics with Interfaces
*/
// When we are specifing this interface, we want the data to be flexible
// So we declare the generic and pass to the data
interface Resource<T> {
  uid: number;
  resourceName: string;
  data: T;
}

// As defined above, we just have to indicate what data will be, string, number, object..., becoming reusable
const docThree: Resource<object> = {
  uid: 1,
  resourceName: "person",
  data: { name: "miguel" },
};

// Another example, possible to pass an array that contains a specific type
const docFour: Resource<string[]> = {
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
enum ResourceType {
  BOOK,
  AUTHOR,
  FILM,
  DIRECTOR,
  PERSON,
}

interface Art<T> {
  uid: number;
  resourceType: ResourceType;
  data: T;
}

const artOne: Art<object> = {
  uid: 1,
  resourceType: ResourceType.BOOK,
  // resourceType: 3,
  data: { title: "name of the wind" },
};

const artTwo: Art<object> = {
  uid: 20,
  resourceType: ResourceType.FILM,
  // resourceType: 4,
  data: { title: "name of the wind" },
};
