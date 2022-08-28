function validar(){
    var valor = document.getElementById("numero").value;

    if(valor.length > 2){
        alert("Insira um número com dois algarismos!");
        return false;
    }else{
        return true;
    }
    
}