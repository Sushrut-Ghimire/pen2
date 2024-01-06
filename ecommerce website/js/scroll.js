document.addEventListener('scroll', () => {
    const nav = document.querySelector('.content');
    var windowheight = window.innerHeight;

    if (window.scrollY > 100){
        nav.classList.add('active');
    }

    else{
        nav.classList.remove('active');
    }

})