document.querySelector('.menu-btn').addEventListener('click',()=>{
    document.querySelector('.nav-menu').classList.toggle('show')

        //usando el scroll reveal}
        ScrollReveal().reveal('.showcase');
        ScrollReveal().reveal('.new-cards',{delay:500});
        ScrollReveal().reveal('.cards-banner-one',{delay:500});
        ScrollReveal().reveal('.cards-banner-two',{delay:500});

})