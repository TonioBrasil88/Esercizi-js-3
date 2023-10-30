//ESERCIZIO 1 
//  Provare a rifare il seguente esercizio, con le funzioni
//  Scrivi un programma che dati 5 numeri restituisca in output la somma e la media.
//  Esempio
//     Input: a = 1, b = 2, c = 3,  = 4, e = 5
//     “La somma e’  X e la media e Y”
//     Output: somma = 15, media = 3;


function sommaTraCinqueNumeri(num1, num2, num3, num4, num5) {
    return num1 + num2 + num3 + num4 + num5;

}


let num1 = 1;
let num2 = 2;
let num3 = 3;
let num4 = 4;
let num5 = 5;

let somma = sommaTraCinqueNumeri(num1, num2, num3, num4, num5);

let media = somma / 5;
console.log("Somma:", somma);
console.log("Media:", media);


//ESERCIZIO 2
//Provare a rifare il seguente esercizio, con le funzioni
// Scrivi un programma che dato un numero intero compreso tra 1 a 7
// visualizzi il corrispondente giorno della settimana. Sapendo che:
//   1 = lunedì
//   2 = martedì
//   3 = mercoledì
//   ...
//   7 = domenica
// Esempi:
//   Input: numero = 6
//   Output: "Sabato"
//   Input: numero = 10
//   Output: “Errore! Giorno della settimana non valido!"

function giornoSettimana(number) {
    switch (number) {
        case 1:
            return "Lunedì";

        case 2:
            return "Martedì";

        case 3:
            return "Mercoledì";

        case 4:
            return "Giovedì";

        case 5:
            return "Venerdì";

        case 6:
            return "Sabato";

        case 7:
            return "Domenica";

        default: return "Giorno della settimana non valido!";
    }
}


let number = parseInt(prompt("Inserici un numero da 1 a 7"));
let giornoDellaSettimana = giornoSettimana(number);
console.log("Il giorno della settimana è:" + giornoDellaSettimana);


//ESERCIZIO 3
//Provare a rifare il seguente esercizio, con le funzioni, creando partite con diversi tiri di dado
//P.s. l'abbiamo fatto anche stamattina a lezione
// Scrivi un programma che, dato il numero dei tiri da effettuare per ciascun giocatore (N),
// simuli un gioco di dadi tra due utenti, stampando il giocatore che ha totalizzato più punti,
// supponendo che ogni dado abbia al massimo 6 facce, ogni giocatore tirerà il dado N volte, ciò significa che verrà generato un numero casuale ad ogni tiro che sarà sommato ai precedenti per calcolare il punteggio del giocatore. 



let p1 = 0;
let p2 = 0;

let nTiri = 6;

let min = 1;
let max = 6;


function sfidaAiDadi(nTiri) {

    for (let i = 1; i <= nTiri; i++) {

        p1 = p1 + Math.floor(Math.random() * (max - min + 1) + min);
        p2 = p2 + Math.floor(Math.random() * (max - min + 1) + min);

    }

    if (p1 > p2) {

        return `Il vincitore della sfida a dadi con ${nTiri} tiri, è il primo giocatore, che ha totalizzato un punteggio di ${p1} punti`;

    } else if (p2 > p1) {

        return `Il vincitore della sfida a dadi con ${nTiri} tiri, è il secondo giocatore, che ha totalizzato un punteggio di ${p2} punti`;

    } else {

        return `i giocatori della sfida a dadi con ${nTiri} tiri, hanno pareggiato, totalizzando entrambi un punteggio di ${p1} punti`;

    }
}

let punteggioPiuAlto = sfidaAiDadi(5);

console.log(punteggioPiuAlto);



//ESERCIZIO 4
//Provare a rifare il seguente esercizio, con le funzioni
// Scrivi un programma che dato un numero stampi la tabellina corrispondente.

let input = prompt('Inserisci un numero intero per visualizzare la sua tabellina');

while (isNaN(input)) {
    input = prompt('Valore non valido, \n Inserisci un numero intero ');
}

function tabellina(num) {
    let tabellina = '';

    for (let i = 1; i < 11; i++) {
        tabella += $(num) x $(i) = $(num * 1), \n

    }
    return tabella

}


console.log(tabellina(input))



//ricordate che il return blocca tutto, anche l'esecuzione di un ciclo
//ESERCIZIO 5
//Scrivi una funzione di uguaglianza che prenda in input due argomenti e restituisca TRUE se i due argomenti sono IDENTICI,   FALSE altrimenti.
//provare a inserire i due argomenti in un array

//   Esempi:
//     Input: n = 2, m = 3
//     Output: FALSE
//     Input: n = 2, m = '2'
//     Output: FALSE
//     Input: n = 2, m = 2
//     Output: TRUE

let array = [[2, 3], [2, '2'], [2, 2]]

function eUguale(a, b) {
    if (a === b) { return true }
    else return false
}

console.log(eUguale(array[0][0], array[0][1]), array[0][0], array[0][1])
console.log(eUguale(array[1][0], array[1][1]), array[1][0], array[1][1])
console.log(eUguale(array[2][0], array[2][1]), array[2][0], array[2][1])


//ESERCIZIO 6 - mega ultra difficile (se non riuscite, lo vediamo a lezione)
//Scrivi una funzione che dato un numero intero (esempio: 9999) conti da quante cifre è formato.

//Esempi:

//Input : 9
//Output :  1 cifra

//Input : 99
//Output :  2 cifre 

//(Consiglione metodo .toString( ) 👀 )
//INFINE
//(per chi non l'ha fatto) portare a termine il progetto red
//iniziare, continuare, portare a termine il progetto black (se riuscite a finirlo entro questa settimana vincete i bacetti da valerio)


let arr = [0, 15, 478, 570, 120, 352];

function quntoELungo(a) {
    return ${ a }.length
}

for (let i = 0; i < arr.length; i++) {
    console.log(quntoELungo(arr[i]))
}



