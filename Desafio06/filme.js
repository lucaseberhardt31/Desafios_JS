/* 
DESAFIO 06 - FILME FAVORITO

Crie um objeto chamado filme contendo:
-titulo
-genero
-ano

Crie uma função responsável por receber esse objeto
e exibir todas as informações formatadas no console
utilizando template string.

O objetivo é praticar a manipulação de objetos
e passagem de parâmetros para funçoes.
*/

const filmes = [
    {titulo: "Toy Story 3", genero: "Aventura", ano: 2010},
    {titulo: "Como Treinar o Seu Dragão", genero: "Fantasia", ano: 2010},
    {titulo: "Enrolados", genero: "Musical", ano: 2010},
]

function mostrarFilme(x){
    console.log(`Filme: ${filmes[x].titulo}`);
    console.log(`Genêro: ${filmes[x].genero}`);
    console.log(`Data de lançamento: ${filmes[x].ano}`);
    console.log();
}
//para acessar os filmes comece do 0 até o 2
const queroOFilme1= mostrarFilme(0);
const queroOFilme2= mostrarFilme(1);
const queroOFilme3= mostrarFilme(2);