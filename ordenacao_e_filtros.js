/* Ordenando Números Pares e Ímpares*/
const linhas = parseInt(gets());
let entrada = [];
for (let i = 0; i < linhas; i++) {
    entrada = [...entrada, gets()];
    entrada = [...entrada, inputs[i + 1]];
}
entrada = entrada.sort((a, b) => a - b);
const pares = entrada.filter(n => n % 2 === 0);
const impares = entrada.filter(n => n % 2 === 1).reverse();
const saida = [...pares, ...impares];
saida.map((n) => console.log(n));