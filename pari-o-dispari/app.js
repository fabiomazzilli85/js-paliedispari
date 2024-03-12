// JS genera un numero randomico compreso tra 1 e 5.
// Nella console del browser, visualizzo il numero generato da JS.
let randomNumber = Math.floor(Math.random() * 5) + 1;
console.log(randomNumber);

// La consegna prevede che a generare il numero sia espressamente una funzione, ma se la implemento la console del  browser restuisce un errore che rende impossibile la successiva somma tra i due numeri (quello generato da JS e quello generato dall`utente). 

// Ora chiedo all'utente di scegliere tra un numero pari e uno dispari.
// Dopodiché chiedo all'utente di inserire un numero compreso tra 1 e 5.
let userInput = prompt("Scegli tra un numero pari e uno dispari");
let userNumber = parseInt(prompt("Per favore inserisci un numero da 1 a 5"));

// Chiamo al funzione per ottenere la somma dei due numeri
let result = sumNumbers(randomNumber, userNumber);

// Un console.log che mostra a schermo il `result` preceduto da una stringa di testo.
console.log("La somma dei due numeri è:", result);

// Con la
function sumNumbers(randomNumber, userNumber) {

    let sum = randomNumber + userNumber;
    return sum; // Restituisci la somma
}

if (result % 2 === 0) {
    console.log("La somma è un numero pari.");
} else {
    console.log("La somma è un numero dispari.");
}

if (userNumber > randomNumber) {
    console.log("Hai vinto, congratulazioni!");
} else {
    console.log("Mi dispiace, hai perso.");
}