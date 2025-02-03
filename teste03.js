function contarpalavras(frase) {
    let palavras = frase.trim().split(/\s+/);

    return `Quantidade de palavras da frase: ${palavras.length}`;
}

const readline = require("readline-sync");

frase = readline.question("Digite sua frase: ");

console.log(contarpalavras(frase));