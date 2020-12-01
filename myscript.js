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



// ESERCIZIO 3
// è POSSIBILE DEFINIRE UNA FUNZIONE IN MODO BREVE
console.log("Esercizio 3 con Arrow function");
const myFunction = () => 4 + 1;
const resultFunction = myFunction();
console.log(resultFunction);


// ESERCIZIO 4
console.log("Esercizio 4 Object");
var studenti =[
  {
    nome: "emilio",
    cognome: "furnari",
    eta: 33,
  },
  {
    nome: "pippo",
    cognome: "rossi",
    eta: 33,
  },
  {
    nome: "topolino",
    cognome: "bianchi",
    eta: 85,
  },
  {
    nome: "paperino",
    cognome: "duck",
    eta: 80,
  },
  {
    nome: "pietro",
    cognome: "gambadilegno",
    eta: 80,
  },
];
let nome = prompt("Scrivi il tuo nome?");
let cognome = prompt("qual'è il tuo cognome?");
let eta = parseInt(prompt("quanti anni hai?"));
// POSSO DEFINIRE IL MIO ATTIBUTO:VALORE COME IL NOME STESSO DELLA DELLA VARIABILE DALLA QUALE PRELEVO IL DATO
const nuovoStudente = {
  nome,
  cognome,
  eta,
};
console.log(nuovoStudente);
studenti.push(nuovoStudente);
console.log(studenti);



// ESERCIZIO 5
console.log("ESERCIZIO 5 REST(...number) e SPREAD(...)");
function somma(...number) {
  var somma = 0
  for (var i = 0; i < number.length; i++) {
   somma = somma + number[i];
  }
  return somma;
}
// POSSO METTERE N ELEMENTI NELLA MIA FUNZIONE
var result = somma(5,5,5,5,5,5,5,5,5,5);
console.log(result);



// ESERCIZIO 6
console.log("Esercizio 6 backitick");
// CONCATENAZIONE CON BACKTICK
let string = 'Qui';
let stringTwo = 'Qua';
console.log(`${string} Quo ${stringTwo} Andarono al mercato`);
