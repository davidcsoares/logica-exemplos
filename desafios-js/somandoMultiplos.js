
    /*
     * O objetivo do código é descobrir os numeros multiplos de "a" que será o numero desejado
     * até "n" que é o onde termina a procura. E esses numeros multiplos serão somados, assim
     * terá um resultado da soma desses valores.
     */

    (function somatorio() {
        
        var a = parseInt(gets());
        var N = parseInt(gets());
        var soma = 0;
    
        //para i ate o valor menor ou igual ao de n, o laço será repetido;
        //i vai começar a contar a partir do valor de a;
        for (let i = a; i <= N; i++) {
            
            /*
            Para saber se o valor a cada contagem é multiplo, utilizarei o operador (%)
            que é o resto da divisão. Se o resto for igual a 0 ele é multiplo de a e 
            irá somar o multiplo com o valor da soma.
            */ 
            if (i % a == 0) {
    
            //soma vai receber o valor da soma de cada multiplo de a;
                soma += i;
    
            }
            
        }
    
        //Ao final do laço ele irá exibir o valor obtido da soma dos multiplos entre a e n.
        print(soma)
    })();