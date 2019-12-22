const numRandomElement = document.querySelector('div.numRandom');
const bodyElement = document.querySelector('body');
const caracterElement = document.querySelector('p#caracter');
const numeroElement = document.querySelector('p#numero');
const fristElement = document.querySelector('p#frist');

numRandomElement.addEventListener('mouseenter', function Enter() {
    bodyElement.style.backgroundColor = 'black';
    bodyElement.style.transition = '1s';

    fristElement.style.color = 'white';
    fristElement.style.transition = '1s';

    numeroElement.style.color = 'white';
    numeroElement.style.transition = '1s';

    caracterElement.style.color = 'white';
    caracterElement.style.transition = '1s';

    numRandomElement.style.backgroundColor = 'black';
    numRandomElement.style.transition = '1s';
});

numRandomElement.addEventListener('mouseout', function Out() {
  bodyElement.style.backgroundColor = 'yellow';
  bodyElement.style.transition = '1s';
  
  fristElement.style.color = 'black';
  fristElement.style.transition = '1s';

  numeroElement.style.color = 'black';
  numeroElement.style.transition = '1s';
  
  caracterElement.style.color = 'black';
  caracterElement.style.transition = '1s';
  
  numRandomElement.style.backgroundColor = 'white';
  numRandomElement.style.transition = '1s';
});