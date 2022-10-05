document.addEventListener("DOMContentLoaded", () => {
    showMobileNav();
})

const showMobileNav = () =>  {

    const mobileNav = document.querySelector('.menu-list');
    const burgerIcon = document.querySelector('.burger');

    burgerIcon.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
        burgerIcon.classList.toggle('active');
    })
}