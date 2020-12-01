// /jsnack 3
// //Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri

var min = parseInt(prompt("Inserisci il numero minimo"));
var max = parseInt(prompt("Inserisci un numero massimo"));
var arrayN = ["emilio","laura","elena","greta","riccardo","giuseppe", "luca"];
console.log(arrayN);

var nuovoArray = arrayMinMax(arrayN, min, max);
console.log(nuovoArray);


function arrayMinMax(array, minNum, maxNum) {
  // GENERO ARRAY VUOTO
  var nuovoArray = [];
  // CICLO DAL NUMERO MINIMO AL NUMERO MAX
  for (var i = minNum; i <= maxNum; i++) {
    // PUSHO IL VALORE DI I AD OGNI ITERAZIONE
    nuovoArray.push(array[i]);
  }
  // RITORNO ARRAY PIENO
  return nuovoArray;
}
