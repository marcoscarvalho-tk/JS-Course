function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res') 
    var image = document.getElementById('image')
    if (Number(fano.value.length) == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex [0].checked){
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src','avatarbabyboy.png')
                document.body.style.background = "lightblue"
            }else if (idade < 21) {
                //jovem
                img.setAttribute('src','avatarkid.png')
                document.body.style.background = "lightblue"
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src','avatarman.png')
                document.body.style.background = "lightblue"
            }else {
                //idoso
                img.setAttribute('src','grandfa.png')
                document.body.style.background = "lightblue"
            }
        }else if (fsex[1].checked){  // Poderi ser so if mas é só pra garantir ;)
            genero = 'Mulher'
            if (idade >=0 &&  idade < 10) {
                //criança
                img.setAttribute('src','avatarbabygirl.png')
                document.body.style.background = "pink"
            }else if (idade < 21) {
                //jovem
                img.setAttribute('src','avatargirl.png')
                document.body.style.background = "pink"
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src','avatawoman.png')
                document.body.style.background = "pink"
            }else {
                //idoso
                img.setAttribute('src','grandma.png')
                document.body.style.background = "pink"
            }
        }
       
        res.style.textAlign ='center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)  
    }
}