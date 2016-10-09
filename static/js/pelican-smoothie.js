/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        if(  $anchor.attr('href') == '#page-top' ) {
        $('html, body').stop().animate({
            scrollTop: 0
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
        }
        else if($anchor.attr('href') == '#search'){
        $('.search-button').addClass('active')
        event.preventDefault();
        }
        else {
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
        }
    });
});
//

var elements = document.getElementsByTagName("aside");
for(var i=0; i<elements.length; i++) {
    if ($( window ).width() >= 800) {
        $(elements[i]).css({'margin-top': -$(elements[i]).height()})
    }
    else {
        $(elements[i]).css({'margin-top': 0})
    }
}

$( window ).resize(function() {
    var elements = document.getElementsByTagName("aside");
    for(var i=0; i<elements.length; i++) {
        if ($( window ).width() >= 800) {
            $(elements[i]).css({'margin-top': -$(elements[i]).height()})
        }
        else {
            $(elements[i]).css({'margin-top': 0})
        }
    }
});
