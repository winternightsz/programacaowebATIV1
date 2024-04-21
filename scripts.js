//Filme//
function salvarFilmeNome(){
    sessionStorage.setItem('filmenome', document.getElementsByClassName('filmenome').value);
    
}

function salvarFilme(){
    sessionStorage.setItem('filmenome', document.getElementById('filmenome').textContent);
    sessionStorage.setItem('horario', document.getElementById('horario').textContent);
    sessionStorage.setItem('sala', document.getElementById('sala').value);    
    }
//Assento//
var assento;
function salvarAssento(){
    assento = document.querySelectorAll('input[type=checkbox]:checked'.valueOf);
    sessionStorage.setItem('assento', assento);   
} 
    
//Comida//
function salvarComida(){
    sessionStorage.setItem('comida', document.getElementById('comida').value);    
    }
//Pagamento//  
function salvarPagamento() {  
    sessionStorage.setItem('nome-cartao', document.getElementById('nome-cartao').value);
    sessionStorage.setItem('numero-cartao', document.getElementById('numero-cartao').value);
    sessionStorage.setItem('validade', document.getElementById('validade').value);
    sessionStorage.setItem('cvv', document.getElementById('cvv').value);
} 

function carregarItensDeConfirmacao(){

    document.getElementsByClassName('filme').textContent = sessionStorage.getItem('filme');
    document.querySelectorAll('input[type=checkbox]:checked').textContent = sessionStorage.getItem('assento');
    document.getElementsByClassName('comida').textContent = 'R$' + sessionStorage.getItem('comida');

    document.getElementById('nome-cartao').textContent = sessionStorage.getItem('nome-cartao');
    document.getElementById('numero-cartao').textContent = sessionStorage.getItem('numero-cartao');
    document.getElementById('validade').textContent = sessionStorage.getItem('validade');
    document.getElementById('cvv').textContent = sessionStorage.getItem('cvv');

}
