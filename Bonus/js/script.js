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
  document.getElementById("sconto").innerHTML = eta + " anni ha diritto ad uno sconto riservato ai minorenni";
} else if (eta >= 65){
  preventivo = prezzoIntero * 0.6;
  document.getElementById("sconto").innerHTML = eta + " anni ha diritto ad uno sconto riservato all'utenza senior";
} else{
  preventivo = prezzoIntero;
  document.getElementById("sconto").innerHTML = eta + " anni purtroppo non ha diritto a riduzioni";
}

console.log(preventivo);

// arrotondo il preventivo a due cifre decimali fisse

preventivoFixed = preventivo.toFixed(2);

console.log(preventivoFixed);



// Stampo il preventivo

document.getElementById("preventivo").innerHTML = preventivoFixed;

// bonus

// Utilizzo la i metodi di data per dare una scadenza all'offerta

var d = new Date();

// creo una stringa con la data di validità dell'offerta

var minutiOfferta = d.getMinutes() + 1;

var validitaOfferta = d.getHours() + ":" + minutiOfferta + " del " + d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();

console.log(validitaOfferta);

// stampo validità offerta

document.getElementById("validita").innerHTML = validitaOfferta;
