let gam = document.querySelector('.gam'),
    menu = document.querySelector('.menu')
    menu_anh = document.querySelectorAll('.menu a')
    header = document.querySelector('header')
    card = document.querySelectorAll('.features-card')
    

gam.addEventListener('click', () => {
    menu.classList.toggle('menu-active')
})

menu_anh.forEach(item => {
    
    item.addEventListener('click', ()=>{
        menu.classList.remove('menu-active')
    })
});

window.addEventListener('scroll', function() {
    let clientHeight = document.documentElement.clientHeight
    for (let key of card) {
        let scrollStartAnimate = key.getBoundingClientRect().top - clientHeight
        console.log(scrollStartAnimate);
        if (scrollStartAnimate < -150) {
            key.classList.add('features-card__anim')
        } else {
            key.classList.remove('features-card__anim')
        }
    }
    if (this.pageYOffset > 78.4) {
        header.classList.add('header-fixed')
       
    } else {
        header.classList.remove('header-fixed')
        
    }

})