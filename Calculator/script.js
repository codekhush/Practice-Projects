// let inputDisplay = document.querySelector('#input_display');
// let butTon = document.querySelector('#btn');

// function deletingLastDigit(){
//   const currentValue = inputDisplay.value;
//   const newValue = currentValue.slice(0, -1);
//   inputDisplay.value = newValue;
// }
// function deletingWhole(){
//   inputDisplay.value = ' ';
//   // wholeDisplay.value = ' ';
// }
// function buttonSeven(){
//   inputDisplay.value = 7;
// }
// function resultGiving(){
//   const wholeValue = inputDisplay.value;
//   const result = eval(wholeValue);
//   inputDisplay.value = result;
// }

// // METHOD 2:

// // Linking
// let inputDisplay = document.querySelector('#input_display');
// let butTon1 = document.querySelector('.btn1');
// let butTon2 = document.querySelector('.btn2');
// let butTon3 = document.querySelector('.btn3');
// let butTon4 = document.querySelector('.btn4');




// // EventListeners:
// butTon1.addEventListener('click', ()=>{
//   inputDisplay.value = " ";
// })

// butTon2.addEventListener('click', ()=>{
//   let currentValue = inputDisplay.value;
//   let newValue = currentValue.slice(0, -1);
//   inputDisplay.value = newValue;
// });

// butTon3.addEventListener('click', ()=>{
//  let currentValue = inputDisplay.value;
//  let newValue = inputDisplay.value + 7;
//  inputDisplay.value = newValue;
// })

// butTon4.addEventListener('click', ()=>{
//   inputDisplay.value += 3; 
// })

// // Create Elements: input  field with paragraph
// // appending the elements

// METHOD : 3 -

// LINKING:
let inputDisplay = document.querySelector('#input_display');
let butTon = document.querySelector('.btn');

// LINKING ONCLICK BY THE FUNCTION:
function deletingWhole(){
  inputDisplay.value = ' ';
}
function deletingLastDigit(){
  inputDisplay.value = inputDisplay.value.slice(0,-1);
}
function percentFunction(){
  inputDisplay.value = inputDisplay.value + '%';
}
function divideFucntion(){
  let currentValue = inputDisplay.value;
  let newValue = currentValue + '/';
  inputDisplay.value = newValue;
}
function buttonSeven(){
  inputDisplay.value = inputDisplay.value + 7;
}
function eightFunction(){
  inputDisplay.value += 8;
}
function nineFunction(){
  inputDisplay.value += 9;
}
function multipleFunction(){
  inputDisplay.value += '*';
}
function fourFunction(){
  inputDisplay.value += 4;
}
function fiveFunction(){
  inputDisplay.value += 5;
}
function sixFunction(){
  inputDisplay.value += 6;
}
function minusFunction(){
  inputDisplay.value += '-';
}
function oneFunction(){
  inputDisplay.value += 1;
}
function twoFunction(){
  inputDisplay.value += 2;
}
function threeFunction(){
  inputDisplay.value += 3;
}
function addFunction(){
  inputDisplay.value += '+';
}
function jheroFunction(){
  inputDisplay.value += '00';
}
function zeroFunction(){
  inputDisplay.value += 0;
}
function dotFunction(){
  inputDisplay.value += '.';
}
function resultFunction(){
  let currentValue = inputDisplay.value;
  let evaluatedValue = eval(currentValue);
  inputDisplay.value = evaluatedValue;
}












