var idade = 65
console.log(`Você tem ${idade} anos`)
if (idade < 16 ){
    console.log('Não vota')
}else if (//idade >= 16 && (opcional porém redundante)
          idade < 18 || idade >= 65) {
       console.log('voto opcional') 
}else{
    console.log('voto obrigatorio')
}