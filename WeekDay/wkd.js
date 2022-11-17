
  
    var wd
    var kay = 0
    var ctr = 0
    var d   = 1
    var m   = 1
    var y   = 6
    var k 
    var bst 
    var jf
    var ltYbis

    ltYbis = 0
    ctr = 0
    k = -1
    for (i = 1; i <= y; i++){
        ctr ++
        k ++
           
        if(ctr == 4 && i % 100 == 0 && (i / 100) % 4 !== 0){
            ctr = 0
            bst = false
            console.log(bst)
           
        }else if(ctr == 4){
            k++
            ctr = 0
            bst = true
            ltYbis = i
            console.log(bst)
            
        }
        
        if(ctr == 0 && k == 8){
            k = 1
        } 
    
        if(k == 7){
            k = 0
            
        }
        console.log( i +' = '+ctr+' = '+ k)    
       
    }
    
    if (m ==  1 ||m == 2){
        jf = true
    }else{
        jf = false
    }
   // console.log(jf)

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
   
    console.log(m)
    if(d + m + k < 7){
        wd = d + m + k
    } else {
        wd = (d + m + k) % 7
    }

    if(jf == true && bst == true && ctr == 0){
        wd--
        //console.log(jf)
        //nsole.log(bst)
    }
    if(wd == -1){
        wd = 6
    }
   
    //console.log(wd)
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
    }
    
    let yplus = ltYbis + 4
    console.log(`${y} ${ltYbis}O dia da semana é ${wd} e o ano  
    ${bst == true && ctr == 0 ? 'é bissexto.':'não é bissexto.'}O próximo ano bissexto é 
     ${(yplus % 100 == 0 && (yplus / 100) % 4 !== 0 && y > 4) == true ? (ltYbis + 8) + 'd.C' : (ltYbis+4) + '*d.C'}, e o anterior é 
     ${(y <= 4? (ltYbis-=ltYbis-4)+ 'a.C' : ltYbis + 'd.C') }`)


