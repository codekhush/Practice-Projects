let inPut = document.querySelector('#in_put');
let outPut = document.querySelector('#output');

console.log(inPut, outPut);

inPut.addEventListener('input', ()=>{
  let passWord = inPut.value;
  console.log(passWord);

  if(passWord.length<8){
    outPut.innerText = 'Password Short';
    outPut.style.color = 'red';
  }else if(passWord.search(/[a-z]/)==-1){
    outPut.innerText = 'Missing LowerCase';
    outPut.style.color = 'red';
  }else if(passWord.search(/[A-Z]/)==-1){
    outPut.innerText = 'Missing Uppercase';
    outPut.style.color = 'red';
  }else if(passWord.search(/[0-9]/)==-1){
    outPut.innerText = 'Missing Numeric Value';
    outPut.style.color = 'red';
  }else if(passWord.search(/[\!\@\#\$\%\^\&\*\(\)]/)==-1){
    outPut.innerText = 'Missing Special Case';
    outPut.style.color = 'red';
  }
  else{
    outPut.innertext = 'Strong Password';
    outPut.style.color = 'green';
  }

})