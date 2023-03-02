    /*
    O desafio é descobrir se o valor inserido pelo usuário corresponde 
    a algum numero de uma lista de elementos (array).
    */


    let elementos = [64, 137, -16, 43, 67, 81, -90, 212, 10, 75];

    /*
    A função buscar numero irá procurar pelo valor na lista elementos.
    A cada laço de repetição o valor será comparado ao elemento na posição
    correspondente do loop. Caso seja encontrado será retornada uma mensagem 
    que o valor está em uma posição da lista. Caso ainda não tenha
    encontrado vai ser mudada a proxima posição e feito novamente a busca. 
    E se não foi achado, é retornado uma mensagem de que o valor não foi
    encontardo.
    */

    (function buscarNumero() {
        
        let valor = parseInt(gets());
        

        let i = 0;

        for (let valorEncontrado of elementos) {

            if (valorEncontrado == valor) {
                
                console.log(`Achei ${valor} na posicao ${i}`);
                return;

            } 
            
            i++;
            
        }
        
        print(`Numero ${valor} nao encontrado!`);

    }
    )();

    