function submit(){
    let mail = document.getElementById('mail').value;
    if(mail.includes('@')){
        console.log(mail)
    }else{
        alert('@ required in Gmail')
    }
    let pas = document.getElementById('pas').value;
    if(pas.length<8)
    alert('min 8 length required ')
    else{
        console.log(pas)
    }
    if(mail.includes('@') && pas.length>=8){
        window.open("indexx.html")
    }
}