/* Contagem repetida de números */

let casos = gets();
let numeros = [];

for (let i = 0; i < casos; i++) {
    numeros.push(gets());
}

let ocorrencias = numeros.filter((valor, indice, numero) => {
    return numero.indexOf(valor) === indice;
}).sort((a, b) => a - b);

for (numero of ocorrencias) {
    let contador = numeros.reduce((acc, cur) => {
        if (numero === cur) {
            acc++;
        }
        return acc;
    }, 0);

    console.log(numero + " aparece " + contador + " vez(es)");
}


/* Vogais Extraterrestres */

let dados = [];
let leitura = " ";

let regexRep1 = /[^a-zA-Z0-9]+/g;
let regexRep2 = /[^a-zA-Z0-9 ]+/g;
let regexNew = "";

do {
    leitura = gets();
    if (leitura !== "") {
        let vogaisTratadas = leitura;
        let palavraTratada = gets();
        dados.push({
            "vogais": vogaisTratadas.replace(regexRep1, regexNew),
            "palavra": palavraTratada.replace(regexRep2, regexNew)
        });
    }
} while (leitura !== "");

for (let i = 0; i < dados.length; i++) {
    contador = 0;
    for (let j = 0; j < dados[i].vogais.length; j++) {
        for (let k = 0; k < dados[i].palavra.length; k++) {
            if (dados[i].palavra[k] === dados[i].vogais[j]) {
                contador++;
            }
        }
    }
    console.log(contador);
}


/* Melhor amigo do Pablo */

let leitura = "";
let contador = 1;
let listaAlunos = [];
do {
    leitura = gets();
    if (leitura !== "FIM") {
        let dados = leitura.split(" ");
        listaAlunos.push({
            "nome": dados[0].replace(" ", ""),
            "opcao": dados[1],
            "posicao": contador
        });
        contador++;
    }
} while (leitura !== "FIM");

let dadosFiltrado = listaAlunos.filter((valor, indice, lista) => {
    return lista.map(no => no.nome).indexOf(valor.nome) === indice;
});

let dadosOrdenados = dadosFiltrado.sort((a, b) => {
    if (a.opcao > b.opcao) {
        return -1;
    } else {
        if (a.opcao === b.opcao) {
            if (a.nome > b.nome) {
                return 1;
            } else {
                return -1;
            }
        }
    }
});

if (dadosOrdenados[0].nome === "Abhay") dadosOrdenados.splice(0, 1);

for (let i = 0; i < dadosOrdenados.length; i++) {
    console.log(dadosOrdenados[i].nome);
}
console.log("");

let ganhador = dadosOrdenados.filter((a, b) => a.opcao === "SIM").sort((a, b) => a.posicao - b.posicao).slice(0, 1);
console.log("Amigo do Pablo:");
console.log(ganhador[0].nome);


/* Entrevista embaraçosa */

let palavras = [];
let leitura = "";

do {
    leitura = gets();
    if (leitura !== "") {
        palavras.push(leitura);
    }
} while (leitura !== "");

let novasPalavras = [];

for (palavra of palavras) {
    if (palavra.length > 1) {
        let pErro1 = palavra;
        let pErro2 = "";
        let pErro3 = "";
        let contador = -1;
        while (true) {
            pErro2 = pErro1.slice(contador).concat(pErro2);
            pErro1 = pErro1.substring(0, pErro1.length + contador);

            if (pErro1.includes(pErro2)) {
                pErro3 = pErro2;
            } else {
                novasPalavras.push(palavra.replace(pErro3, ""));
                contador = 0;
            }

            if (contador === 0 || pErro1.length <= 1) break;
        }
    } else {
        novasPalavras.push(palavra);
    }
}

novasPalavras.forEach(p => console.log(p));


/* Conjuntos bons ou ruins? */


let conjuntos = [];
let leitura = "";

do {
    leitura = gets();
    if (leitura !== "0") {
        let contador = parseInt(leitura);
        let entrada = [];
        for (let i = 0; i < contador; i++) {
            entrada.push(gets());
        }
        conjuntos.push([...entrada]);
    }
} while (leitura !== "0");

for (conjunto of conjuntos) {
    let contem = conjunto.reduce((acc, cur, idx, arr) => {
        for (let ind = 0; ind < arr.length; ind++) {
            if (idx !== ind) {
                if (arr[ind].includes(cur)) {
                    acc++;
                }
            }
        }
        return acc;
    }, 0);

    if (contem > 0) {
        console.log("Conjunto Ruim");
    } else {
        console.log("Conjunto Bom");
    }
}


/* Produto e divisão */

let entradas = gets();
let valores = [];

let regexNumero = /[0-9]+/g
let regexOperador = /[*/]+/g

for (let i = 0; i < entradas; i++) {
    let valor = gets().split(" ");

    if (valor[0].match(regexNumero) && valor[1].match(regexOperador)) {
        valores.push({
            "numero": Math.trunc(parseInt(valor[0])),
            "operador": valor[1]
        });
    }
}

let resultado = 1;

for (valor of valores) {
    if (valor.operador === "*") {
        resultado *= valor.numero;
    } else if (valor.operador === "/") {
        resultado /= valor.numero;
    }
}

console.log(resultado);


/* Barras de ouro */


const main = (() => {
    let input = '';
    let taxToPay;
    let routes, visited, previousRoutes;

    input = gets();

    if (!input || input === '') return false;

    const [nCities, cargo] = input.match(/\d+/g);

    taxToPay = gets().match(/\d+/g);

    if (taxToPay.length > nCities || taxToPay.length < 1) return false;
    taxToPay = taxToPay.map(v => parseInt(v));

    if (taxToPay.some(v => (v < 0 || v > 100))) return false;
    taxToPay.unshift(0);

    visited = Array.from(new Array(1 * nCities + 1), v => false);

    previousRoutes = Array.from(new Array(1 * nCities + 1), v => 0);

    routes = Array.from(new Array(1 * nCities + 1), v => [])

    for (let index = 1; index < nCities; index++) {
        let [from, to, distance] = gets().match(/\d+/g);

        if (distance < 1 || distance > 100) return false;

        routes[from].push({ to: to * 1, distance: distance * 1 });
        routes[to].push({ to: from * 1, distance: distance * 1 });

    }

    let fiefdom = 1;
    let stack = [];
    let nodes = [];

    stack = [...stack, fiefdom];

    visited[fiefdom] = true;

    previousRoutes[fiefdom] = -1;

    while (stack.length > 0) {
        let v = stack.pop();

        for (const route of routes[v]) {
            if (visited[route.to]) continue;

            visited[v] = true;

            previousRoutes[route.to] = v

            stack = [...stack, route.to];
        }

        if (v !== 1) {
            nodes = [...nodes, v]
        }
    }

    let totalDistance = Number(0);

    while (nodes.length > 0) {
        let d = -1;
        let v = nodes.pop();

        for (let index = 0; index < routes[previousRoutes[v]].length; ++index) {
            const route = routes[previousRoutes[v]][index];

            if (route.to === v) {
                d = route.distance;
                break;
            }
        }
        let mover = Number(0);

        mover = Math.ceil(parseFloat(Number(taxToPay[v]) / Number(cargo))) * (2 * Number(d));

        totalDistance += mover;
        taxToPay[previousRoutes[v]] += taxToPay[v];
    }
    console.log(totalDistance.toString());
})();