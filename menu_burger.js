const logoMenuBurger = document.querySelector(".header-menu_burger");
const filtre = document.querySelector(".header-filtre")
let first = 0;

const updateMenu = () => {
    if (!filtre.classList.contains("header-filtre--active")) {
        filtre.classList.add("header-filtre--active");
    } else {
        filtre.classList.remove("header-filtre--active");
    }
    logoMenuBurger.classList.toggle("open");
    first++;
    if (first === 2) {
        logoMenuBurger.classList.add("animation");
        setTimeout(()=>{
            logoMenuBurger.classList.remove("animation");
        }, 500)
        first = 0;
    }
}