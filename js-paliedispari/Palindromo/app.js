function isPalindrome(word) {  
    // Creo una funzione, la chiamo `isPalindrome` e inserisco l'argomento (`word`)
    
    word = word.toLowerCase(); 
    // Converto l'argomento (`word`) in lowerCase. 
    
    let reversedWord = word.split('').reverse().join(''); 
     // Creo la variabile `reversedWord` ed eseguo lo `split` e il `reverse`
    
    if (word === reversedWord) {  
        alert("La parola inserita è un palindromo");
    } else {  //Altrimenti non è un palindromo
        alert("La parola inserita non è un palindromo");
    }
    // Se la parole è uguale al suo contrario, mando a schermo un `alert` con su scritto che `La parola inserita è un palindromo`, altrimenti, sempre tramite alert, `La parola inserita non è un palindromo`
}


let userInput = prompt("Inserisci una parola:");
    // Una semplice variabile a cui do un nome `parlante`. Con il `prompt` chiedo all`utente di inserire una parola.

    
if (userInput !== null && userInput !== "") {
    // Mi accerto che i dati inseriti dall`utente siano coerenti
    
    isPalindrome(userInput);
} else {
    alert("Devi inserire una parola.");
    // Invito nuovamente l`utente a inserire una parla qualora abbia cliccato su `Annulla` nell`Alert.
}