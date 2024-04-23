//Filme//

var sala = 1;
function salvarFilme(){
    var checkboxes = document.querySelectorAll('input[type=checkbox]:checked');

      var horario = checkboxes[0];
      sessionStorage.setItem('sala', horario.value);
      sessionStorage.setItem('horario', horario.id);

    sessionStorage.setItem('filmenome', document.getElementById('filmenome').textContent);        
    }
//Assento//
var precoing = 0;
function salvarAssento() {
    
    var checkboxes = document.querySelectorAll('input[type=checkbox]:checked');

    var assentosEscolhidos = ""; //string
    
    for (var i = 0; i < checkboxes.length; i++) {
      var checkbox = checkboxes[i];
      
      if (assentosEscolhidos !== "") {
        assentosEscolhidos += ","; //eparador pra mostrar depois
      }
      assentosEscolhidos += checkbox.id;
      precoing += 12;
    }
    sessionStorage.setItem('assentosEscolhidos', assentosEscolhidos);
    sessionStorage.setItem('precoingresso', precoing);
    
  }
    
//Comida//

var comidascont = 0;
var comidaprecocont= 0 ; 
function salvarComidas(x){  
    sessionStorage.setItem('comidas' + comidascont, x);   
    comidascont++; 
    sessionStorage.setItem('contador', comidascont);

    var num = parseInt(document.getElementById(x).value); // Converte para inteiro
    var precoArmazenado = sessionStorage.getItem('comidaspreco');

    if (precoArmazenado) { // Verifica se o valor existe na sessão
        comidaprecocont = parseInt(precoArmazenado); // Converte para inteiro
    }

    comidaprecocont += num;
    sessionStorage.setItem('comidaspreco', comidaprecocont.toString());  
    alert("Voce adicionou " + x + ".");
}

//Pagamento//  
function salvarPagamento() {  
    sessionStorage.setItem('nome-cartao', document.getElementById('nome-cartao').value);
    sessionStorage.setItem('numero-cartao', document.getElementById('numero-cartao').value);
    sessionStorage.setItem('validade', document.getElementById('validade').value);
    sessionStorage.setItem('cvv', document.getElementById('cvv').value);
}  

function adicionar(){
  var preco1 = sessionStorage.getItem('comidaspreco');
  var preco2 = sessionStorage.getItem('precoingresso');
  var res = parseInt(preco1) + parseInt(preco2);
  sessionStorage.setItem('total', res.toString());
}

function carregarItensDeConfirmacao(){

    let cont = sessionStorage.getItem('contador');
    document.getElementById('filmenome').textContent = sessionStorage.getItem('filmenome');
    document.getElementById('precoingresso').textContent = 'R$' +  sessionStorage.getItem('precoingresso');
    document.getElementById('horario').textContent = sessionStorage.getItem('horario');
    document.getElementById('sala').textContent = sessionStorage.getItem('sala');
    document.getElementById('assento').textContent = sessionStorage.getItem('assentosEscolhidos');
    for (let i = 0; i < cont; i++) {
    document.getElementById('comidas').innerHTML += sessionStorage.getItem('comidas' + i) + '<br>';

    }
    document.getElementById('nomecomidas').textContent = 'R$' + sessionStorage.getItem('comidaspreco');

    document.getElementById('nome-cartao').textContent = sessionStorage.getItem('nome-cartao');
    document.getElementById('numero-cartao').textContent = sessionStorage.getItem('numero-cartao');
    document.getElementById('validade').textContent = sessionStorage.getItem('validade');
    document.getElementById('cvv').textContent = sessionStorage.getItem('cvv');
    document.getElementById('total').textContent = sessionStorage.getItem('total');
}
