function Restaurante(nome,cardapio){
    this.nome = nome
    this.cardapio  = cardapio
    this.entrada = function(){
    console.log('Seja Bem Vindo ao',this.nome,'!!!','Esse é o nosso cardápio',this.cardapio)
    }
    
}
    const restaurante = new Restaurante('Grelha Argentina',['Chorizo Argentino','TBone','Tomahawk'])
    
    restaurante.entrada()