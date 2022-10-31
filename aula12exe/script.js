function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('image')
    var low = window.document.getElementById('low-msg')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    //var hora = 12
    //var min = 7
    msg.innerHTML = 'São exatamente ' + (hora + (min <10?':0':':') + min)
    if (hora >= 0 && hora < 6) {
        //boa madrugada!
        img.src = '/home/marcos/Documentos/TI/CursoJs/modelo/image/madrugada.PNG'
        document.body.style.background = "#2753a3"
        low.innerHTML = 'BOA MADRUGADA!'
    }else if (hora >= 6 && hora < 12){
         //bom dia!
         img.src = '/home/marcos/Documentos/TI/CursoJs/modelo/image/manha.PNG'
         document.body.style.background = "#fbff02"
         low.innerHTML = 'BOM DIA!'
    }else if (hora >= 12 && hora < 18){
        //boa tarte!
        img.src = '/home/marcos/Documentos/TI/CursoJs/modelo/image/tarde.PNG'
        document.body.style.background = "#fcc206"
        low.innerHTML='BOA TARDE!'
    }else {
        //boa noite!
        img.src = '/home/marcos/Documentos/TI/CursoJs/modelo/image/noite.PNG'
        document.body.style.background = "#068dfc"
        low.innerHTML = 'BOA NOITE!'
    }

}
//script para atualização da pagina
setTimeout(function() {
    window.location.reload(1);
  }, 60000);