const numerosPares = [2,4,6,8,10]
//const numerosImpares = numerosPares.map(numero=> numero -1);
//console.log(numerosImpares)
//const numerosImpares = numerosPares.map(function (numero){
//     return numero -1
// });
// console.log(numerosImpares)
const numerosImpares = numerosPares.map(numero=>{
    return numero - 1 
})
console.log(numerosImpares)