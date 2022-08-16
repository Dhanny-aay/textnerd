function menudrop(){
    document.getElementsByClassName('repo')[0].style.background='#ec594D';
    document.getElementsByClassName('hmbgr')[0].style.display='none';
    document.getElementsByClassName('exit')[0].style.display='block';
    var menu = document.getElementsByClassName('menudrop')[0];
    if(menu.style.display==''){
        menu.style.display='block';
    }
    else if(menu.style.display='none'){
        menu.style.display='block';
    }

}

function closemenu(){
    document.getElementsByClassName('repo')[0].style.background='#ffffff';
    document.getElementsByClassName('hmbgr')[0].style.display='block';
    document.getElementsByClassName('exit')[0].style.display='none';

    var menu = document.getElementsByClassName('menudrop')[0];
    if(menu.style.display=='block'){
        menu.style.display='none';
    
    };
}
window.onscroll=function(){
    myFunction()
};
var navbar = document.getElementsByClassName('repo')[0];
var sticky = navbar.offsetTop;
function myFunction(){
    if(window.pageYOffset >= sticky){
        navbar.classList.add('sticky')
    }
    else{
        navbar.classList.remove('sticky')
    }
}