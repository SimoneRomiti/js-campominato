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
var esitoUtente = false;
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
}
console.log(max);


// GENERATORE ARRAY BOMBE PC SENZA DUPLICATI
i = 0;
while(i < 16){

  numero = random(max, 1);

  controlloDuplicatoPc = ricerca(arrayPc, numero);

  if(controlloDuplicatoPc == false){
    arrayPc[i] = numero;
    console.log("Posizione", i + 1, ":", arrayPc[i]);
    i++;
  }

}
console.log("Array Bombe: ", arrayPc);

// CREAZIONE SCACCHIERA E AGGIUNTA CLASSE PER LE BOMBE
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

  // UTENTE INSERIMENTO PRIMO NUMERO
  i = 0;
  numeroUtente = parseInt(prompt("Inserisci un numero"));
  arrayUtente[i] = numeroUtente;
  // CONTROLLO SE IL PRIMO NUMERO E' PRESENTE IN ARRAY BOMBE PC
  esitoUtente = ricerca(arrayPc, arrayUtente[i]);
  if(esitoUtente){
    alert("Hai perso!\nPunteggio finale" + " " + i + "/" + (max - 1 - 16));
  } else {
    i = i + 1;

    // INSERIMENTO E CONTROLLO SU TUTTI GLI ALTRI NUMERI INSERITI SIA SE PRESENTI SU ARRAY BOMBE PC CHE SE DUPLICATI IN ARRAY UTENTE
    while(i < (max - 1 - 16) && esitoUtente == false && controlloDuplicatoUtente == false){

      numeroUtente = parseInt(prompt("Ottimo, la cella numero " + arrayUtente[i - 1] + " non contiene bombe!\nPunteggio attuale: " + i + "/" + (max - 1 - 16) +"\nInserisci il prossimo numero"));
      // CONTROLLO DUPLICATO ARRAY UTENTE
      controlloDuplicatoUtente = ricerca(arrayUtente, numeroUtente);
      console.log("Controllo utente", controlloDuplicatoUtente);

      if(controlloDuplicatoUtente){
        alert("Non puoi inserire un numero già inserito!");
        controlloDuplicatoUtente = false;
      } else{

        arrayUtente[i] = numeroUtente;
        // CONTROLLO SE PRESENTE IN ARRAY BOMBE PC
        esitoUtente = ricerca(arrayPc, arrayUtente[i]);
        if(esitoUtente){
          alert("Hai perso!\nPunteggio finale" + " " + i + "/" + (max - 1 - 16));
          i++;
        } else{

          i++;
        }
      }

    }

  }



if(i >= 5 && esitoUtente == false){
  alert("Hai vinto!\nPunteggio massimo" + " " + i + "/" + (max - 1 - 16));
}

var x = document.getElementsByClassName("chessbox bomb");
for(i = 0; i < arrayPc.length; i++){
  x[i].style.background = "red";
}

document.getElementById("play").disabled = true;
}
);


// PULSANTE RESET
document.getElementById("reset").addEventListener("click",
function(){

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
  }
  console.log(max);


  // GENERATORE ARRAY BOMBE PC SENZA DUPLICATI
  i = 0;
  while(i < 16){

    numero = random(max, 1);

    controlloDuplicatoPc = ricerca(arrayPc, numero);

    if(controlloDuplicatoPc == false){
      arrayPc[i] = numero;
      console.log("Posizione", i + 1, ":", arrayPc[i]);
      i++;
    }

  }
  console.log("Array Bombe: ", arrayPc);

  document.getElementById("chessmate").innerHTML = "";

  // CREAZIONE SCACCHIERA E AGGIUNTA CLASSE PER LE BOMBE
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

document.getElementById("play").disabled = false;
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
