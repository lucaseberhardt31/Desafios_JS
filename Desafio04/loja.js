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
    {nome: "Headset USB", preco: 129.90},
    {nome: "Pen Drive 32GB", preco: 49.90},
    {nome: "SSD 480GB", preco: 229.90},
    {nome: "Memória RAM 8GB DDR4", preco: 179.90},
    {nome: "Webcam Full HD", preco: 149.90},
    {nome: "Adaptador Wi-Fi USB", preco: 69.90},
    {nome: "Caixa de Som USB", preco: 95.90},

    
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