const notas [1,2,3,4,5,6,7,8,9,10]

// separa notas maiores que 7
const aprovados = notas.filter(nota=>nota=>7);
//separa notas  menores que 7
const reprovados=notas.filter (nota=>nota<7);

console.log(notas);
console.log('Aprovados: ',aprovados);
console.log('Reprovados: ',reprovados);
