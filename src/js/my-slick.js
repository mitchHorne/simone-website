const mainGallery = $(".main-gallery");
const galleryBlocks = $(".main-gallery-block")
const specGallery = $(".specific-gallery");
const myGallery = $(".my-slick-gallery");

function startSlick(obj) {

    galleryBlocks.removeClass("fadeIn");
    galleryBlocks.addClass("fadeOut");

    for(let i=0; i<obj.length; i++){
        myGallery.append(obj[i]);
    }

    myGallery.slick({
        adaptiveHeight: true,
        fade: true,
        lazyLoad: "progressive"
    });

    setTimeout(()=>{
            mainGallery.addClass("closed");
        },
        1000);
    setTimeout(()=>{
            specGallery.removeClass("closed");
        },
        2500);
    setTimeout(()=>{
            specGallery.removeClass("fadeOut");
            specGallery.addClass("fadeIn");
        },
        3500);

}

function destroySlick(){
    specGallery.removeClass("fadeIn");
    specGallery.addClass("fadeOut");

    setTimeout(()=>{
            specGallery.addClass("closed");
        },
        1000);
    setTimeout(()=>{
            mainGallery.removeClass("closed");
            myGallery.slick("unslick");
            myGallery.empty();
        },
        2500);
    setTimeout(()=>{
            galleryBlocks.removeClass("fadeOut");
            galleryBlocks.addClass("fadeIn");
        },
        3500);
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
        "<img class='carousel-images' data-lazy='./src/galleries/babyshower/payton/payton-cover.jpg'/>",
        "<img class='carousel-images' data-lazy='./src/galleries/babyshower/payton/payton-1.jpg'/>",
        "<img class='carousel-images' data-lazy='./src/galleries/babyshower/payton/payton-2.jpg'/>",
        "<img class='carousel-images' data-lazy='./src/galleries/babyshower/payton/payton-3.jpg'/>",
        "<img class='carousel-images' data-lazy='./src/galleries/babyshower/payton/payton-4.jpg'/>"
    ];

    startSlick(object);
}