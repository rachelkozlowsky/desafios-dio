/*hora da corrida - ok*/

let line = gets().split(' ');
let v = parseInt(line[0]);
let n = parseInt(line[1]);
let t = (v*n)/10;
let vet = [];
for(i = 1; i < 10; i++){
  vet[i] =  Math.ceil(t * i);
 
}
const elements = vet.slice(1);
console.log(elements.join(" "));

/*Cardápio Aéreo - ok*/

let refeicoesDisponiveis = gets().split(' ');
let Ca = parseInt(refeicoesDisponiveis[0]);
let Ba = parseInt(refeicoesDisponiveis[1]);
let Pa = parseInt(refeicoesDisponiveis[2]);

let refeicoesRequisitadas = gets().split(' ');
let Cr = parseInt(refeicoesRequisitadas[0]);
let Br = parseInt(refeicoesRequisitadas[1]);
let Pr = parseInt(refeicoesRequisitadas[2]);

let somaTotal = 0;

let CaCr = Ca - Cr;
let BaBr = Ba - Br;
let PaPr = Pa - Pr;

      if(CaCr<0){
      somaTotal = somaTotal + (CaCr * -1);
    }
      if(BaBr<0){
      somaTotal = somaTotal + (BaBr * -1);
    }
      if(PaPr<0){
      somaTotal = somaTotal + (PaPr * -1);
    }
    console.log(somaTotal);


/* Pizza Antes do Final do Ano - ok */

let entrada = gets().split(" ");

let N = entrada[0];
let D = entrada[1];

let counter = 0;

for(let i=0; i < D; i++){
  counter = 0
  let input = gets();
  let [first,...second] = input.split(" ");
  
  for(let j = 0; j < second.length; j++){
    if(second[j] == 1){
      counter++
    }
  }
  
  if(counter == N){
    console.log(first)
    break;
  }
  
}

if(counter != N){
  console.log("Pizza antes de FdA")
}


/*Conversão de Tempo - ok */
let tempo;
let horas, minutos, segundos;

tempo = parseInt(gets());

  if (tempo >= 3600){
    let rest = tempo % 3600;
    horas = parseInt((tempo - rest) / 3600);
    let rest2 = rest % 60;
    minutos = parseInt((rest - rest2) / 60);
    segundos = parseInt(rest2);
    console.log(horas + ":" + minutos + ":" + segundos);
  }else if (tempo >= 60){
    let rest = tempo % 60;
     minutos = parseInt((tempo - rest) / 60);
     segundos = parseInt(rest);
    console.log("0:" + minutos + ":" + segundos);
  }else if (tempo < 60){
    segundos = tempo;
     console.log("0:0:" + segundos);
  }

/*Idade em Dias - ok*/
let totalDeDias = parseInt(gets());

let meses = parseInt((totalDeDias%365) / 30);
let anos = parseInt(totalDeDias / 365);
let dias = parseInt((totalDeDias%365)%30);

console.log(anos + " ano(s)");
console.log(meses + " mes(es)");
console.log(dias + " dia(s)");

/*Tempo do Dobby*/

let N = parseInt(gets());
let inteirotemp = gets();
let inteiros = inteirotemp.split(' ')
let A = parseInt(line[0]);
let B = parseInt(line[1]);
let calc = (A + B);
    if (calc > N){
      console.log("Deixa para amanha!");
    }else{
      console.log("Farei hoje!");
    }


/*Rodízio de cavalos e carruagens - tentativa */
/*
let placas = new Set(["abc-1234", "a-1010", "ABCD-1234", "AIQ-2001"]);
let quantidadeTestes = placas.size; //gets();

let p = [...placas];
for (let i = 0; i < quantidadeTestes; i++) {
    let campos = p[i].split('-');
   
    if (campos.length == 2) {
        let letras = campos[0];
        let nums = campos[1];

        if (letras == letras.toUpperCase()) {

            if (letras.length == 3 && nums.length == 4) {

                let dig = nums.slice(-1);
                if (dig == 1 || dig == 2) {
                    console.log("SEGUNDA");
                } else if (dig == 3 || dig == 4) {
                    console.log("TERCA");
                } else if (dig == 5 || dig == 6) {
                    console.log("QUARTA");
                } else if (dig == 7 || dig == 8) {
                    console.log("QUINTA");
                } else if (dig == 9 || dig == 0) {
                    console.log("FRIDAY");
                } else {
                    console.log("FALHA");
                }

            } else {
                console.log("FALHA");
            }
        } else {
            console.log("FALHA");
        }
    } else {
        console.log("FALHA");
    }

}

*/
/*Rodízio de cavalos e carruagens -  Rodando */
const quantidadeDeEntradas = parseInt(gets())
let numeroDaEntrada = 1
while (numeroDaEntrada <= quantidadeDeEntradas) {
  const placa = gets().trim();

  const numeroDeCaracteresNaPlaca = placa.length;
  const parteNumericaDaPlaca = placa.substr(4, 8);
  const parteAlfabeticadaPlaca = placa.substr(0, 3);
  const hifenDaplaca = placa[3];
  const finalDaPlaca = placa[placa.length - 1];
  
  const aPlacaTemOitoCaracteres = numeroDeCaracteresNaPlaca === 8;
  const osTreprimeirosCaracteresSaoLetrasMaiusculas = ChecaSeTodosSaoLetrasMaiusculas(
    parteAlfabeticadaPlaca
  );
  const osQuatroUltimosCaracteresSaoNumeros = ChecaSeTodosSaoNumeros(
    parteNumericaDaPlaca
  );
  const temHifenNoLugarCerto = hifenDaplaca === '-';
  
  const aPlacaEhValida =
    aPlacaTemOitoCaracteres &&
    osTreprimeirosCaracteresSaoLetrasMaiusculas &&
    osQuatroUltimosCaracteresSaoNumeros &&
    temHifenNoLugarCerto;
  
  if (aPlacaEhValida) {
    switch (Number(finalDaPlaca)) {
      case 1:
      case 2:
        console.log('SEGUNDA');
        break;
      case 3:
      case 4:
        console.log('TERCA');
        break;
      case 5:
      case 6:
        console.log('QUARTA');
        break;
      case 7:
      case 8:
        console.log('QUINTA');
        break;
      case 0:
      case 9:
        console.log('SEXTA');
        break;
    }
  } else console.log('FALHA');
  
  
  
  numeroDaEntrada += 1
}

function ChecaSeTodosSaoLetrasMaiusculas([...sentenca]) {
  let saoLetras = true;

  sentenca.map((caractere) => {
    if (!caractere.match(/[A-Z]/)) {
      saoLetras = false;
    }
  });

  return saoLetras;
}
function ChecaSeTodosSaoNumeros([...sentenca]) {
  let saoNumeros = true;

  sentenca.map((caractere) => {
    if (!caractere.match(/[0-9]/)) {
      saoNumeros = false;
    }
  });
  return saoNumeros;
}