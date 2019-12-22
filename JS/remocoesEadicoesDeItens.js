const coluna1Element = document.getElementById('coluna1');
const coluna2Element = document.getElementById('coluna2');
const coluna3Element = document.getElementById('coluna3');
const coluna4Element = document.getElementById('coluna4');
const coluna5Element = document.getElementById('coluna5');

export function RemoveBotao() {
  document.querySelector('input.botao').remove();
}

export function CreateElement (armazenadorTemp){
  let element = document.createElement('div');
  element.setAttribute('class', 'box');
  element.innerHTML = armazenadorTemp;
  
  if (armazenadorTemp >= 1 && armazenadorTemp <= 15) {
    coluna1Element.appendChild(element);

  } else if (armazenadorTemp > 15 && armazenadorTemp <= 30) {
    coluna2Element.appendChild(element);

  } else if (armazenadorTemp > 30 && armazenadorTemp <= 45) {
    coluna3Element.appendChild(element);

  } else if (armazenadorTemp > 45 && armazenadorTemp <= 60) {
    coluna4Element.appendChild(element);

  } else if (armazenadorTemp > 60 && armazenadorTemp <= 75) {
    coluna5Element.appendChild(element);

  }
}
