/* 
We can put a "!" at the end of the selector to force and say this element exists and it is not null or undefined
This work as same as an "as" assertion
*/
// const anchor = document.querySelector("a")!;

/* 
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
