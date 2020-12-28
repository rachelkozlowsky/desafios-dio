/* Ordenando Números Pares e Ímpares*/
const N = gets();

const arrayEntradas = [];

for (let i = 0; i < N; i++) {
    arrayEntradas.push(gets());
}

const pares = arrayEntradas.filter(entrada => entrada % 2 === 0);
const impares = arrayEntradas.filter(entrada => entrada % 2 !== 0);

pares.sort((a, b) => a - b);
impares.sort((a, b) => a - b).reverse();

pares.map(par => console.log(par));
impares.map(impar => console.log(impar));

/*Compras no Supermercado */

let casos = gets();
let listaGeral = [];
let lista = [];

for (let i = 0; i < casos; i++) {
    listaGeral.push(gets().split(" "));
}

for (let i = 0; i < casos; i++) {
    lista.push(listaGeral[i].filter(num => num !== ""));
}

for (let i = 0; i < casos; i++) {
    console.log(lista[i].filter((a, b) => lista[i].indexOf(a) === b).sort().join(" ").toString());
}

/*  Uniformes de final de ano */

let alunos = gets();
let dadosAlunos = [];

for (let i = 0; i < alunos; i++) {
    let nomeAluno = gets();
    let dadosUniforme = gets().split(" ");

    dadosAlunos.push({
        nome: nomeAluno,
        cor: dadosUniforme[0],
        tamanho: dadosUniforme[1]
    });
}

let dadosOrdenados = dadosAlunos.sort((a, b) => {
    if (a.cor > b.cor) {
        return 1;
    } else {
        if (a.cor === b.cor) {
            if (a.tamanho < b.tamanho) {
                return 1;
            } else {
                if (a.cor === b.cor && a.tamanho === b.tamanho) {
                    if (a.nome > b.nome) {
                        return 1;
                    } else {
                        return -1;
                    }
                } else {
                    return -1;
                }
            }
        } else {
            return -1;
        }
    }
});

dadosOrdenados.map(aluno => console.log(aluno.cor, aluno.tamanho, aluno.nome));

/*Fila do Banco*/

let casos = gets();
let clientes = [];
let codigoSMS = [];
let smsOrdenado = [];
let naoTrocouLugar = [];

for (let i = 0; i < casos; i++) {
    clientes[i] = gets();
    codigoSMS[i] = gets().split(" ");
    smsOrdenado[i] = codigoSMS[i].map((num) => Number(num));
}

for (let i = 0; i < casos; i++) {
    smsOrdenado[i].sort((a, b) => a - b).reverse();
}

for (let i = 0; i < casos; i++) {
    let contador = 0;
    for (let j = 0; j < codigoSMS[i].length; j++) {
        if (parseInt(codigoSMS[i][j]) === smsOrdenado[i][j]) {
            contador++;
        }
    }
    naoTrocouLugar.push(contador);
}

console.log(naoTrocouLugar.join('\n'));

/* *Gincana no Acampamento */

let qtdAluno;
let dadosAluno = [];
let vencedores = [];

while (true) {
    qtdAluno = gets();
    if (qtdAluno === "0") break;

    if (qtdAluno >= 1 && qtdAluno <= 100) {
        let dadosLinha = [];
        for (let i = 0; i < qtdAluno; i++) {
            let linha = gets().split(" ");
            dadosLinha.push({
                nome: (linha[0].length > 30) ? linha[0].substring(0, 30) : linha[0],
                ficha: (parseInt(linha[1]) > 500) ? 500 : parseInt(linha[1])
            });
        }
        dadosAluno.push(dadosLinha);
    }
}

for (let circ = 0; circ < dadosAluno.length; circ++) {
    let contadorFicha = dadosAluno[circ][0].ficha;
    let indice = 0;
    let indiceMax = dadosAluno[circ].length - 1;
    let indiceMin = 0;

    while (dadosAluno[circ].length > 1) {
        for (let cont = 0; cont < contadorFicha; cont++) {
            if (contadorFicha % 2 === 0) {
                //sentido horário (do fim para o começo)
                indice--;
            } else {
                //sentido antí-horário (do começo para o fim)
                indice++;
            }

            if (indice > indiceMax) {
                indice = indiceMin;
            }
            if (indice < indiceMin) {
                indice = indiceMax;
            }
        }

        contadorFicha = dadosAluno[circ][indice].ficha;
        dadosAluno[circ].splice(indice, 1);
        indiceMax = dadosAluno[circ].length - 1;

        if (contadorFicha % 2 === 0) {
            if (indice > indiceMax) {
                indice = indiceMin;
            }
        } else {
            indice--;
        }
        if (indice > indiceMax) {
            indice = indiceMin;
        }
        if (indice < indiceMin) {
            indice = indiceMax;
        }
    }
}

for (dado of dadosAluno) {
    console.log("Vencedor(a): " + dado[0].nome);
}