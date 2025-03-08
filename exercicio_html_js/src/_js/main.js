const form = document.getElementById('form-depositor');
const nomeBenficiario = document.getElementById('nome-beneficiario');
let formEValido = false;

function validaNome(nomeCompleto){
    const nomeComoArray =  nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}


form.addEventListener('submit', function(e){
   e.preventDefault();

   const numeroContaBeneficiario = document.getElementById('numero-conta');
   const valorDepositor = document.getElementById('valor-depositor');
   const mensagemSucesso = `Montante de: <b>${valorDepositor.value}</b> depositado para o cliente <b>${nomeBenficiario.value}</b> - conta: <b>${numeroContaBeneficiario.value}</b>`;
   const mensagemErro = `O nome precisa ser completor`;

   formEValido = validaNome(nomeBenficiario.value);
   if(formEValido) {
       const containerMenssagemSuccesso =  document.querySelector('.successo-messagem');
       containerMenssagemSuccesso.innerHTML = mensagemSucesso;
       containerMenssagemSuccesso.style.display = 'block'
   }else {
      const containerMenssagemErro = document.querySelector('.erro-messagem');
      nomeBenficiario.style.border = '1px solid red';
      containerMenssagemErro.innerHTML = mensagemErro;
      containerMenssagemErro.style.display = 'block'
   }
})

nomeBenficiario.addEventListener('keyup', function(e){
   console.log(e.target.value);
   formEValido = validaNome(e.target.value);

   if(!formEValido) {
       nomeBenficiario.style.border = '1px solid red';
       document.querySelector('.erro-messagem').style.display = 'block'
  }else {
      nomeBenficiario.style.border = 'none';
      document.querySelector('.erro-messagem').style.display = 'none';
      
  }

});