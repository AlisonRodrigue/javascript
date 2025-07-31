
function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('image')
    var date = new Date()
    var horas= date.getHours()
    msg.innerHTML= `Agora são ${horas} horas.`
    if(horas >= 0 && horas < 12){
        img.src ='images/ft-manha.png'
        document.body.style.background = "#EEE3D0"
    } else if(horas >= 12 && horas < 18){
        img.src= 'images/ft-tarde.png'
        document.body.style.background="#F27405"
    } else{
        img.src ='images/ft-noite.png'
        document.body.style.background ="#1E2F31"
    }
}