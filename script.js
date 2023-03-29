
const navBarsClose = document.querySelector("#nav_bars_close");
const desktopStyleNavbar = document.querySelector(".desktop-style-navigation");
const openNavBars = document.querySelector("#open_nav_mobile");

navBarsClose.addEventListener("click", function(){
    desktopStyleNavbar.classList.remove("active_nav_mobile");
    desktopStyleNavbar.classList.add("disable_nav_mobile");
})


openNavBars.addEventListener("click", function(){
    desktopStyleNavbar.classList.remove("disable_nav_mobile");
    desktopStyleNavbar.classList.add("active_nav_mobile");
})

