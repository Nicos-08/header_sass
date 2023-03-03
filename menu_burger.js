const logoMenuBurger = document.querySelector(".header-menu_burger");
let first = 0;

const updateMenu = () => {
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