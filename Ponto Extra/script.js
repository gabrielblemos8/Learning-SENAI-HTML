function verificar(){
    var data = new Date()
    var atual = data.getFullYear()
    var txtano = document.getElementById('txtano')
    var anonasc = Number(txtano.value)
    var res = document.getElementById('res')

    var idade = atual - anonasc

    var img = document.createElement('img')
    var genero = ''

    var sex = document.getElementsByName('radsex')

    if(sex[0].checked){
        genero='Homem'

        if(idade >=0 && idade <10){

            img.setAttribute('src','bebem.png')

        }else if(idade<21){
            img.setAttribute('src','jovemm.png')
        }else if(idade <50){
            img.setAttribute('src','adultom.png')
        }else{
            img.setAttribute('src','idosom.png')
        }

    }else if(sex[1].checked){
        genero='Mulher'

        if(idade >=0 && idade <10){

            img.setAttribute('src','bebef.png')

        }else if(idade<21){
            img.setAttribute('src','jovemf.png')
        }else if(idade <50){
            img.setAttribute('src','adultof.png')
        }else{
            img.setAttribute('src','idosof.png')
        }
    

    }
        res.style.textAlign="center"
        res.innerHTML=`Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)


   

}