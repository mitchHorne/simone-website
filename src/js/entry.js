require('expose?$!expose?jQuery!jquery');
require("../../node_modules/bootstrap/dist/css/bootstrap.min.css");
require("../../node_modules/bootstrap/dist/js/bootstrap.min");
require("./scroll");
require("./slick");
require("./my-slick");
require("../styles/slick.css");
require("../styles/animate.css");
require("../styles/style.less");
require("./menu");

$(document).ready(() => {
    $(".se-pre-con").fadeOut(2500);
    $('[data-toggle="tooltip"]').tooltip({placement: "right", trigger: "hover"});
});

/*   Slick controls   */

const mainGallery = $(".main-gallery");
const specGallery = $(".specific-gallery");
const myGallery = $(".my-slick-gallery");

function startSlick(obj) {
    mainGallery.removeClass("fade-in-right");
    mainGallery.addClass("fade-out-right");
    mainGallery.addClass("closed");


    for(let i=0; i<obj.length; i++){
        myGallery.append(obj[i]);
    }

    myGallery.slick({
        fade: true,
        lazyLoad: "progressive",
    });

    setTimeout(()=>{
            specGallery.removeClass("fade-out-right");
            specGallery.removeClass("closed");
            specGallery.addClass("fade-in-right");
        },
        2000
    )

}

function destroySlick(){
    specGallery.removeClass("fade-in-right");
    specGallery.addClass("fade-out-right");
    specGallery.addClass("closed");

    myGallery.slick("unslick");
    myGallery.empty();

    setTimeout(()=>{
            mainGallery.removeClass("fade-out-right");
            mainGallery.removeClass("closed");
            mainGallery.addClass("fade-in-right");
        },
        2000
    )
}

/*   React on back to gallery click   */

$(".gallery-back-button").on("click", ()=>{
    destroySlick();
});

/*   React on click   */

$(".main-gallery-block").on("click", ()=>{
    createBabyShower1();
});

/*   Start creation of custom galleries function   */

//Baby Showers
function createBabyShower1(){
    const object = [
        "<img src='./src/galleries/babyshower/payton/payton-cover.jpg'/>",
        "<img src='./src/galleries/babyshower/payton/payton-1.jpg'/>",
        "<img src='./src/galleries/babyshower/payton/payton-2.jpg'/>",
        "<img src='./src/galleries/babyshower/payton/payton-3.jpg'/>",
        "<img src='./src/galleries/babyshower/payton/payton-4.jpg'/>"
    ];

    startSlick(object);
}