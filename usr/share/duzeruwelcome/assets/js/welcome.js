$(document).ready(function() {
    var $nav = $('#navigation');
    $nav.css('left', -$nav.outerWidth());
    $nav.show();
    $nav.delay(250).animate({ left: 0 }, 500);
});
