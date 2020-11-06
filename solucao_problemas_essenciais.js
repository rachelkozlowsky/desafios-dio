//Quadrado e ao Cubo
let input = parseInt(gets());

for(let i = 1; i<= input; i++){
  console.log(i , i  * i, i * i * i)
}
//A Corrida de Tartarugas
while(true){
  let quantidadeDeTartarugas = parseInt(gets())
  if(isNaN(quantidadeDeTartarugas)){
    break;
  }
  let velocidadesTartarugas = gets().split(" ");
  let tartarugaMaisRapida = 0;

  for (let i = 0; i < quantidadeDeTartarugas; i++) {
    if (parseInt(velocidadesTartarugas[i]) > tartarugaMaisRapida) {
      tartarugaMaisRapida = parseInt(velocidadesTartarugas[i]);
    }
  }

  if (tartarugaMaisRapida < 10){
    nivel = 1;
  } else if (tartarugaMaisRapida >= 10 && tartarugaMaisRapida < 20){
    nivel = 2;
  } else {
    nivel = 3;
  }

  console.log(nivel);
}


//Ultrapassando V
let R = parseInt(gets());
let V = 0;
let soma = 0;
let contaN = 0;

while(V <= R){
  V = parseInt(gets());
}

while(soma <= V){
    soma += R;
    R++;
    contaN++;
}
console.log(contaN);

//Validação de Nota

let qtdeNotasValidas = 0;

let notas = [];

let cont = 0;

while(qtdeNotasValidas < 2) {
  cont++;
  
  const nota = parseFloat(gets());
  
  if(!nota) break;
  
  if(nota >= 0 && nota <= 10) {
    notas.push(nota)
    qtdeNotasValidas++;
  }else{
    console.log('nota invalida')
  }
}

const arraySum = arr => arr.reduce((acc, current) => acc + current)

const arrayMedia = arr => arraySum(arr) / arr.length

console.log("media = " + arrayMedia(notas).toFixed(2))


//Pedro Bento e o Mundo de OZ

let a = [gets(),gets(),gets(),gets(),gets(),gets()];

let i = 0;

if(a.includes("(("))
  i++;

if(a.includes("))"))
  i++;
 
if(a.includes("("))
  i++;

if(a.includes(")"))
  i++;

console.log(i)