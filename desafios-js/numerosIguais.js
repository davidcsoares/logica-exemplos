
    /*
     * O objetivo do código é descobrir se dois valores do tipo inteiro 
     * inseridos pelo usuário se são iguais ou não.
     */

     // "a" é o primeiro numero e "b" o segundo numero
    let a = gets();
    let b = gets();

     /*
     * A condição é que se o valor de "a" for diferente (!=) ao de "b"
     * será exibida a mensagem "Não são iguais!".Se  não for então os 
     * valores são iguais (==) e será exibida a mensagem "São iguais!"
     */

    if (a != b) {
        print("Nao sao iguais!");
    } else {
        print("Sao iguais!")
    }