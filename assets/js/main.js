/* 

Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?

Mail
Chiedi all'utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

Bonus
Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina.

Consigli del giorno:
1 scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2 javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3 si ma noi cosa vogliamo fare?
4 torniamo a scrivere in italiano
5 proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

Buon divertimento e confermate lettura come al solito :baby-yoda: 

*/

// Dadi

const diceGamePc = Math.floor(Math.random()* 6 + 1) //genero numero per il pc 
console.log(diceGamePc); 

const diceGameUser = Math.floor(Math.random()* 6 + 1) //genero numero per user
console.log(diceGameUser);


if (diceGamePc > diceGameUser) { //se il numero generato dal pc e maggiore di user vince
    console.log('pc win');  
} else if(diceGamePc == diceGameUser){ // se i numeri sono uguali pareggio 
    console.log('draw');
}else{ //se il numero generato dal user e maggiore di pc vince
    console.log('user win');
}


// mail

//let emailUser = prompt("Please enter your email"); //inserisco un email prompt 

document.getElementById('conferma').addEventListener('click', function(e){

    let emailUser = document.getElementById('emailuser').value; //inserisco un email

    const emailList = ["qwerty@gmail.com", "12345@gmail.com", "prova@gmail.com"] //lista email riconosciute

    let registered = false //verifica

    for (let i = 0; i < emailList.length; i++) { //loop per controllare tra le email 
        const userLogin = emailList[i]; 
    
        if (userLogin == emailUser) { //se sono uguali allora 
            registered = true;  // verifica cofermata
        }
    }
    
    if(registered == true) {
        console.log(emailUser);   //email  riconosciuta 
        alert("benvenuto");
    }else {
        alert("utente non trovato "); //email non riconosciuta 
    }

});

    
