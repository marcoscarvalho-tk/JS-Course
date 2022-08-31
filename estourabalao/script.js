function addBola(){
    var bola = document.createElement("div");
    bola.setAttribute("class", "bola");

    // esta associação de funções gera um numero
    // aleatório de 0 a 500 arredondando os decimais
    // para o numre inteiro para menos
    var p1 = Math.floor(Math.random() * 500);
    var p2 = Math.floor(Math.random() * 500);
    
    // esta função segue a lógica das ateriores
    // para gerar cores aleatóreas das bolas
    var c1 = Math.floor(Math.random() * 254);
    var c2 = Math.floor(Math.random() * 254);
    var c3 = Math.floor(Math.random() * 254);
    bola.setAttribute("style", "left:"+p1+"px;top:"+p2+"px;background-color:rgb("+c1+","+c2+","+c3+")");
    bola.setAttribute("onclick", "estourar(this)");

    document.body.appendChild(bola);
    
}

function estourar(elemento){
    document.body.removeChild(elemento);
    
}

function iniciar(){
    setInterval(addBola, 2000);
} 
