// let titulo = document.querySelector('h1');
// itulo.innerHTML = 'Jogo do numero secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um numero entre 1 e 10!';

let numeroSecreto = gerarNumeroAleatorio();


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do numero secreto');
exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10!');


function verificarChute() {
    let chute = document.querySelector('input');
    if (numeroSecreto === chute) {
        exibirTextoNaTela('p', 'Parabéns! Você acertou!');
    } else {
        exibirTextoNaTela('p', 'Que pena! Você errou!');
    }
    console.log('O botão foi clicado.');
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

