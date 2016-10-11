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



$(document).ready(function() {
  $(window).resize(refreshAsides);

  // Since we may not have the height correct for the images, adjust the asides
  // too when an image is loaded.
  $('img').load(function() {
    refreshAsides();
  });

  // On the off chance the browser supports the new font loader API, use it.
  if (document.fontloader) {
    document.fontloader.notifyWhenFontsReady(function() {
      refreshAsides();
    });
  }

  // Lame. Just do another refresh after a second when the font is *probably*
  // loaded to hack around the fact that the metrics changed a bit.
  window.setTimeout(refreshAsides, 200);
  refreshAsides();
});

function refreshAsides() {
  // Don't position them if they're inline.
  if ($(document).width() < 800) return;

  // Vertically position the asides next to the span they annotate.
  $("aside").each(function() {
    var aside = $(this);

    // Find the span the aside should be anchored next to.
    var name = aside.attr("id");
    var span = $("span[id='" + name + "']");
    if (span == null) {
      window.console.log("Could not find span for '" + name + "'");
      return;
    }

    aside.css({top: span.position().top - 3});
  });
}
