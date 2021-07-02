function menu(pratoSelecionado, tempo) {

    let tempoDoPrato;

    switch (pratoSelecionado) {
        case 'pipoca':
            tempoDoPrato = 10;
            esquentarPrato(tempoDoPrato, tempo)
            break;

        case 'macarrão':
            tempoDoPrato = 8;
            esquentarPrato(tempoDoPrato, tempo)
            break;

        case 'carne':
            tempoDoPrato = 15;
            esquentarPrato(tempoDoPrato, tempo)
            break;

        case 'feijão':
            tempoDoPrato = 12;
            esquentarPrato(tempoDoPrato, tempo)
            break;

        case 'brigadeiro':
            tempoDoPrato = 8;
            esquentarPrato(tempoDoPrato, tempo)
            break;

        default:
            console.log("Não temos essa opção de prato !!!")
    }
}


function esquentarPrato(tempoPreparo, tempoEscolhido) {
    if(tempoEscolhido < tempoPreparo){
        console.log("Tempo de preparo Insuficiente")
    } else if(tempoEscolhido > 3 * tempoPreparo){
        console.log("Seu prato, explodiu... Kabuuuuuuum!!")
    } else if(tempoEscolhido > 2 * tempoPreparo){
        console.log("Hum... Lamento mas a refeição queimou!")
    } else {
        console.log("Boas notícias, seu prato está pronto!!")
    }
}


menu('pipoca', 7);
menu('macarrão', 30);
menu('carne', 35);
menu('feijão', 13);