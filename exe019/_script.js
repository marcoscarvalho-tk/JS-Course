var nrs = []
var nr = document.getElementById('number')
var sum 
var max 
var min
var n

function acrescentar() {
  //converte string em numero
  n = Number(nr.value)
  //cria um elemento, neste caso um "option"
  var opt = document.createElement('option') 
  //adiciona o valor ao elemento option 
  opt.innerHTML = `Valor ${n} adicionado.`
  //insere o elemento option no elementor id="sel"
  sel.appendChild(opt)
  //insere o nr digitado no array nrs
  nrs.push(n)
  
  
  if ( number.value.length === 0 || n < -100 || n > 100){
      alert('Error: \u26a0\n\n\Preencha os campos de acordo com as especificações!')
      location.reload()// comando para recarregar a pagina
  }
  nr.value = ''//comandos para limpar e
  nr.focus()   //localizar o cursor no elemento id="nr"
} 
function result(){
     
   
//realiza a soma dos valores inseridos 
    sum = 0
// let extingue a variavel fora do bloco
    for( let i = 0; i < nrs.length; i++){
      sum = sum + nrs[i]
    }
//realiza a comparação dos valores inseridos selecionando o menor
    max = nrs[0]
    for( let i = 0; i < nrs.length; i++){
        if( nrs[i]> max) {
        max = nrs[i]
      }
    }  
//realisa a comparaçao dos valores inseridos selecionando o maior
    min = nrs[0]
    for( let i = 0; i < nrs.length; i++){ 
      if( nrs[i] < min) {
        min = nrs[i]
      }
    }  
   
    into.innerHTML = ` Os números acrescentados foram ${nrs}.<br>
    Ao todo temos ${nrs.length} número acrescentados.<br>
    A soma de todos os números inseridos é ${sum}<br> 
    A media dos números iseridos é ${sum/nrs.length}<br>
    O menor valor é ${min}<br>
    O maior valor é ${max} <br>
    o segundo nr é ${nrs[1]}`
   
}