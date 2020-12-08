/* Album da copa*/

let N = parseInt(gets())
let M = parseInt(gets())

let album = [];

for(let i = 0; i < M; i++){
  let fig = parseInt(gets())
  
  if(album.indexOf(fig) ===  -1){
    album.push(fig);
  }
  
}

console.log(N - album.length)


/* Tipo de Combustível */

let alcool = 0;
let gasolina = 0;
let diesel = 0;
let X = 0;

while (X !== 4) {
   X = parseInt(gets());
  if (X === 1) {
    alcool++;
  } else if (X === 2) {
    gasolina++;
  } else if (X === 3) {
    diesel++;
  }  
}

console.log("MUITO OBRIGADO");
console.log("Alcool: " + alcool);
console.log("Gasolina: " + gasolina);
console.log("Diesel: " + diesel);


/*Votação para bobo da corte*/


let n = parseInt(gets())
let rafa = parseInt(gets())
let temp = rafa;

while(true){
  let x = parseInt(gets())
  
  if(!x){
    rafa >= temp
    ?console.log("S")
    :console.log("N")
    break;
  }
  
  if(x > temp){
    temp = x;
  }
  
}

/*Brinquedo do Papai Noel*/

let n = parseInt(gets());
let boys = 0;
let girls = 0;

for (i=0; i<n; i++) {
  let kids = gets().split(' ');

  if(kids[1] == 'F') {
    girls++;
  } else if (kids[1] == 'M') {
    boys++;
  }
}

console.log(boys, "carrinhos");
console.log(girls, "bonecas");


/*validação de notas*/

let resposta = '1'

while(resposta == '1'){
  let n1 = +gets()

  let n2 = +gets()

  
  while(n1 < 0 || n1 > 10){
    console.log("nota invalida")
    n1 = +gets()
  }
  
  while(n2 < 0 || n2 > 10){
    console.log("nota invalida")
    n2 = +gets()
  }
  
  console.log(`media = ${((n1 + n2) / 2).toFixed(2)}`)
  
  resposta = ""
  
  while(resposta != 1 && resposta !=2){
    console.log("novo calculo (1-sim 2-nao)")
    resposta = +gets()
  }
  
}





/*

let resposta = '1'

while(resposta == '1'){
  let n1 = +gets()

  let n2 = +gets()

  
  while(n1 < 0 || n1 > 10){
    console.log("nota invalida")
    n1 = +gets()
  }
  
  while(n2 < 0 || n2 > 10){
    console.log("nota invalida")
    n2 = +gets()
  }
  
  console.log(`media = ${((n1 + n2) / 2).toFixed(2)}`)
  
  resposta = ""
  
  while(resposta != 1 && resposta !=2){
    console.log("novo calculo (1-sim 2-nao)")
    resposta = +gets()
  }
  
}