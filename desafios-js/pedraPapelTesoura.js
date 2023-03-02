const input = require('readline-sync');

(function jogoPPT() {
    
        console.log("Bem vindos(as) ao jogo de pedra, papel e tesoura \n ")

        let player1 = String(input.question(" Jogador 1 , qual você escolhe ? \n"));
        
        let player2 = String(input.question(" Jogador 2 , qual você escolhe ? \n"));

            if ((player1 === 'pedra') && (player2 === 'tesoura')) {

                console.log("Pedra ganha da tesoura");

            } else if ((player1 === 'pedra') && (player2 === 'papel')){

                console.log("Papel ganha da pedra");

            } else if ((player1 === 'tesoura') && (player2 === 'papel')){

                console.log("Tesoura ganha do papel");

            } else if ((player1 === player2) && (player2 === player1)) {

                console.log("Empate");
            } 

        }
)();
