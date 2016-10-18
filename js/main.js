jQuery(document).ready(function($) {
    //mobile version - open/close navigation
    $('#fadeIn').fadeIn(1000);
    $('.cd-nav-trigger').on('click', function(event) {
        event.preventDefault();
        if ($('header').hasClass('nav-is-visible')) $('.moves-out').removeClass('moves-out');

        $('header').toggleClass('nav-is-visible');
        $('.cd-main-nav').toggleClass('nav-is-visible');
        $('.cd-main-content').toggleClass('nav-is-visible');
    });

    //mobile version - go back to main navigation
    $('.go-back').on('click', function(event) {
        event.preventDefault();
        $('.cd-main-nav').removeClass('moves-out');
    });

    fixCase();
    fixMobile();

    function checkWindowWidth() {
        var mq = window.getComputedStyle(document.querySelector('header'), '::before').getPropertyValue('content').replace(/"/g, '').replace(/'/g, "");
        return (mq == 'mobile') ? false : true;
    }
});

$("#trigger-overlay").addClass("menu_blog");
$(window).scroll(function() {     
    var scroll = $(window).scrollTop();
    if (scroll > 50) {
        $("#header_shadow").addClass("scroll");
        $("#header_shadow").addClass("blog_head");
        $("#my_logo").attr("src","images/logo-01.svg");
        $("#trigger-overlay").removeClass("menu_blog");
    }
    else {
        $("#header_shadow").removeClass("scroll");
        $("#header_shadow").removeClass("blog_head");
        $("#my_logo").attr("src","images/logo-02.svg");
        $("#trigger-overlay").addClass("menu_blog");
    }
});

(function() {
    var triggerBttn = document.getElementById('trigger-overlay'),
        overlay = document.querySelector('div.overlay'),
        // closeBttn = overlay.querySelector('button.overlay-close');
    transEndEventNames = {
            'WebkitTransition': 'webkitTransitionEnd',
            'MozTransition': 'transitionend',
            'OTransition': 'oTransitionEnd',
            'msTransition': 'MSTransitionEnd',
            'transition': 'transitionend'
        },
        transEndEventName = transEndEventNames[Modernizr.prefixed('transition')],
        support = { transitions: Modernizr.csstransitions };

    function toggleOverlay() {
        if (classie.has(overlay, 'open')) {
            classie.remove(overlay, 'open');
            classie.add(overlay, 'close');
            var onEndTransitionFn = function(ev) {
                if (support.transitions) {
                    if (ev.propertyName !== 'visibility') return;
                    this.removeEventListener(transEndEventName, onEndTransitionFn);
                }
                classie.remove(overlay, 'close');
            };
            if (support.transitions) {
                overlay.addEventListener(transEndEventName, onEndTransitionFn);
            } else {
                onEndTransitionFn();
            }
        } else if (!classie.has(overlay, 'close')) {
            classie.add(overlay, 'open');
        }
    }

    triggerBttn.addEventListener('click', toggleOverlay);
    // closeBttn.addEventListener('click', toggleOverlay);
})();

var case1 = document.getElementById('case1');
var case2 = document.getElementById('case2');

function fixCase() {
    var screen_width = window.innerWidth || document.body.clientWidth;
    var element = document.getElementById('one');
    if (element && screen_width >= 550) {
        var positionInfo = element.getBoundingClientRect();
        var height = positionInfo.height.toFixed(2);

        var stringify = height + 'px';
        case1.style.height = stringify;
        case2.style.height = stringify;
    } else if (element) {
        case1.style.height = "100%";
        case2.style.height = "100%";
    }
}

var desktop = document.getElementById('desktop');
var mobile = document.getElementById('mobile');

function fixMobile() {
    var screen_width = window.innerWidth || document.body.clientWidth;
    var element = document.getElementById('desktop');
    if (element && screen_width >= 550) {
        var positionInfo = element.getBoundingClientRect();
        var height = positionInfo.height.toFixed(2);

        var stringify = height + 'px';
        mobile.style.height = stringify;
        mobile.style.width = "initial";
    } 
}
if(mobile){
    mobile.onload = fixMobile;
    window.onload = fixMobile;
}

window.onresize = fixCase;
