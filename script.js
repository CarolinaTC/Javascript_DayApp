function upload(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('image')
    var data = new Date()
    var hour = data.getHours()
    //var hour = 10

    

    msg.innerHTML = `Right Now: ${hour} hours`

    if(hour > 0 && hour < 12){
        // bom dia
        img.src = 'circle-morning.png'
        document.body.style.background = ' #d6cdc0'


    } else if(hour >=12 && hour <= 18){
        // boa tarde
        img.src = 'circle-afternoon.png'
        document.body.style.background = '#fed67e'
    } else{
        //boa noite
        img.src = 'circle-cropped.png'
        document.body.style.background = '#7f8f99'
    }


}

