function Carregar(){
    var data= new Date()
    var ano = data.getFullYear()
    var fano= document.getElementById('txtano')
    var res= document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('Preeencha os dados corretamente')
    }else{
        var fsex = document.getElementsByName('radsexs')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero ='Homem'
            if(idade >=0 && idade < 13){
                //Criança
                img.setAttribute('src', 'images/ft-manha.png')
            }else if(idade >13 && idade < 18){
                //Adolescente
                img.setAttribute('src', 'images/ft-manha.png')
            }else if(idade >=18 && idade < 55){
                //Adulto
                img.setAttribute('src', 'images/ft-manha.png')
            }else{
                //idoso
                img.setAttribute('src', 'images/ft-manha.png')
            }
        }else if(fsex[1].checked){
            genero= 'Mulher'
            if(idade >=0 && idade < 13){
                //Criança
                img.setAttribute('src', 'images/ft-noite.png')
            }else if(idade >13 && idade < 18){
                //Adolescente
                img.setAttribute('src', 'images/ft-manha.png')
            }else if(idade >=18 && idade < 55){
                //Adulto
                img.setAttribute('src', 'images/ft-manha.png')
            }else{
                //idoso
                img.setAttribute('src', 'images/ft-manha.png')
            }
        }
        res.style.textAlign='Center'
        res.innerHTML=`Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
       
    }

}