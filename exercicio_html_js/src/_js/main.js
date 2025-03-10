const form = document.getElementById("form-depositor");

form.addEventListener('submit', function(event){
   event.preventDefault();

    
    const campoA = document.getElementById('CampoA').value;
    const campoB = document.getElementById('CampoB').value;
    const erroMessagem = document.querySelector('.erro-messagem');
    const successoMessagem = document.querySelector('.successo-messagem');
    const numeroA = parseFloat(campoA);
    const numeroB = parseFloat(campoB);


    erroMessagem.textContent = '';
    successoMessagem.textContent = '';
    

    if(numeroA === 0 || numeroB === 0){
            if(numeroA == 0){
                erroMessagem.className = "messagem negativo";
                return(erroMessagem.textContent = "Preencha ambos os campos ser zero.");
            }else if(numeroB == 0){
                erroMessagem.className = "messagem negativo";
                
                return(erroMessagem.textContent = "Preencha ambos os campos ser zero.");
            }
    }else{
        if(numeroB > numeroA){
            successoMessagem.className = "messagem positivo";
            return(successoMessagem.textContent = "O Formuário válido! o número B é maior que o número A.")
        }else{
            erroMessagem.className = "messagem negativo";
            return(erroMessagem.textContent = "O Formuário válido! o número A é maior que o número B.")
        }
    }

});
