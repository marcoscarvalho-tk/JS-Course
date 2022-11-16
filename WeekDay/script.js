// executa o evento com a tecla enter
document.addEventListener('keypress', function(e){
    if(e.which == 13){
      calc();
    }
  }, false);
function calc(){
    var dd = document.getElementById('dd')
    var mm = document.getElementById('mm')
    var yyyy = document.getElementById('yyyy')
    var ac = document.getElementsByName('radio')
    var ltYbis
    var bst
    var wd
    var kay = 0
    var ctr = 0
    var d = Number(dd.value) 
    var m = Number(mm.value)
    var y = Number(yyyy.value)
    var k = Number(kay.value)
   // alert para caso a o ano seja menor que zero ou contenha mais de cinco digitos
    if(y < 0 || yyyy.value.length >= 5 ){
        alert('[ERRO] Insira uma data entre 0 e 9999')
        yyyy.value = ''
        yyyy.focus()
        res.innerHTML = ''
    }else{
    // atribuindo valores iniciais a funçao
    ltYbis = 0
    ctr = 0
    k = -1
    // laço de repetiçao para o ano digitado acrescentando um ctr e um k a cada looping
    for (i = 1; i <= y; i++){
        ctr ++
        k ++
        // condiçao caso o ano seja divisivel por 100 sem resto e de 4 com resto   
        if(ctr == 4 && i % 100 == 0 && (i / 100) % 4 !== 0){
            ctr = 0
            bst = false
            //console.log(bst)
        // condiçao para todos os outros numeros divisiveis por quatro que nao satisfaça a condiçao anterior    
        }else if(ctr == 4){
            k++
            ctr = 0
            bst = true
            ltYbis = i
            //console.log(bst)
            
        }
        // condiçao para reiniciar a contagem da chave caso ultrapasse a proxima condiçao
        if(ctr == 0 && k == 8){
            k = 1
        } 
        // condiçao para reiniciar a contagem da chave 
        if(k == 7){
            k = 0
            
        }
          
     
    }
    // condiçao para adequar os dias da semana nos meses 1 e 2 dos anos bissextos referida na linha 115
    if(m ==  1 ||m == 2){
        jf = true
    }else{
        jf = false
    // switch para atribuir os valores das cahves a cada mes especifico
    }
    switch(m){
        case  1:
            m = 1
            break         
        case 2:
            m = 4
            break
        case 3:
            m = 4
            break
        case 4:
            m = 0
            break
        case 5:
            m = 2
            break
        case 6:
            m = 5
            break
         case 7: 
            m = 0
            break
        case 8: 
            m = 3
            break
        case 9: 
            m = 6
            break
        case 10:
            m = 1
            break
        case 11:
            m = 4
            break   
        case 12: 
            m = 6
            break 
        default:
            m = 'ERRO'        
    }
     // condicoes para calcular os dias das semanas de acordo com a formula 
    if(d + m + k < 7){
        wd = d + m + k
    } else {
        wd = (d + m + k) % 7
    }
    if(jf == true && bst == true && ctr == 0){
        wd--
    }
    if(wd == -1){
        wd = 6
    }
    // switch para atribuir os nomes dos dias das semana de acordo com as chaves
    switch (wd) {
                case 1:
					wd = 'Domingo'
					break
				case 2:
					wd = 'Segunda-feira'
					break
				case 3:
					wd = 'Terça-feira'
					break
				case 4:
					wd = 'Quarta-feira'
					break
				case 5:
					wd = 'Quinta-feira'
					break
				case 6:
					wd = 'Sexta-feira'
					break
				case 0:
					wd = 'Sabado'
					break
				default:
                    wd = 'ERRO'
                    
                //resposta na div res calculando o dia da semana, o ano bisexto anteiror e o proximo seguindo as regras do calendario gregoriano d.C
                }if (ac [0].checked){  // funçao selecionada no input radio
                    let yplus = ltYbis + 4
                    let yminus = ltYbis - 4
                    res.innerHTML = `O dia da semana é ${wd} e o ano  
                    ${bst == true && ctr == 0 ? 'é bissexto.':'não é bissexto.'} O próximo ano bissexto é 
                     ${(yplus % 100 == 0 && (yplus / 100) % 4 !== 0 && y > 4) == true ? (ltYbis + 8) + ' d.C' : (ltYbis+4) + ' d.C'}, 
                     e o anterior é ${(y <= 4 ?(ltYbis-=ltYbis-4)+ ' a.C' : (yminus % 100 == 0 && (yminus / 100) % 4 !== 0 && ctr == 0) == true? 
                     (ltYbis - 8) + ' d.C' : y == ltYbis ? (ltYbis - 4) + ' d.C': ltYbis + ' d.C') }`

                //resposta na div res calculando o dia da semana, o ano bisexto anteiror e o proximo seguindo as regras do calendario gregoriano a.C
                }else if (ac [1].checked){
                    let yplus = ltYbis + 4
                    let yminus = ltYbis - 4
                    res.innerHTML = `O dia da semana é ${wd} e o ano  
                   ${bst == true && ctr == 0 ? 'é bissexto.':'não é bissexto.'} O ano bissexto anterior é  
                   ${(yplus % 100 == 0 && (yplus / 100) % 4 !== 0) == true ? (ltYbis + 8) + ' a.C' : (ltYbis + 4) + ' a.C'} 
                   e o próximo é ${(y <= 4 ?(ltYbis-=ltYbis-4)+ ' d.C' : (yminus % 100 == 0 && (yminus / 100) % 4 !== 0 && ctr == 0) == true? 
                   (ltYbis - 8) + ' a.C' : y == ltYbis ? (ltYbis - 4) + ' a.C': ltYbis + ' a.C') }`
                }  
}
}

                //os anos bissextos sao atribuidos atraves de uma contagem padrao var ctr de 0 a 3 e que salta um digito na chave var kay a cada vez que é reiniciada
                //a chave var kay segue uma sequencia de 0 a 6 que tambem é reiniciada seguindo um padrao
                //os anos var y determinam a quantidade de vezes que essas variaveis serao contadas e os digitos sao realinhados a cada 400 anos  
                //as variaveis sao iniciadas com i = 1 / ctr = 0 / k = -1 respectivamente para seguir a regra da fórmula do calendario.