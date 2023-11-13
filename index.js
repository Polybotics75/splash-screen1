

function darkModeToggle(e){
    var anchor = e.target.closest('div.switch-box');
    
    //TOGGLE WITH THE ACTIVE CLASS
    anchor.classList.toggle('active');

    //TOGGLE WITH BODY DARK MODE
    var body = document.querySelector('body');
    body.classList.toggle('dark');
    
    //CHANGE TOGGLE ICON
    var switchToggle = document.querySelector('.switch-toggle');
    if(anchor.classList.contains('active')){
        switchToggle.innerHTML = '<i class="fa fa-moon"></i>';
    }else{
        switchToggle.innerHTML = '<i class="fa fa-sun"></i>';
    }
}