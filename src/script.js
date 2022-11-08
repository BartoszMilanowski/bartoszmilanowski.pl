document.addEventListener("DOMContentLoaded", () => {
    showMobileNav();
    pwaApp();
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

const pwaApp = () => {
   if("serviceWorker" in navigator) {
       navigator.serviceWorker.register("sw.js").then(registration => {
           console.log("SW Registered!");
           console.log(registration);
       }).catch(error => {
           console.log("SW Registration failed");
           console.log(error);
       })
   } else {

   }
}