 
var startchat = document.getElementById('startchat');
let form = document.getElementById('form-chat'); 
var closeBtn = document.getElementById('closes');

startchat.addEventListener('click', function(){
  
    if(form.style.display == "block" ){
        form.style.display = "none";

    }else{
        form.style.display = "block";

    }
    if(startchat.innerHTML = 'close chat'){

        startchat.innerHTML = 'start the chat'

    }else{
       startchat.innerHTML = 'close chat'
    }
    startchat.innerHTML = 'close chat'

});

closeBtn.addEventListener('click', function(){

    form.style.display = 'none'
})

