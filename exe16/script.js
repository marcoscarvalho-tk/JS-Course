function contador(){
    var start = document.getElementById('start')
    var end = document.getElementById('end')
    var step = document.getElementById('step')
    var conting = document.getElementById('conting')
    var s = Number(start.value)
    var e = Number(end.value)
    var stp = Number(step.value)
    if (stp <= 0){
        window.alert('[ERRO] passo inválido, considerando passo 1')
        stp = 1
    }    
    if (start.value.length == 0 || end.value.length == 0 || step.value.length ==0){
        //( e == '' || s == '' || stp == '')
        // outra forma: e.value.length ==0 para aceitar valor 0
        alert('[ERRO] Preencha os campos')   
        conting.innerHTML = 'Impossível contar'
      
    }else{
        conting.innerHTML = 'Contando...'
        //Contagem crescente
        if( s < e){
            for (var i = s; i <= e; i+= stp){
    
                conting.innerHTML += ` &#x1F449 ${i},`
            }
        //Contagem decrescente   
        }else{
            for(var i = s; i >= e; i-= stp){
              
            conting.innerHTML += ` &#x1F449 ${i},`   
            }
        }
        conting.innerHTML += '&#x1F3C1'     
    }
    
    
}
   // conting.innerHTML = `${inicio} ${fim} ${passo}`
   
