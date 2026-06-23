/* 
DESAFIO 05 - CONTADOR INTELIGENTE

Crie uma função chamada contador() que receba:
-valor inicial
-valor final

A função deve exibir todos os números entre os valores informados.

Após concluir, crie uma segunda versão capaz de realizar a contagem regressiva.
*/


function contador(valorInicial, valorFinal){
    for(let i = valorInicial; i <= valorFinal; i++){
    console.log("valor: "+i);
    }   
}

function contadorCaidor(valorInicial, valorFinal){
    for(let i = valorInicial; i >= valorFinal; i--){
    console.log("valor: "+i);
    }   
}
contadorCaidor(20,10)