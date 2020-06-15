// Preventivo biglietto del treno

var preventivo;

// creo una variabile con un prezzo fisso al km

var prezzoKm = 0.21;

// Chiedo la distanza in kilometri

var km = parseFloat(prompt("Per favore inserisci quanti km desideri percorrere"));

console.log(km);

// Chiedo l'età del passeggero

var eta = parseInt(prompt("Per favore inserisci la tua età"));

console.log(eta);

// Calcolo il prezzo totale del biglietto

var prezzoIntero = km * prezzoKm;

console.log(prezzoIntero);

// Applico eventuali riduzioni

if (eta < 18 ){
  preventivo = prezzoIntero * 0.8;
} else if (eta >= 65){
  preventivo = prezzoIntero * 0.6;
} else{
  preventivo = prezzoIntero;
}

console.log(preventivo)

// Stampo il preventivo

document.getElementById("preventivo").innerHTML = preventivo;
