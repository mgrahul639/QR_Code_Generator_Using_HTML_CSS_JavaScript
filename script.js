

let imgBox = document.querySelector('#imgBox');
let qrimg = document.querySelector('#qrimg');
let qrtext = document.querySelector('#qrtext');
 

function generateQR(){
  if(qrtext.value.length > 0){
   qrimg.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + qrtext.value;

   imgBox.classList.add("show-img");
  } else{
   qrtext.classList.add("error");
   setTimeout(() => {
    qrtext.classList.remove("error");
   }, 1000);
   imgBox.classList.remove("show-img");   
  }
}