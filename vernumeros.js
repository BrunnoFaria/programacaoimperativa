let numerosPrimos = [1,2,3,5,7,9,11,13]

let numeros = [...numerosPrimos,15,17,21,25]

function maiorNumero(...paramts){
    return Math.min(...paramts)
}
console.log(maiorNumero(...numeros))