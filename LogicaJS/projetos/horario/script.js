
function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('image')
    var date = new Date()
    var horas= date.getHours()
    msg.innerHTML= `Agora são ${horas} horas.`
    if(horas >= 0 && horas < 12){
        img.src ='images/ ft-manha.png'
    } else if(horas >= 12 && horas < 18){

    } else{

    }
}