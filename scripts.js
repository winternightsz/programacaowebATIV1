//Filme//
function salvarFilmeNome(){
    sessionStorage.setItem('filmenome', document.getElementsByClassName('filmenome').value);
}
var sala = 1;
function salvarFilme(){
    sessionStorage.setItem('filmenome', document.getElementById('filmenome').textContent);
    sessionStorage.setItem('horario', document.getElementById('horario').textContent);
    sessionStorage.setItem('sala', sala);    
    }
//Assento//
var assento;
function salvarAssento(){
    assento = document.querySelectorAll('input[type=checkbox]:checked'.valueOf);
    sessionStorage.setItem('assento', assento);   
} 
    
//Comida//

var comidascont = 0;

function salvarComidas(x){   
    sessionStorage.setItem('comidas' + comidascont, x);
    comidascont++;
    sessionStorage.setItem('contador', comidascont);
}

//Pagamento//  
function salvarPagamento() {  
    sessionStorage.setItem('nome-cartao', document.getElementById('nome-cartao').value);
    sessionStorage.setItem('numero-cartao', document.getElementById('numero-cartao').value);
    sessionStorage.setItem('validade', document.getElementById('validade').value);
    sessionStorage.setItem('cvv', document.getElementById('cvv').value);
} 

function carregarItensDeConfirmacao(){
    let cont = sessionStorage.getItem('contador');
    document.getElementById('filmenome').textContent = sessionStorage.getItem('filmenome');
    document.getElementById('horario').textContent = sessionStorage.getItem('horario');
    document.getElementById('sala').textContent = sessionStorage.getItem('sala');
    document.getElementById('assento').textContent = 'R$' + sessionStorage.getItem('assento');
    for (let i = 0; i < cont; i++) {
    document.getElementById('comidas').innerHTML += sessionStorage.getItem('comidas' + i) + '<br>';

    }
    document.getElementById('nomecomidas').textContent = 'R$' + sessionStorage.getItem('contador');

    document.getElementById('nome-cartao').textContent = sessionStorage.getItem('nome-cartao');
    document.getElementById('numero-cartao').textContent = sessionStorage.getItem('numero-cartao');
    document.getElementById('validade').textContent = sessionStorage.getItem('validade');
    document.getElementById('cvv').textContent = sessionStorage.getItem('cvv');

}
