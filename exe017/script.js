
function mult(){
    
    var nr = document.getElementById('nr')
    var nr2 = document.getElementById('nr2')
    var n2 = Number(nr2.value)
    var n = Number(nr.value)
if( nr.value.length  === 0 || nr2.value.length === 0 ){
    alert('[ERRO] preencha os campos')
    location.reload()
    }else{
       tb.innerHTML = '<option>Preencha os campos acima</option>'
        for(var op= 0; op <= n2; op ++){
            var opt = document.createElement('option')
            opt.text = `${n} x ${op} = ${n*op}`
            opt.setAttribute('value','tab' + op) 
            // opt.value = `tab${op}` - outra forma de atribuir 
            tb.appendChild(opt)
            
        }


    }
}