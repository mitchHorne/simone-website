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
require("./accoridian");

$(document).ready(() => {
    $(".se-pre-con").fadeOut(2500);
    $('[data-toggle="tooltip"]').tooltip({placement: "right", trigger: "hover"});
});