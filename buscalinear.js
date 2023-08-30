// Como se trata de uma lista não ordenada, optei pela busca linear.
function buscaLinear(array, elementoBuscado) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === elementoBuscado) {
            return i
        }
    }
    return -1
}

let arraylinear = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];
let elementoP = 20

let indiceEncontrado = buscaLinear(arraylinear, elementoP)

if (indiceEncontrado !== -1) {
    console.log(`O elemento ${elementoP} foi encontrado no índice: ${indiceEncontrado}.`);
} else {
    console.log(`O elemento ${elementoP} não foi encontrado na lista.`);

}
