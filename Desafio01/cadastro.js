// Desafio 01 - Cadastro de Pessoa

/* 
Crie um objeto chamdo pessoa contendo:
- nome
- idade
- cidade

Após a criação:
- altere a idade
- adicione uma profissão
- remova a cidade

No fim, exiba o objeto final
*/

const pessoa = {
    nome: "Cleiton",
    idade: 2,
    cidade: "Xique-Xique"
}

console.log("Dados iniciais:");
console.log("Nome:",pessoa.nome);
console.log("Idade:",pessoa.idade);
console.log("Cidade:",pessoa.cidade);

pessoa.idade = 21;
pessoa.profissao = "Pedreiro";
delete pessoa.cidade;

console.log("\nDados finais:");
console.log("Nome:",pessoa.nome);
console.log("Idade:",pessoa.idade);
console.log("Profissão:",pessoa.profissao);