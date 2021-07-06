// métodos acançados arrays
//map()
let letra = ['a', 'b' , 'c' , 'd'];
// el = elementos 
// função arrow
//let letrasMai=letras.map(abc=>abc.toUpperCase));
console.log(letras)

//função declarativa
let letrasMai=letras.map(function maiuscula(letra){
        return letra.toUpperCase()
})
