function calcularMulta(valorPorDia, diasAtraso) {
    let multa = valorPorDia * diasAtraso;
    
    if (multa < 1) {
        multa = 1;
    }

    return `O valor da multa para ${diasAtraso} dias de atraso é de R$${multa.toFixed(2)}`;
}

const readline = require("readline-sync");

console.log("Vamos calcular o valor da multa do livro atrasado.")
let valorPorDia = readline.questionFloat('Valor da multa por dia: ');
let diasAtraso = readline.questionInt('Quantidade de dias de atraso: ');

console.log(calcularMulta(valorPorDia, diasAtraso)); 