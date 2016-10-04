const mainGallery = $(".main-gallery");
const galleryBlocks = $(".main-gallery-block");
const specGallery = $(".specific-gallery");
const myGallery = $(".my-slick-gallery");

const prevArrow = "<span class='fa-stack fa-lg prev-button-container'>" +
    "<i class='fa fa-circle fa-stack-2x'></i><i class='fa fa-arrow-left fa-stack-1x'><" +
    "/i></span>";
const nextArrow = "<span class='fa-stack fa-lg next-button-container'>" +
    "<i class='fa fa-circle fa-stack-2x'></i><i class='fa fa-arrow-right fa-stack-1x'>" +
    "</i></span>";

function startSlick(obj) {

    galleryBlocks.removeClass("fadeIn");
    galleryBlocks.addClass("fadeOut");

    for(let i=0; i<obj.length; i++){
        myGallery.append(obj[i]);
    }

    myGallery.slick({
        arrows: true,
        centerMode:true,
        customPaging: ()=> {
            return $('<a></a>').text('.');
        },
        dots: true,
        fade: true,
        lazyLoad: "progressive",
        nextArrow: nextArrow,
        prevArrow: prevArrow
    });

    setTimeout(()=>{
            mainGallery.addClass("closed");
        },
        1000);
    setTimeout(()=>{
            specGallery.removeClass("closed");

            ($('html, body').animate({
                scrollTop: $("#memories").offset().top
            }, 1000));
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

            ($('html, body').animate({
                scrollTop: $("#memories").offset().top
            }, 1000));
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

galleryBlocks.on("click", (event)=>{
    const clickedGallery = event.currentTarget;

    switch(clickedGallery.id) {
        case 'baby-shower-payton' :
            createPaytonBabyShower();
            break;
        case 'baptism-payton' :
            createPaytonBaptism();
            break;
        default :
            break;
    }
});


/*   Start creation of custom galleries function   */

//Baby Showers
function createPaytonBabyShower(){
    const object = [
        "<img class='carousel-images' data-lazy='./src/galleries/babyshower/payton/main.jpg'/>",
        "<img class='carousel-images' data-lazy='./src/galleries/babyshower/payton/payton_1.jpg'/>",
        "<img class='carousel-images' data-lazy='./src/galleries/babyshower/payton/payton_2.jpg'/>",
        "<img class='carousel-images' data-lazy='./src/galleries/babyshower/payton/payton_3.jpg'/>",
        "<img class='carousel-images' data-lazy='./src/galleries/babyshower/payton/payton_4.jpg'/>"
    ];

    startSlick(object);
}

//Baptisms
function createPaytonBaptism(){
    const object = [
        "<img class='carousel-images' data-lazy='./src/galleries/baptisms/payton/main.jpg'/>",
        "<img class='carousel-images' data-lazy='./src/galleries/baptisms/payton/payton_1.jpg'/>",
        "<img class='carousel-images' data-lazy='./src/galleries/baptisms/payton/payton_2.jpg'/>",
        "<img class='carousel-images' data-lazy='./src/galleries/baptisms/payton/payton_3.jpg'/>",
        "<img class='carousel-images' data-lazy='./src/galleries/baptisms/payton/payton_4.jpg'/>",
        "<img class='carousel-images' data-lazy='./src/galleries/baptisms/payton/payton_5.jpg'/>",
        "<img class='carousel-images' data-lazy='./src/galleries/baptisms/payton/payton_6.jpg'/>",
        "<img class='carousel-images' data-lazy='./src/galleries/baptisms/payton/payton_7.jpg'/>",
        "<img class='carousel-images' data-lazy='./src/galleries/baptisms/payton/payton_8.jpg'/>",
        "<img class='carousel-images' data-lazy='./src/galleries/baptisms/payton/payton_9.jpg'/>",
        "<img class='carousel-images' data-lazy='./src/galleries/baptisms/payton/payton_10.jpg'/>",
        "<img class='carousel-images' data-lazy='./src/galleries/baptisms/payton/payton_11.jpg'/>",
    ];

    startSlick(object);
}