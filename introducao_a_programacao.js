//Dvividindo X por Y

let limit = parseInt(gets());

for (let i = 0; i < limit; i++) {
    
    let line = gets().split(" ");
    let X = parseInt(line[0]);
    let Y = parseInt(line[1]);
    
    if (Y == 0) {
        console.log("divisao impossivel");
    } else {
        let divisao = parseFloat(X / Y).toFixed(1);
        console.log(divisao);
    }
}

//Distância

let quilometros = parseInt(gets());
 let minutos = quilometros * 2;  
 
 console.log(minutos + " minutos");

 //Quanta Mandioca

let chico = 300 * parseInt(gets());
let bento = 1500 * parseInt(gets());
let bernardo = 600 * parseInt(gets());
let marina = 1000 * parseInt(gets());
let iara = 150 * parseInt(gets());
let marlene = 225;
let total = chico + bento + bernardo + marina + iara + marlene;
console.log(total); 

//