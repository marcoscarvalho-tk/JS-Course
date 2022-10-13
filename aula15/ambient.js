let num = [8,6,9,7]                                          //vetor
num.push(5)                                                  //adiciona o valor 5 ao final do vetor 
console.log(num)                                             //mostra o vetor no console
console.log(`nosso vetor tem ${num.length} posicoes`)        //mostra todos os valore do vetor
console.log(`o primeiro vetor eh ${num[0]}`)                 //mostra um valor especifico
console.log(`o vetor em ordem fica assim ${num.sort()}`)     //mostra o vetor de forma ordenada
console.log(`o indice solicitado eh`)      //mostra o nr do indice do valor solicitado
var pos = num.indexOf(4)
if( pos == -1){
    console.log(`O valor nao foi encontrado`)
}else{
    console.log(`O valor solicitado eh ${pos} `)
}

for(var i = 0; i < num.length; i++){
    console.log(`A posição ${i} tem o valor ${num[i]} `)     //mostra no console a posiçao com o valor
                                                            //correpondente     

}

for( var i in num ){
    console.log(`A posição ${i} tem o valor ${num[i]}`)    //mostra no console a posiçao com o valor 
                                                           //correspondente de forma mais simplificada

}