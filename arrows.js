function print (mensagem){
    console.log(mensagem)
}
print("Olá, bom dia")

let exibir = print => console.log(print)

exibir("Olá, bom dia")

function soma(n1, n2){
    return n1 + n2
}

console.log(soma(10,10))

let somar = (n1,n2) => n1 + n2

console.log(somar (5,5))

