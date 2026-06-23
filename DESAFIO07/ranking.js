/* 
DESAFIO 07 - RANKING DE JOGADORES  

Uma competição precisa exibir a classificação dos participantes.

crie um array contendo o nome de 4 jogadores.

use uma estrutura de repetição para mostrar:

1° jogador
2° jogador
3° jogador
4° jogador

A posição deve ser gerada automaticamente pelo sistema.
 */

let jogadores = ["luiz", "Gabriel", "Lucas", "Pâmela"];

for(i = 0;i < jogadores.length; i++){
let y = i + 1;
    console.log(y + "° Colocado: " + jogadores[i])
}