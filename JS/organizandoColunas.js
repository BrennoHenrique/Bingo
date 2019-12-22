const coluna1Element = document.getElementById('coluna1');
const coluna2Element = document.getElementById('coluna2');
const coluna3Element = document.getElementById('coluna3');
const coluna4Element = document.getElementById('coluna4');
const coluna5Element = document.getElementById('coluna5');

export default function VerificandoTamanhoDiv() {

  let aux = [0, 0, 0, 0, 0];
  let indiceDoMaior = 0;

  aux[0] = coluna1Element.offsetHeight;
  aux[1] = coluna2Element.offsetHeight;
  aux[2] = coluna3Element.offsetHeight;
  aux[3] = coluna4Element.offsetHeight;
  aux[4] = coluna5Element.offsetHeight;

  for (let indice = 1; indice < aux.length; indice++) {
    if (aux[indiceDoMaior] < aux[indice]) {
      indiceDoMaior = indice;
    }
  }

  indiceDoMaior = aux[indiceDoMaior];

  coluna1Element.style.height = `${Number.parseInt(indiceDoMaior)}`;
  coluna2Element.style.height = `${Number.parseInt(indiceDoMaior)}`;
  coluna3Element.style.height = `${Number.parseInt(indiceDoMaior)}`;
  coluna4Element.style.height = `${Number.parseInt(indiceDoMaior)}`;
  coluna5Element.style.height = `${Number.parseInt(indiceDoMaior)}`;
}