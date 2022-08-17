function apertouTecla(event){
    console.log("APERTOU A TECLA: "+event.keyCode);
}

function soltouTecla(event){
    console.log("SOLTOU A TECLA: "+event.keyCode);
}

function segurouTecla(event){
    console.log("SEGUROU A TECLA: "+event.keyCode);
}

function acionouShift(event){
    //este princio funciona para teclas combinadas
    //ex: ctrlKey + E, basta adicinar a segunda condição 
    if(event.shiftKey == true){
        console.log("TECLA SHIFT ACIONADA")
    }
}