/* 
DESAFIO 4 - LOJA TECH

Uma loja de informática possui vários produtos cadastrados.

Crie um array de objetos contendo:
- nome
- preço

Utilize uma estrutura de repetição para mostrar apenas
os produtos que custam mais de R$ 100,00.

Exiba o nome dos produtos dos produtos encontrados.
*/
const produtos = [
    {nome: "Mouse Gamer RGB", preco: 89.90},
    {nome: "Teclado Mecânico", preco: 249.90},
    {nome: "Monitor 24 Polegadas", preco: 799.90},
    
]
let y = 0;
let x = 0;

console.log("Produtos acima de R$100,00:");
while(y < produtos.length){
    if (produtos[y].preco > 100){
        console.log(produtos[y].nome);
    }
    y += 1;
}