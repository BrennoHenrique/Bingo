import { CreateElement, RemoveBotao } from './remocoesEadicoesDeItens.js';
import VerificandoTamanhoDiv from "./organizandoColunas.js";

const numRandomElement = document.querySelector('div.numRandom');
const botaoElement = document.querySelector('input.botao');
const caracterElement = document.querySelector('p#caracter');
const numeroElement = document.querySelector('p#numero');
const fristElement = document.querySelector('p#frist');

var vetor = [];

botaoElement.addEventListener('click', () => {
  numRandomElement.style.fontSize = '200pt';

  let cond = true;
  let condAux = false;
  var armazenadorTemp = 0;

  while (cond === true) {
    armazenadorTemp = Math.floor(Math.random() * 76);

    if (vetor.length == 74) {
      armazenadorTemp = ultimoNum(vetor);
      condAux = false;
      cond = false;
    } else if (vetor.length <= 74) {
      condAux = false;
      cond = VerificaNum(vetor, armazenadorTemp);
    } else {
      condAux = true;
      cond = false;

      numRandomElement.style.fontSize = '30pt';
      fristElement.innerHTML = 'Os números acabaram!';
      numeroElement.innerHTML = ``;
      caracterElement.innerHTML = ``;
      numRandomElement.style.backgroundColor = 'white';

      botaoElement.style.fontSize = '0pt';
      botaoElement.style.width = '0px';
      botaoElement.style.height = '0px';
      botaoElement.style.transform = 'rotate(360deg)';
      botaoElement.style.transition = '1s';

      setTimeout(RemoveBotao, 1000);
    }

    if (condAux != true) {
      console.log(vetor);
      console.log(armazenadorTemp + " | " + cond);
    } else {
      console.log('Os números acabaram!');
    }
  }
  if (condAux != true) {
    vetor.push(armazenadorTemp);

    numeroElement.style.color = 'black';
    caracterElement.style.color = 'black';

    fristElement.innerHTML = '';
    numeroElement.innerHTML = `${armazenadorTemp}`;

    caracterElement.style.fontWeight = 'bold';
    VerificaLetra(armazenadorTemp);

    CreateElement(armazenadorTemp);
  }
  VerificandoTamanhoDiv();
});


function VerificaNum(vetor, num) {
  let cond = false

  for (let indice = 0; indice < vetor.length && cond !== true; indice++) {
    if (num > 0 && num < 76) {
      if (vetor[indice] == num) {
        cond = true
      } else {
        cond = false
      }
    } else {
      cond = true;
    }
  }
  return cond;
}

function ultimoNum(vetor) {
  let cond = true;
  let num = 1;

  while (cond == true) {
    for (let indice = 0; indice < vetor.length; indice++) {
      if (vetor[indice] == num) {
        cond = true;
        break;
      } else {
        cond = false;
      }
    }
    if (cond == true) {
      num++;
    }
  }
  return num;
}

function VerificaLetra(armazenadorTemp) {
  if (armazenadorTemp >= 1 && armazenadorTemp <= 15) {
    caracterElement.innerHTML = 'B';
  } else if (armazenadorTemp > 15 && armazenadorTemp <= 30) {
    caracterElement.innerHTML = 'I';
  } else if (armazenadorTemp > 30 && armazenadorTemp <= 45) {
    caracterElement.innerHTML = 'N';
  } else if (armazenadorTemp > 45 && armazenadorTemp <= 60) {
    caracterElement.innerHTML = 'G';
  } else if (armazenadorTemp > 60 && armazenadorTemp <= 75) {
    caracterElement.innerHTML = 'O';
  }
}