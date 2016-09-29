//Get all the headers that can be clicked
const service = $('.service-container-header');

service.on('click', (event)=>{
    //Moving the currently active header to latest clicked one
    $('.service-container-header.active').removeClass('active');
    event.currentTarget.className += ' active';

    //Open the closed service container body
    const serviceBody       = $('.' + event.currentTarget.dataset.serviceBody);
    const activeServiceBody = $('.active-service-body');

    if(serviceBody[0] === activeServiceBody[0]) {
        serviceBody.removeClass('active-service-body');
        serviceBody.addClass('closed');
        return;
    }

    if(activeServiceBody[0]) {
        activeServiceBody.removeClass('active-service-body');
        activeServiceBody.addClass('closed');

        setTimeout(()=>{
            serviceBody.addClass('active-service-body');
            serviceBody.removeClass('closed');
        }, 500);
    } else {
        serviceBody.addClass('active-service-body');
        serviceBody.removeClass('closed');
    }
});