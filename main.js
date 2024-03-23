const form = document.getElementById('form-deposito');
const nomeBeneficiario = document.getElementById('nome-beneficiario');
let formEValido = false;

function validaNome(nomeCompleto){
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

//adiciona ouvintes para eventos dos elementos
form.addEventListener('submit', function(e){
    e.preventDefault();

    const numeroContaBeneficiario = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito');
    const descricaoDeposito = document.getElementById('descricao');
    const mensagemSucesso = 'Valor de <b>' + valorDeposito.value + '</b> depositado para o cliente <b>' + nomeBeneficiario.value + '</b>, conta <b>' + numeroContaBeneficiario.value + '</b> com sucesso!';

    formEValido = validaNome(nomeBeneficiario.value);
    if(formEValido){
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        nomeBeneficiario.value = '';
        numeroContaBeneficiario.value = '';
        valorDeposito.value = '';
        descricaoDeposito.value = '';
    }else{
        nomeBeneficiario.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }
})

//keyup pega o evento em tempo real
nomeBeneficiario.addEventListener('keyup', function(e){
    console.log(e.target.value);
    formEValido = validaNome(e.target.value);

    if(!formEValido){
        nomeBeneficiario.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    }else{
        nomeBeneficiario.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
});