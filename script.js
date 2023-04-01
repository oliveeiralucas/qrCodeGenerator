const container = document.querySelector('.content');
const btnGenerator = container.querySelector('.buttonGenerate button');
const qrCode = container.querySelector('.codeImage');
const qrCodeImage = container.querySelector('.codeImage img');
const textInput = container.querySelector('.inputBox input');


btnGenerator.addEventListener('click', () => {
  

    let text = textInput.value;
    console.log(text);
    if(!text) return;
   btnGenerator.innerText = 'Gerando Qr Code...';
    fetch(`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${text}`)
   .then(res => res.blob())
   .then(blob => {
      const imgUrl = URL.createObjectURL(blob);
      qrCodeImage.setAttribute('src', imgUrl);

 });

 qrCodeImage.addEventListener('load', () => {
   container.classList.add('active');
   qrCode.classList.add('actived');
   btnGenerator.innerText = 'Gerar QR Code';
});

});



