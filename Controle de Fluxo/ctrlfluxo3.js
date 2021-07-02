function podeSubir (alturadaPessoa,acompanhada){
    if (alturadaPessoa >= 140 && alturadaPessoa < 200){
        return true
    }else if (alturadaPessoa < 140 && alturadaPessoa > 120 && acompanhada == true){
        return true
    }else {
        return false
    }
}   
console.log (podeSubir(121,true))