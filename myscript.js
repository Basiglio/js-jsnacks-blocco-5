// /jsnack 3
// //Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri
console.log("Esercizio 1 con ES5");
var min = parseInt(prompt("Inserisci il numero minimo"));
var max = parseInt(prompt("Inserisci un numero massimo"));
var arrayN = ["emilio","laura","elena","greta","riccardo","giuseppe","luca"];
console.log("Vecchio Array");
console.log(arrayN);

var nuovoArray = arrayMinMax(arrayN, min, max);
console.log("Nuovo Array");
console.log(nuovoArray);


function arrayMinMax(array, minNum, maxNum) {
  // GENERO ARRAY VUOTO
  var nuovoArray = [];
  // CICLO L'ARRAY PASSATO ALLA FUNZIONE DAL NUMERO MINIMO AL NUMERO MASSIMO INSERITO DALL'UTENTE
  for (var i = minNum; i <= maxNum; i++) {
    // PUSHO IL VALORE DI I AD OGNI ITERAZIONE
    nuovoArray.push(array[i]);
  }
  // RITORNO NUOVO ARRAY PIENO
  return nuovoArray;
}


// ESERCIZIO 2
// ES 6
// AL POSTO DELLA KEYWORD VAR SI PUO UTILIZZARE ANCHE LET, CON LA DIFFERENZA CHE LET NON è SOGGETTA AD HOSTING QUINDI DOBBIAMO NECESSARIAMENTE DEFINIRLA PRIMA DI RICHIAMARLA
console.log("Esercizio 2 con ES6");
let min2 = 4;
let max2 = 6;
// CON LA KEYWORD CONST DEFINIAMO UNA COSTANTE CHE NON PUO ESSERE RIDEFINITA, PUOI SOLO AGGIUNGERE ELEMENTO O TOGLIERLO
const arrayN2 = ["emilio","laura","elena","greta","riccardo","giuseppe","luca"];
console.log("Vecchio Array");
console.log(arrayN2);

const nuovoArray2 = arrayMinMax(arrayN, min2, max2);
console.log("Nuovo Array");
console.log(nuovoArray2);

function arrayMinMax(array, minNum, maxNum) {
  var nuovoArray = [];
  for (var i = minNum; i <= maxNum; i++) {
    nuovoArray.push(array[i]);
  }
  return nuovoArray;
}
