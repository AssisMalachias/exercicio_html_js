const formulario = document.getElementById("formulario");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener('submit', function(e){
    e.preventDefault();// Evita recarregar a página

    const campoA = parseFloat(document.getElementById("CampoA").value);
    const campoB = parseFloat(document.getElementById("CampoB").value);

    if(isNaN(campoA) || isNaN(campoB)){
        mensagem.textContent = "Por favor, insira números válidos.";
        mensagem.style.color = "#ffff";
        mensagem.style.backgroundColor = "#F22222";
        return;
    }

    if((campoA <= 0) || (campoB <= 0))
    {
        mensagem.textContent = "Completor caixa outro numero";
        mensagem.style.color = "#fff";
        mensagem.style.display = "block";
        mensagem.style.backgroundColor = "#F22222";  
    }else{

    

    if (campoB > campoA) {
        mensagem.textContent = "Formulário válido! O número B é maior que o número A.";
        mensagem.style.color = "#fff";
        mensagem.style.display = "block";
        mensagem.style.backgroundColor = "#10E8D9";
    } else {
        mensagem.textContent = "Formulário inválido! O número A deve ser maior que o número B.";
        mensagem.style.color = "#fff";
        mensagem.style.display = "block";
        mensagem.style.backgroundColor = "#FFA916";
    }
}

})