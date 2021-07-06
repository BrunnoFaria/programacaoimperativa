// objetivo, filtrar de acordo com a condição

const numeros = [1,2,-3,4,5,0,7,8,9,-19];
const numerosFiltrados = numeros . filter(el=>5); //retornou um array com tamanho menor
const numerosFiltrados = numeros . filter(el=>el<-20); //retorna um arrau vazio
const numerosFiltrados = numeros . filter(el=>el>=-19); // retornou um arry do mesmo

console.log(numeros);
console.log(numerosFiltrados);