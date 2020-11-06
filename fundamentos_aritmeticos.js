//Quantidade de Números Positivos

numero = Array(6);
numero[0] = gets();
numero[1] = gets();
numero[2] = gets();
numero[3] = gets();
numero[4] = gets();
numero[5] = gets();
positivos = numero.filter(value => value > 0);
console.log(positivos.length + " valores positivos");


//Exibindo Números Pares

let numero = gets();
let par = 2;
while (par <= numero){
  console.log(par);
  par = par + 2;
}

//Análise de Números

numero = Array(5);
numero[0] = gets();
numero[1] = gets();
numero[2] = gets();
numero[3] = gets();
numero[4] = gets();
positivos = numero.filter(value => value > 0);
negativos = numero.filter(value => value < 0);
pares = numero.filter(value => value % 2 == 0);
impares = numero.filter(value => value % 2 != 0);
console.log(pares.length + " valor(es) par(es)");
console.log(impares.length + " valor(es) impar(es)");
console.log(positivos.length + " valor(es) positivo(s)");
console.log(negativos.length + " valor(es) negativo(s)");

//Contagem de Cédulas

let notas = [100, 50, 20, 10, 5, 2, 1];
let nnotas = [0, 0, 0, 0, 0, 0, 0];
let quantia = parseInt(gets());
let resto = quantia;

while (resto >= 1){
  nota = notas.findIndex(value => value <= resto);
  nnotas[nota] = Math.trunc(resto / notas[nota]);
  resto = resto % notas[nota];
}

console.log(quantia);
console.log(nnotas[0] + " nota(s) de R$ 100,00");
console.log(nnotas[1] + " nota(s) de R$ 50,00");
console.log(nnotas[2] + " nota(s) de R$ 20,00");
console.log(nnotas[3] + " nota(s) de R$ 10,00");
console.log(nnotas[4] + " nota(s) de R$ 5,00");
console.log(nnotas[5] + " nota(s) de R$ 2,00");
console.log(nnotas[6] + " nota(s) de R$ 1,00");

//Consumo Médio do Automóvel

let X = parseInt(gets());
let Y = parseFloat(gets());
let consumoMedio = parseFloat(X / Y).toFixed(3);

console.log(consumoMedio + " km/l");



