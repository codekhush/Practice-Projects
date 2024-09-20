// let inputField = document.querySelector('#input_field');
// let button = document.querySelector('#btn');
// let field = document.querySelector('.present_field');

// button.addEventListener('click', ()=>{
//     var paragraph = document.createElement('p');
//     paragraph.innerText = inputField.value; // This to create the value in paragraph section 
//     field.appendChild(paragraph);
//     inputField.value = ""; // This is to clear the input field (always workable)

//     paragraph.addEventListener('click', ()=>
//     {
//        paragraph.style.textDecoration = 'line-through'; 
//     });
//     paragraph.addEventListener('dblclick', ()=>
//     {
//         field.removeChild(paragraph);
//     })


// })


// PRACTICE 2:

// let btn = document.querySelector('#btn');
// let input_section = document.querySelector('#input_field');
// let input_collector = document.querySelector('.present_field');

// btn.addEventListener('click', ()=>{
//     let paragraph = document.createElement('p');
//     paragraph.innerText = input_section.value;
//     input_collector.appendChild(paragraph);
//     input_section.value = '';
    
//         paragraph.addEventListener('click', ()=>{
//             paragraph.style.textDecoration = 'line-through';
//         });

//             input_collector.addEventListener('dblclick', ()=>{
//                 input_collector.removeChild(paragraph);
//             });
// })



// DAY 3: Best Method.
// Linking:
let inputDisplay = document.querySelector('#input_field');
let button = document.querySelector('#btn');
let presentField = document.querySelector('.present_field');
// EventListeners:
button.addEventListener('click', ()=>{
  let currentInput = inputDisplay.value;

// Creating Elements: to hold the inputed item.
  let holdingValue = document.createElement('p');

// Adding value in the new created element:
  holdingValue.textContent = currentInput;

// subElements for holding more than one value:
  presentField.appendChild(holdingValue);
  // to clear the input display:
  inputDisplay.value = '';
});
