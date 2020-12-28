/* Ordenação de Palavras por Tamanho */

let casos = gets();
let palavras = [];

for (let i = 0; i < casos; i++) {
    palavras.push(gets().split(" "));
}

for (let i = 0; i < casos; i++) {
    palavras[i].sort((a, b) => {
        if (a.length > b.length) {
            return 1;
        } else {
            if (a.length === b.length) {
                if (a < b) {
                    return 1
                } else {
                    return -1;
                }
            } else {
                return -1;
            }
        }
    }).reverse();
}

let aux = "";
for (let i = 0; i < palavras.length; i++) {
    let valor = "";
    for (let j = 0; j < palavras[i].length; j++) {
        if (j <= palavras[i].length - 1) {
            aux = " ";
        } else {
            aux = "";
        }
        valor += palavras[i][j] + aux;
    }
    console.log(valor);
}

/* Encontre a maior substring */

let dados = [];
let palavra = "";

do {
    palavra = gets();
    if (palavra !== "") {
        dados.push(palavra);
    }
} while (palavra !== "");

function verificarSubstring(palavra1, palavra2) {
    let contador = [];
    for (let i = 0; i <= palavra1.length; i++) {
        for (let j = 0; j < palavra1.length; j++) {
            if (palavra2.includes(palavra1.substring(i, j))) {
                contador.push(palavra1.substring(i, j).length);
            }
        }
    }

    return Math.max(...contador);
}

for (let i = 0; i < dados.length; i += 2) {
    console.log(verificarSubstring(dados[i], dados[(i + 1)]));
}


/* Validador de senhas com requisitos */

let senhas = [];
let palavra = "";

do {
    palavra = gets();
    if (palavra !== "") {
        senhas.push(palavra);
    }
} while (palavra !== "");

for (senha of senhas) {
    let status = validarSenha(senha);
    console.log("Senha " + (status ? "valida." : "invalida."));
}

function validarSenha(senha) {
    var expressao = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{6,32})$/;
    return expressao.test(senha);
}


/* Pedra, Papel, Tesoura, Lagarto e Spock */

let dados = ["spock spock", "tesoura spock", "lagarto spock"];
let regras = [
    [0, 1, -1, -1, 1],
    [-1, 0, 1, 1, -1],
    [1, -1, 0, 1, -1],
    [1, -1, -1, 0, 1],
    [-1, 1, 1, -1, 0]
];

let nome = ["empate", "fernanda", "marcia"];

let tipos = [
    { nome: 'papel', indice: 0 },
    { nome: 'pedra', indice: 1 },
    { nome: 'tesoura', indice: 2 },
    { nome: 'lagarto', indice: 3 },
    { nome: 'spock', indice: 4 }
];


let casos = gets();
let escolhas = [];

for (let i = 0; i < casos; i++) {
    escolhas.push(gets().split(" "));
}

function verificarGanhador(jogoA, jogoB) {
    let jogadorA = tipos.filter(dado => dado.nome === jogoA)[0].indice;
    let jogadorB = tipos.filter(dado => dado.nome === jogoB)[0].indice;
    let status = regras[jogadorA][jogadorB] === -1 ? 2 : regras[jogadorA][jogadorB];

    return nome[status];
}

for (escolha of escolhas) {
    console.log(verificarGanhador(escolha[0], escolha[1]));
}


/* Atalhos para o Weblogger Brasil */

let linhasHTML = [];
let linha = "";
let tags = [
    { "tag": "_", "tagIni": "<i>", "tagFim": "</i>" },
    { "tag": "*", "tagIni": "<b>", "tagFim": "</b>" }
];

let indice = 0;
while (indice < 60) {
    linha = gets();
    linha = linha.substring(0, 50);
    linhasHTML.push(linha);
    indice++;
}

let novasLinhas = linhasHTML.map(linha => {
    for (tag of tags) {
        if (linha.includes(tag.tag)) {
            let ocorrencia = linha.split(tag.tag).length - 1;
            let posicoes = [];
            let posicaoInicial = 0;

            if (ocorrencia % 2 !== 0) {
                ocorrencia--;
            }

            for (let cont = 0; cont < ocorrencia; cont++) {
                posicoes.push(linha.indexOf(tag.tag, posicaoInicial));
                posicaoInicial = posicoes[cont] + 1;
            }

            let troca = [];
            for (let ind = 0; ind < posicoes.length; ind += 2) {
                troca.push(linha.substring(posicoes[ind], posicoes[ind + 1] + 1));
                troca.push(linha.substring(posicoes[ind] + 1, posicoes[ind + 1]));
            }

            for (let ind = 0; ind < troca.length; ind += 2) {
                let novaPalavra = tag.tagIni + troca[ind + 1] + tag.tagFim;
                linha = linha.replace(troca[ind], novaPalavra);
            }
        }
    }

    return linha;
});

for (linha of novasLinhas) {
    console.log(linha);
}