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

// FUNZIONE NUMERO RANDOM
function random(numMax, numMin){
  numCas = Math.floor(Math.random() * (numMax - numMin) ) + numMin;
  return numCas;
}


// VARIABILI
var arrayPc = [];
var arrayUtente = [];
var i = 0;
var numero;
var j;
var controlloDuplicatoPc;
var controlloDuplicatoUtente = false;
var numeroUtente;
var esitoUtente;
var difficulty;
var max;


difficulty = parseInt(prompt("Seleziona la difficoltà: 0, 1 o 2"));
console.log(difficulty);
while(isNaN(difficulty) || difficulty != 0 && difficulty != 1 && difficulty != 2){
  alert("Devi inserire un numero che sia 0, 1 o 2");
  difficulty = parseInt(prompt("Selezionare la difficoltà: 0, 1 o 2"));

}

switch(difficulty){
  case 0:
  max = 101;
    break;
  case 1:
  max = 81;
    break;
  case 2:
  max = 51;
    break;
  default:

}
console.log(max);

i = 0;

// GENERATORE ARRAY BOMBE PC SENZA DUPLICATI
arrayPc[i] = random(max, 1);
console.log("Pos", (i + 1), ":", arrayPc[i]);

for(i = 1; i < 16; i++){

  numero = random(max, 1);

  controlloDuplicatoPc = ricerca(arrayPc, numero);

  if(controlloDuplicatoPc){
    i = i - 1;
  } else {
    arrayPc[i] = numero;
  }
  console.log("Pos", (i + 1), ":", arrayPc[i]);

}
console.log("Array Bombe: ", arrayPc);
// CREAZIONE SCACCHIERA
for(i = 0; i < max - 1; i++){
  trovato = false;
  j = 0;
  while(j < arrayPc.length && trovato == false){
    if(arrayPc[j] == i+1){
      trovato = true;
      document.getElementById("chessmate").innerHTML += "<div class='chessbox bomb'>" + (i + 1) + "</div>";
      j++;
    } else{
      j++;
    }
  }
  if(trovato == false){
    document.getElementById("chessmate").innerHTML += "<div class='chessbox'>" + (i + 1) + "</div>";
  }

}

// PREMERE GIOCA PER GIOCARE
document.getElementById("play").addEventListener("click",
function(){

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
var x = document.getElementsByClassName("chessbox bomb");
for(i = 0; i < arrayPc.length; i++){
  x[i].style.background = "red";
}

document.getElementById("play").disabled = true;
}
);




// document.getElementById("play").addEventListener("click",
// function(){
//   arrayUtente[i] = document.getElementById("input-number").value;
//   console.log("numero utente", arrayUtente[i]);
//
//   esitoUtente = ricerca(arrayPc, arrayUtente[i]);
//   console.log(esitoUtente);
//
//   if(esitoUtente){
//     alert("Hai Perso! Punteggio:" + " " + i);
//   } else {
//     i = i + 1;
//   }
// }
// );
