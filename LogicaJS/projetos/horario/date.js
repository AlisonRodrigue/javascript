var msg= window.document.getElementById('msg')
var img= window.document.getElementById('img')
var hora= new Date()
var mnt= new Date()
var date= hora.getHours()
var min= mnt.getMinutes()
msg.innerHTML= `Agora são ${date}:${min} horas`
msg.style.color='#1E2F31'
if(date >=5 && date <12){
    //bom dia
    img.src='images/ft-manha.png'
    window.document.body.style.background= '#EEE3D0'
}else if(date >=12 && date <18){
    //Boa tarde
    img.src='images/ft-tarde.png'
    document.body.style.background='#F27405'
}else{
    img.src='images/ft-noite.png'
    document.body.style.background='#1E2F31'
}