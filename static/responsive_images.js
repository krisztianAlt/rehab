function set_body_height() { // set body height = window height
    $('body').height($(window).height());
    console.log('I am in resp-HEIGHT section.');
}

$(document).ready(function() {
    $(window).bind('resize', set_body_height);
    set_body_height();
});