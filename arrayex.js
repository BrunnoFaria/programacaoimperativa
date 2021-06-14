let filmes = ["star wars", "clube da luta",  "o poderoso chefão", "top gun",  "interestelar"]


let cartoons = ["toy story", "Procurando Nemo", "kung-fu panda", "wally", "fortnite"]

//criei uma função para adicionar jogos do cartoon em filmes
function add (){
    let removed = cartoons.shift() // retirando de cartoons e adicionando na variavel removiveis
    filmes.push(removed)  // adicinando a filmes o que foi removido de cartoons
}
//excluir o ultimo elemento da lista que era um jogo
cartoons.pop();
add()
add()
add()
add()
console.log(filmes)
//console.log(cartoons)
