/* 
DESAFIO 03 - SISTEMA DE APROVAÇÃO

Crie uma função chamada verificarAluno() que receba:
-nome
-nota

Regras:
- Nota maior ou igual a 7 -> Aprovado
- Nota maior ou igual a 5 e menor q 7 -> Recuperação
- Nota menor q 5 -> Reprovado

Exiba uma mensagem informando a situação do aluno
*/

function verificarAluno(nome, nota){
    
    if (nota > 7) {
         console.log(nome+ ": Aprovado");
    }else if (nota > 5) {
        console.log(nome+ ": Recuperação");
    }else {console.log(nome+ ": Reprovado");}

}
const Lucas = verificarAluno("Lucas", 10);
