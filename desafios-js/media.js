    

    (function calcularMedia() {
        
        let input = require('readline-sync');
    
        let soma = 0;
    
        let media;
    
        let i = 1;
    
        do {
            
            let nota = Number(input.question(i+"º Nota: "));
        
            soma = soma + nota;
    
            i++;
    
        } while (i <= 5);
        
            media = soma / 5;
    
            if (media >= 7 || media === 10){
                console.log("Aprovado");
            } else if(media <= 5 || media < 7){
                console.log("Recuperação");
            } else {
                console.log("Reprovado");
            }
    })();