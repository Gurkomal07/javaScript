export function demo() {
// Do NOT modify the following function.
const updateInnerHTML = function (selector, newValue) {
  document.querySelector(selector) = newValue;
}

// TODO: Enter your code below to make use of the function given.
let parameter;
const italics = function(parameter) {
    return `<i>${parameter}</i>`;
}

let selected = document.querySelector('span.note');



let selected1 = selected.innerHTML;

 let selected2 = italics(selected1);

updateInnerHTML('span.note' ,selected2.innerHTML);



}
