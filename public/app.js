"use strict";
/*
  ---Classes---
  Same as classes in JS, we can define a constructor and what type it will receive when called
  All informations are public by default, so it is possible to declare private
*/
var Meal = /** @class */ (function () {
    // readonly makes it possible to read this value inside and outside, but not able to change it
    // Possible to remove all this if we declare everything in the constructor arguments
    // readonly food: string;
    // private date: string;
    // public amount: number;
    // It is possible declare everything in the constructor parameter, but we need to add the readonly, private and public for it to work
    function Meal(food, date, amount) {
        this.food = food;
        this.date = date;
        this.amount = amount;
    }
    Meal.prototype.format = function () {
        return "".concat(this.food, " with ").concat(this.amount, " was consumed on ").concat(this.date);
    };
    return Meal;
}());
var mealOne = new Meal("Rice", "01-01-2022", 100);
var mealTwo = new Meal("Beans", "01-01-2022", 200);
// In this array we only allow strings to be stored inside it
var strings = [];
// Also we can do the same for objects we create using the constructor, and only allow them to be stored in this array
var meals = [];
meals.push(mealOne);
meals.push(mealTwo);
console.log(meals);
meals.forEach(function (meal) {
    // now here we won't be able to access meal.date, because we declared it private
    console.log(meal.food, meal.amount, meal.format());
});
/*
    ---Non-null expression---
    We can put a "!" at the end of the selector to force and say this element exists and it is not null or undefined
    This work as same as an "as" assertion
*/
var anchor = document.querySelector("a");
/*
    ---Casting Types---
    But if we use the "!" to specify classes, TS identify this selector as an Element
    Now we can add the keyword "as" to cast this element type
*/
var form = document.querySelector(".new-item-form");
console.log(form.children);
var formType = document.querySelector("#type");
var formFood = document.querySelector("#food");
var formDate = document.querySelector("#date");
var formAmount = document.querySelector("#amount");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    // here we log every element using the value property.
    // in the case of the date or number, it is possible to extract using valueAsDate and valueAsNumber
    console.log(formType.value, formFood.value, formDate.valueAsDate, formAmount.valueAsNumber);
});
