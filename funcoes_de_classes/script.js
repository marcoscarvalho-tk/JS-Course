
    var dudu = new Atleta()
    dudu.nome = "Dudu"
    dudu.sexo = "masculino"
    var duda = new Atleta()
    duda.nome = "Duda"
    duda.sexo = "feminino"   

function Atleta(){
    this.sexo  = ""
    this.nome  = ""
    this.idade = "" 
    this.peso  = ""
    
   

    this.correr = function(km){
    this.peso = this.peso - (km/10)
        resp.innerText = this.nome + " correu "+ km +"km e perdeu "+(km/10) +"kg e tem agora "+ this.peso +"kg"
    }

    this.comer = function(kg){
    this.peso = (this.peso + (kg/2))
       resp.innerText = this.nome + " comeu  " + kg + "gr e tem agora "+ this.peso +" kg"
    }
}
function changecolor(){
    var color = document.getElementsByTagName("body")[0].style.backgroundColor
    if(color == "lightgreen"){
        document.getElementsByTagName("body")[0].style.backgroundColor = "lightblue"
        
    }else{
        document.getElementsByTagName("body")[0].style.backgroundColor = "lightgreen"
    }
}
