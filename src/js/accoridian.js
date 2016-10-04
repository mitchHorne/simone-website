//Get all the headers that can be clicked
const service = $('.service-container-header');

service.on('click', (event)=>{
    const serviceHeader = event.currentTarget;
    $('.service-container-header.active').removeClass('active');

    const thisServiceId     = event.currentTarget.id;
    const serviceBody       = $('.' + event.currentTarget.dataset.serviceBody);
    const activeServiceBody = $('.active-service-body');

    if(serviceBody[0] === activeServiceBody[0]) {
        serviceBody.removeClass('active-service-body');
        serviceBody.addClass('closed');

        ($('html, body').animate({
            scrollTop: $("#service-id-1").offset().top
        }, 500));

        return;
    }

    if(activeServiceBody[0]) {
        serviceHeader.className += ' active';
        activeServiceBody.removeClass('active-service-body');
        activeServiceBody.addClass('closed');

        setTimeout(()=>{
            serviceBody.addClass('active-service-body');
            serviceBody.removeClass('closed');
            ($('html, body').animate({
                scrollTop: $("#" + thisServiceId).offset().top
            }, 500));
        }, 500);
    } else {
        serviceHeader.className += ' active';
        serviceBody.addClass('active-service-body');
        serviceBody.removeClass('closed');

        ($('html, body').animate({
            scrollTop: $("#" + thisServiceId).offset().top
        }, 500));
    }
});