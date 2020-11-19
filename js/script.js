// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
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
var arrayUtente = [];
var i = 0;
var numero;
var j;
var controlloDuplicatoPc;
var controlloDuplicatoUtente = false;
var esitoUtente;

// GENERATORE ARRAY BOMBE PC SENZA DUPLICATI
arrayPc[i] = Math.floor(Math.random() * (101 - 1) ) + 1;
console.log("Pos", (i + 1), ":", arrayPc[i]);

for(i = 1; i < 16; i++){

  numero = Math.floor(Math.random() * (101 - 1) ) + 1;

  controlloDuplicatoPc = ricerca(arrayPc, numero);

  if(controlloDuplicatoPc){
    i = i - 1;
  } else {
    arrayPc[i] = numero;
  }
  console.log("Pos", (i + 1), ":", arrayPc[i]);

}
console.log("Array Bombe: ", arrayPc);


// UTENTE
i = 0;
j = 0;

// CONTROLLO PRIMO NUMERO UTENTE SE PRESENTE IN ARRAY BOMBE PC
arrayUtente[i] = parseInt(prompt("Inserisci un numero"));
esitoUtente = ricerca(arrayPc, arrayUtente[i]);
console.log(esitoUtente);

if(esitoUtente){
  alert("Hai Perso! Punteggio:" + " " + i);
} else {
  i = i + 1;
  // CONTROLLO SU TUTTI GLI ALTRI NUMERI INSERITI SIA SE PRESENTI SU ARRAY BOMBE PC CHE SE DUPLICATI IN ARRAY UTENTE
  while(i < 5 && esitoUtente == false && controlloDuplicatoUtente == false){

    numeroUtente = parseInt(prompt("Inserisci un numero"));
    // CONTROLLO DUPLICATO ARRAY UTENTE
    controlloDuplicatoUtente = ricerca(arrayUtente, numeroUtente);
    console.log("Controllo utente", controlloDuplicatoUtente);

    if(controlloDuplicatoUtente){
      alert("Non puoi inserire un numero già inserito!");
      controlloDuplicatoUtente = false;
      i = i - 1;
      i++;
    } else{

      arrayUtente[i] = numeroUtente;
      // CONTROLLO SE PRESENTE IN ARRAY BOMBE PC
      esitoUtente = ricerca(arrayPc, arrayUtente[i]);
      if(esitoUtente){
        alert("Hai perso! Punteggio" + " " + i);
        i++;
      } else{

        i++;
      }
    }

  }
  if(i >= 5 && esitoUtente == false){
    alert("Hai vinto! Punteggio massimo:" + " " + i);
  }

}
