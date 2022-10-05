document.addEventListener("DOMContentLoaded", () => {

    showMobileNav();
    navbarAtTop();

})

const showMobileNav = () =>  {

    const mobileNav = document.querySelector('.menu-list');
    const burgerIcon = document.querySelector('.burger');

    burgerIcon.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
        burgerIcon.classList.toggle('active');
    })
}

// const navbarAtTop = () => {

//     document.addEventListener('scroll', () => {
//         const navbar = document.querySelector('.navbar');
//         const navbarHeight = 100;

//         const distanceFromTop = Math.abs(
//             document.body.getBoundingClientRect().top
//         );

//         if (distanceFromTop >= navbarHeight) navbar.classList.add("fixed-top")
//         else navbar.classList.remove("fixed-top");
//     })
// }