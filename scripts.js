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
/*function salvarComidas(x){
    sessionStorage.setItem('comidas', x);
      if (x=="Pipoca Pequena"){
        sessionStorage.setItem('nomecomidas', '12');
      }else{
        sessionStorage.setItem('nomecomidas', '0');
      }
}*/
var comidascont = 0;
var comidasvet;
function salvarComidas(x){
    sessionStorage.setItem('comidas'+ comidascont, x);
      comidascont++;
}

//Pagamento//  
function salvarPagamento() {  
    sessionStorage.setItem('nome-cartao', document.getElementById('nome-cartao').value);
    sessionStorage.setItem('numero-cartao', document.getElementById('numero-cartao').value);
    sessionStorage.setItem('validade', document.getElementById('validade').value);
    sessionStorage.setItem('cvv', document.getElementById('cvv').value);
} 

function carregarItensDeConfirmacao(){

    document.getElementById('filmenome').textContent = 'R$' + sessionStorage.getItem('filmenome');
    document.getElementById('assento').textContent = 'R$' + sessionStorage.getItem('assento');
    
    document.getElementById('nomecomidas').textContent = 'R$' + sessionStorage.getItem('nomecomidas');

    document.getElementById('nome-cartao').textContent = sessionStorage.getItem('nome-cartao');
    document.getElementById('numero-cartao').textContent = sessionStorage.getItem('numero-cartao');
    document.getElementById('validade').textContent = sessionStorage.getItem('validade');
    document.getElementById('cvv').textContent = sessionStorage.getItem('cvv');

}

function carregarComidas(){
    var i = 0;
    for (i; i <= comidascont.length; i++) {
        document.getElementById('comidas').textContent = sessionStorage.getItem('comidas' + 0);    
    }
}
