if(typeof localStorage.nome =="undefined"){
    localStorage.nome = prompt("Qual o seu nome?");
}


document.getElementById("info").innerHTML = localStorage.nome;

/* além do localStorage exite o sessionStorage
* a diferença é que o local armazena a informação
* por tempo indeterminado e o session armazena
* enquanto o usuario estiver com a pg aberta
*
*localStorage.getItem = pega a informação
*localStorage.setItem = altera/insere a informação
*localStorage.removeItem = remove a informação
*localStorage.(item) é forma resumida
*/