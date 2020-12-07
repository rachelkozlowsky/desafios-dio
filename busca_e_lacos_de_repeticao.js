/* o escolhido*/
let n = parseInt(gets()); //3 <= n <= 100

let arrMat = Array(n);
let arrNot = Array(n);

for(i=0; i<n; i++){
  let line = gets().split(' ');
  arrMat[i] = parseInt(line[0]);
  arrNot[i] = parseFloat(line[1]);
}

let maior = 0;
var max = arrNot.reduce(function(a, b) {
  return Math.max(a, b);
}); 
for(i=0; i<n; i++){
  if(max < 8){
    console.log('Minimum note not reached'); 
    break;
  }else{
 if(arrNot[i] === max){
    console.log(arrMat[i]);
  }
  }
  }

  /*Comunicação em Piralândia*/

let n = gets(); 
let rev = n.split('').reverse().join('');
console.log(rev);


/*Pink e Cérebro*/

let n = parseInt(gets())
let list = gets().split(' ')
cont = [0,0,0,0]

for(let i = 0; i < n; i++){
 if(parseInt(list[i]) % 2 == 0){
   cont[0]++}
 if(parseInt(list[i]) % 3 == 0){
  cont[1]++}
  if(parseInt(list[i]) % 4 == 0){
    cont[2]++}
  if(parseInt(list[i]) % 5 == 0){
    cont[3]++}
}

console.log(cont[0] + ' Multiplo(s) de 2')
console.log(cont[1] + ' Multiplo(s) de 3')
console.log(cont[2] + ' Multiplo(s) de 4')
console.log(cont[3] + ' Multiplo(s) de 5')

/*Degustação de vinho*/


/*Menor e Posição*/

let e = gets() // Quantidade de números
let array = gets()
let values = array.replace(/\s/g,',').trim().split(',');
let min = values[0]
let position = 0
for (let i = 0; i < e; i++){
  if(parseFloat(min) > parseFloat(values[i])){
    min = values[i]
    position = i
  }
}
console.log('Menor valor: ' + min)
console.log('Posicao: ' + position)