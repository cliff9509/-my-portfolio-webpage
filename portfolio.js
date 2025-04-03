document.querySelectorAll('a[href^="#"]').forEach
(anchor => {
    anchor.addEventListener('click',function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute
            ('href')
        ).scrollIntoView({
            behaviour:'smooth'
        });
    });
});

window.addEventListener('scroll',() =>{
    const navbar = document.querySelector('.navbar');
    window.scrollY > 50 ?
    navbar.computedStyleMap.background = 'rgba(10,10, 10, 0.98)':
    navbar.computedStyleMap.background='rgba(10, 10, 10, 0.95)'; 
    
});