var salarios = [1050.50, 2000.00, 5000.00, 1000.00];
let salAtualizados = salarios.map(valor=>valor<=2000 ? valor*1.4 : valor);
console.log(salAtualizados);

