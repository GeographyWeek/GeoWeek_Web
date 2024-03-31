window.onscroll = function(){
    if(document.documentElement.scrollTop > 330){
        document.querySelector('.back-up-contenedor')
        .classList.add('show');
    }
    else{
        document.querySelector('.back-up-contenedor')
        .classList.remove('show');
    }
}
document.querySelector('.back-up-contenedor')
.addEventListener('click', () =>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});