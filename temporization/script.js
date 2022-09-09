 var x = 0
function action(){
   
    var res = x + 1
    test.innerText = res
    x++
}
setInterval(action, 1000);