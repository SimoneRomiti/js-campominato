// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.

// FATTO

// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito

// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50

// FUNZIONE RICERCA DUPLICATO
function ricerca(array, num){

  var k = 0;
  trovato = false;

  while(k < array.length && trovato == false){

    if(array[k] == num){
      trovato = true;
      k++;
    } else{
      k++;
    }

  }

  return trovato;
}

// VARIABILI
var arrayPc = [];
var i = 0;
var numero;
var j;
var controllo;

// GENERATORE ARRAY BOMBE PC SENZA DUPLICATI
arrayPc[i] = Math.floor(Math.random() * (101 - 1) ) + 1;
console.log("Pos", (i + 1), ":", arrayPc[i]);

for(i = 1; i < 16; i++){

  numero = Math.floor(Math.random() * (101 - 1) ) + 1;

  controllo = ricerca(arrayPc, numero);

  if(controllo){
    i = i - 1;
  } else {
    arrayPc[i] = numero;
  }
  console.log("Pos", (i + 1), ":", arrayPc[i]);

}
console.log("Array Bombe: ", arrayPc);
