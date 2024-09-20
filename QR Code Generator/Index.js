let inPut = document.querySelector('.i_nput');
let butTon = document.querySelector('.btn');
let imaGe = document.querySelector('.img1');

console.log(inPut, butTon, imaGe);

butTon.addEventListener('click', ()=>{
  console.log('Hello');

  const inputValue = inPut.value;
  console.log(inputValue);

  if( !inputValue){
    alert('Insert the valid URL:');
  }else{
    imaGe.src= `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;

    imaGe.alt = `QR Code of ${inputValue}`;
  }
})

