document.addEventListener("DOMContentLoaded", () => {
    showMobileNav();
})

const showMobileNav = () =>  {

    const burgerIcon = document.querySelector('.burger');
    
    burgerIcon.addEventListener('click', () => {
        toggleMenu();
    })
}

const toggleMenu = () => {
    
    document.querySelector('.menu-list').classList.toggle('active');
    document.querySelector('.burger').classList.toggle('active');
}