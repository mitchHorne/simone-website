const menuControl = $(".menu-control");
const menuBrand = $(".brand");
const menuItems = $(".menu-item");
const menu = $(".menu");

$(window).on("click", ()=>{
    if(menu.hasClass("fadeInRight"))
        menu.removeClass("fadeInRight").addClass("fadeOutRight");
});
menu.on("click", (event)=>{
    event.stopPropagation();
});
menuControl.on("click", (event)=>{
    event.stopPropagation();
});

menuControl.on("click", ()=>{operateMenu()});
menuBrand.on("click", ()=>{operateMenu()});
menuItems.on("click", ()=>{operateMenu()});

function operateMenu(){
    if(menu.hasClass("fadeOutRight"))
        menu.removeClass("fadeOutRight").addClass("fadeInRight");
    else
        menu.removeClass("fadeInRight").addClass("fadeOutRight");
}
