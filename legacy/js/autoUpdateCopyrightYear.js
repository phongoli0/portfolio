// Update copyright year to current year
$(document).ready(function() {
    var $copyright = $('.arlo_tm_footer_wrap p');
    if ($copyright.length) {
        $copyright.html(`&copy; Copyright ${new Date().getFullYear()} phongtruong.com, All Rights Reserved.`);
    }
});