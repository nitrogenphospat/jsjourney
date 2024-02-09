const PI = 3.1415
function duarr(){
let isian = Number(document.getElementsByTagName('input')[0].value)
let awe = document.getElementById('hasil')
console.log(isian , typeof isian)
if(isNaN(isian) || isian == ''){
    alert('ap cb')
    document.getElementsByTagName('input')[0].value = ''
}else{
    awe.style.visibility = "visible"
    awe.innerText = `Radius: ${isian}\nHasilnya : ${isian**2 * PI.toPrecision(3)} cm` 
    document.getElementsByTagName('input')[0].value = ''
    
}
}