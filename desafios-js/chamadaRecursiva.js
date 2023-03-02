
    /*
     * O objetivo do código é mostar a soma de um numero com os seus antecessores.
     * O valor será inserido ao usuário,será feito um laço de repetição contando 
     * do numero escolhido até zero e feito a soma, e ao final exibindo o resultado.
     */

    /*
     * O método somatorio irá fazer a soma do numeros antecessores ao numero 
     * escolhido a cada contagem pelo contado i que tem o mesmo valor do 
     * numero inserido e vai diminuindo a cada repetição no laço for. 
     * E ao final do loop exibirá o resultado do somatório.
     */

    
    (function somatorio() {

        let numero = parseInt(gets());
        
        let soma = 0;

        for (let i = numero; i > 0; i--) {
    
            soma += i;

        }

        print(soma);

    })();
    

    
