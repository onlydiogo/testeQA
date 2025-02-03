function gerarNumAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function distribuirNumeros(quantidade, min, max) {
    let multiplosDeTres = [];
    let naoMultiplosDeTres = [];

    for(let i = 0; i < quantidade; i++){
        let numero = gerarNumAleatorio(min, max);

        if(numero % 3 === 0){
            multiplosDeTres.push(numero);
        } else {
            naoMultiplosDeTres.push(numero);
        }
    }

    return { multiplosDeTres, naoMultiplosDeTres };
}

console.log("A partir de numeros aleatórios, vamos separar múltiplos de 3 e não múltiplos de 3 em arrays destintos.")

let resultado = distribuirNumeros(50, 1, 1000);
console.log("Múltiplos de 3:", resultado.multiplosDeTres);
console.log("Não múltiplos de 3:", resultado.naoMultiplosDeTres);