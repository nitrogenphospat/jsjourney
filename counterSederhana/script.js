alert('Males, by nitrogenphospat')

let angka = 0
document.getElementsByTagName('span')[0] = angka

function reset(){
    document.getElementsByTagName('span')[0].style.color = 'black'
    angka = 0
    document.getElementsByTagName('span')[0].innerHTML = angka
    document.getElementsByClassName('logs')[0].innerHTML = `<span style="font-family: 'Courier New', Courier, monospace;font-weight: bolder;font-size: 22px;">LOGS </span>`
}
function tambah(){
    angka = angka + 1
    if(angka > 0){
        document.getElementsByTagName('span')[0].style.color = 'green'
    }else if(angka < 0){
        document.getElementsByTagName('span')[0].style.color = 'red'
    }
    document.getElementsByTagName('span')[0].innerHTML = angka
    document.getElementsByClassName('logs')[0].innerHTML += `<div class='x' style="color:green;">seseorang telah menambahkan angka</div>`
}
function kurang(){
    angka = angka - 1
    if(angka > 0){
        document.getElementsByTagName('span')[0].style.color = 'green'
    }else if(angka < 0){
        document.getElementsByTagName('span')[0].style.color = 'red'
    }
    document.getElementsByTagName('span')[0].innerHTML = angka
    document.getElementsByClassName('logs')[0].innerHTML += `<div class='x' style="color:red;">seseorang telah mengurangkan angka</div>`
}