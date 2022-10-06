//var agora = new Date()
//var hora = agora.getHours()
//var min = agora.getMinutes()
//var seg =  agora.getSeconds()
var hora = 1
console.log(`agora sao exatamente ${hora} horas`)
 //${min} minutos e ${seg} segundos (incluir para horario atual completo)
if (hora < 6) {
    console.log('Boa madrugada!')
} else if (hora <= 12 ) {
    console.log('Bom dia!')

} else if (hora <= 18 ) {
    console.log('Boa tarde!')
    
}else {
    console.log('Boa noite!')
}