// Desafio 02 - Média da turma

/* 
Crie um array com 5 notas
- Utilize um logo para:
    -Somar todas as notas
    -calcular a média

Mostrar no console/output o seguinte:
Média da turma: X
*/
//                  0    1    2    3    4
const notasSala = [7.0, 8.5, 9.2, 6.7, 10 ];
let y = 0;
let x = 0;

while(y < notasSala.length){
    x += notasSala[y];
    y += 1;
}

let media = x / notasSala.length;
console.log("Média da turma:", media);