
/*
     * O desafio do código é descobrir a partir de um numero inserido 
     * pelo usuário deve retornar uma mensagem apartir de uma condição. 
     * Se for multiplo de 3 e 5 será "FizzBuzz".Se só for multiplo de 3 
     * exibirá "Fizz". E de multiplo de 5 aparecerá "Buzz". Caso não seja 
     * nenhuma das opções, o numero é mostrado.
     */

    /*
     * A a variavel resultado utiliza a função gets() para receber o numero digitado 
        e dentro da estrutura condicional if vai ser analisado pelas condiçoes e se 
        a condição for atendida vai exibir a sua mensagem de resposta pela função print().
     */

    function descobrir() {
        
        let resultado = gets();
    
        //Se for multiplo de 3 e 5 será "FizzBuzz"
        if ((resultado % 3 == 0) && (resultado % 5 == 0)) {
            print("FizzBuzz");
    
        //Se só for multiplo de 3 exibirá "Fizz"
        } else if (resultado % 3 == 0){
            print("Fizz");
    
        //E de multiplo de 5 aparecerá "Buzz"
        } else if(resultado % 5 == 0){
            print("Buzz");
    
        //Caso i numero não seja multiplo de 3 ou 5, a variavel resultado é exibida.
        } else if ((resultado % 3 != 0) || (resultado % 5 != 0)){
            print(resultado);
        }
        
    }
