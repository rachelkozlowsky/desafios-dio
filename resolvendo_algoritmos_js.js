/* Coração das cartas */

let pilhasCartas = [];
let leitura = "";
do {
    leitura = gets();
    if (leitura !== "0") {
        let qtdPilha = parseInt(leitura);
        let pilha = [];
        for (let i = 0; i < qtdPilha; i++) {
            pilha.push(gets());
        }
        pilhasCartas.push(pilha);
    }
} while (leitura !== "0");

let resultados = [];
for (pilhas of pilhasCartas) {
    let resultadoJogo = [];
    for (pilha of pilhas) {
        let cartas = pilha.split(" ").map(num => parseInt(num));
        resultadoJogo.push(verificarRetirada(cartas));
    }
    resultados.push(resultadoJogo);
}

for (resultado of resultados) {
    let jogo = true;
    for (let i = 0; i < resultado.length; i++) {
        jogo = jogo && resultado[i];
    }
    if (jogo) {
        console.log(1);
    } else {
        console.log(0);
    }
}

function verificarRetirada(cartas) {
    let tipo1 = cartas[0];
    let tipo2 = retornarSoma(cartas, 1);
    let tipo3 = retornarSoma(cartas, 2);

    if (tipo1 % 3 === 0 || tipo2 % 3 === 0 || tipo3 % 3 === 0) {
        return true;
    } else {
        return false;
    }
}

function retornarSoma(cartas, indiceMax) {
    let soma = 0;
    for (let i = 0; i <= indiceMax; i++) {
        soma += cartas[i];
    }
    return soma;
}


/* Abreviando posts do blog */


let leituras = [];
let dado = "";
do {
    dado = gets();
    if (dado !== ".") {
        leituras.push(dado);
    }
} while (dado !== ".");

let novasLeituras = [];
for (leitura of leituras) {
    let arrayLeitura = leitura.split(" ");
    let novasLinhas = [];
    let palavra = [];
    let palavraTrocada = [];
    let trocas = [];
    let contadorTroca = 0;

    for (let i = 0; i < arrayLeitura.length; i++) {
        let subs = arrayLeitura[i];
        palavra.push(subs);
        if (subs.length > 2) {
            let novaPalavra = arrayLeitura[i].substring(0, 1).concat(".");
            palavraTrocada.push(novaPalavra);
            let novaLinha = arrayLeitura.map(linha => {
                if (linha === arrayLeitura[i]) {
                    contadorTroca++;
                    return novaPalavra;
                }
                return linha;
            });
            novasLinhas.push(novaLinha.join(" "));
            trocas.push(contadorTroca);
        }
    }

    let menorPalavra = 9999999;
    let indice = 0;
    for (novaLinha in novasLinhas) {
        if (novasLinhas[novaLinha].length < menorPalavra) {
            menorPalavra = novasLinhas[novaLinha].length;
            indice = parseInt(novaLinha);
        }
    }

    console.log();
    console.log(novasLinhas[indice]);
    console.log(trocas[indice]);
    console.log(palavraTrocada[indice], " = ", palavra[indice]);
}


/* Combinação de strings */


let qtdCasos = gets();
let palavras = [];

for (let i = 0; i < qtdCasos; i++) {
    let leitura = gets().split(" ");
    palavras.push({
        "texto1": leitura[0],
        "texto2": leitura[1]
    });
}

let stringCombinada = [];
for (palavra of palavras) {
    let contador = palavra.texto1.length > palavra.texto2.length ? palavra.texto1.length : palavra.texto2.length;
    let texto = "";
    for (let i = 0; i < contador; i++) {
        if (i < palavra.texto1.length) {
            texto = texto.concat(palavra.texto1.substring(i, i + 1));
        }
        if (i < palavra.texto2.length) {
            texto = texto.concat(palavra.texto2.substring(i, i + 1));
        }
    }

    console.log(texto);
}


/* Hash Mágico */


let qtdCasos = gets();
let leituras = [];
const CARACTER = 65;

for (let i = 0; i < qtdCasos; i++) {
    let qtdLinhas = gets();
    let linhas = [];
    for (let j = 0; j < qtdLinhas; j++) {
        linhas.push(gets());
    }
    leituras.push(linhas);
}

for (leitura of leituras) {
    let codigoHash = 0;
    for (linha in leitura) {
        let elemento = parseInt(linha);
        for (let posicao = 0; posicao < leitura[linha].length; posicao++) {
            let crt = leitura[linha].substring(posicao, posicao + 1);
            let valorCrt = parseInt(crt.charCodeAt(0) - CARACTER);
            codigoHash += (posicao + elemento + valorCrt);
        }
    }
    console.log(codigoHash);
}


/* O tabuleiro secreto */

let input;
const limit = Math.pow(10, 5);
let T, X, R;
var output = '';

const operation = {
    '1': function fillLine(matrix, line, num) {
        for (let index = 0; index < matrix.length; index++) {
            matrix[line - 1][index] = num;
        }
    },
    '2': function fillColumn(matrix, col, num) {
        for (let index = 0; index < matrix.length; index++) {
            matrix[index][col - 1] = num;
        }
    },
    '3': function showMostFrequentAtLine(matrix, line) {
        const lineValues = matrix[line - 1]

        output += getMostFrequentIn(lineValues) + '\n'
    },
    '4': function showMostFrequentAtColumn(matrix, col) {
        const columnValues = matrix.map(line => line[col - 1])

        output += getMostFrequentIn(columnValues) + '\n'
    }
}

const getMostFrequentIn = (values) => {

    let n = values.length;

    if (n == 0) return null;

    let map = {},
        most = values[0],
        freqCount = 1;

    for (let i = 0; i < n; i++) {
        let el = values[i];

        if (map[el] == null)
            map[el] = 1;
        else
            map[el]++;

        if (map[el] > freqCount) {
            most = el;
            freqCount = map[el];
        } else if (map[el] === freqCount) {
            most = Math.max(most, el)
        }
    }
    return most;
}

while (true) {
    input = gets()

    if (!input || input === '') break;

    let [N, Q] = input.match(/\d+/g);

    N = parseInt(N);
    Q = parseInt(Q);

    if (N < 1 || N > limit || Q < 1 || N > limit) break;

    let matrix = Array.from(Array(parseInt(N)), () => new Array(parseInt(N)).fill(0));

    for (let index = 0; index < Q; index++) {
        let [T, X, R] = gets().split(/[ ]+/g)
        X = parseInt(X)
        R = parseInt(R)

        if (/[12]/.test(T)) {
            if (X < 1 || X > N || R < 0 || R > 50) {
                // console.log('Valores de X e/ou N inválidos para operação 1 ou 2. Verifique antes de iniciar o jogo');
                continue;
            }
        }

        if (/[34]/.test(T)) {
            if (X > N || X < 0) {
                // console.log('Valores de X e/ou N inválidos para operação 3 ou 4. Verifique antes de iniciar o jogo');
                continue;
            }
        }

        operation[T](matrix, X, R);
    }
    console.log(output);
}