const formVerifica = document.getElementById('form-verifica');
let formValido = false;

function validaFormulario(numeroA, numeroB){
    return numeroB > numeroA;
}

formVerifica.addEventListener('submit', function(e){
    e.preventDefault();

    numeroA = document.getElementById('numero-a');
    numeroB = document.getElementById('numero-b');
    const mensagemSucesso = 'O formulário é válido!';
    const mensagemErro = 'O formulário não é válido!';

    formValido = validaFormulario(numeroA.value, numeroB.value);
    
    if(formValido){
        const containerMensagemSucesso = document.querySelector('.mensagem');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        //alert(numeroB.value + ' é maior que ' + numeroA.value + '. O formulário é válido!');
    }else{
        const containerMensagemErro = document.querySelector('.mensagem');
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';
        //alert(numeroB.value + ' é menor que ' + numeroA.value + '. O formulário não é válido!');
    }

    numeroA.value = '';
    numeroB.value = '';
});