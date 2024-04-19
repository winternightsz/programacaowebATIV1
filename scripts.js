//Filme//
function salvarFilmeNome(){
    sessionStorage.setItem('filmenome', document.getElementsByClassName('filmenome').value);
}

function salvarFilme(){
    sessionStorage.setItem('horario', document.getElementsByClassName('horario').value);
    sessionStorage.setItem('sala', document.getElementsByClassName('sala').value);    
    }
//Assento//
var assento = document.querySelectorAll('input[type=checkbox]:checked'.valueOf)
function salvarAssento(){
    sessionStorage.setItem('assento', assento);    
    } 
//Comida//
function salvarComida(){
    sessionStorage.setItem('comida', document.getElementsByClassName('comida').value);    
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
    document.getElementById('validade').textContent = 'R$' + sessionStorage.getItem('validade');
    document.getElementById('cvv').textContent = sessionStorage.getItem('cvv');

}
