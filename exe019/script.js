var nrs = []
var nr = document.getElementById('number')


function isNumero(n) {
   if (Number(n) >= 1 && Number(n) <= 100){
    return true
  } else {
    return false
  } 

}
function inLista(n, l){
  if (l.indexOf(Number(n)) != -1){
    return true
  }else {
    return false
  }
}  
function adicionar(){
  if (isNumero(nr.value) && !inLista(nr.value, nrs)){
   nrs.push(Number(nr.value))
   let opt = document.createElement('option')
   opt.innerHTML=`O valor adicionado é ${nr.value}`
   sel.appendChild(opt)
   into.innerHTML = ''
  }else {
    window.alert('Valor invalido ')
  }

  nr.value = ''
  nr.focus()
}

 
function result(){
  if(nrs.length == 0){
    alert('Favor preencha o campo especificado!')
  } else{
    let sum = 0
    let max = nrs[0]
    let min = nrs[0]
    
    for( let pos in nrs){
      sum += nrs[pos]
      if (nrs[pos] > max)
      max = nrs[pos]
      if(nrs[pos] < min)
      min = nrs[pos]
    }
    into.innerHTML =''
    into.innerHTML += `<p>Os números acrescentados foram ${nrs}.</p>`
    into.innerHTML += `<p>Ao todo temos ${nrs.length} número acrescentados.</p>`
    into.innerHTML += `<p>A soma de todos os números inseridos é ${sum} </p>`
    into.innerHTML += `<p>A media dos números iseridos é ${sum/nrs.length}</p>`
    into.innerHTML += `<p>O menor valor é ${min}</p>`
    into.innerHTML += `<p>O maior valor é ${max}</p>`
  
  }
   
}

