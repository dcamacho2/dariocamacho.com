function functionCollector() {
	fixMobile1();
	fixMobile2();
	fixMobile3();
	fixMobile4();
	fixMobile5();
	fixMobile6();
	fixMobile7();
	fixMobile8();
	fixMobile9();	
}

window.onresize = functionCollector;
window.onload = functionCollector;

var desktop1 = document.getElementById('desktop1');
var mobile1a = document.getElementById('mobile1a');
var mobile1b = document.getElementById('mobile1b');

function fixMobile1() {
    var screen_width = window.innerWidth || document.body.clientWidth;
    var element = document.getElementById('desktop1');

    if (element && screen_width >= 550) {
        var positionInfo = element.getBoundingClientRect();
        var height = positionInfo.height.toFixed(2);
        var stringify = height + 'px';

        if (parseInt(height) !== 0) {
            mobile1a.style.height = stringify;
            mobile1a.style.width = "initial";

            mobile1b.style.height = stringify;
            mobile1b.style.width = "initial";
        }
    } 
    console.log("work")
}
mobile1a.onload = fixMobile1();
mobile1b.onload = fixMobile1();


var desktop2 = document.getElementById('desktop2');
var mobile2a = document.getElementById('mobile2a');
var mobile2b = document.getElementById('mobile2b');

function fixMobile2() {
    var screen_width = window.innerWidth || document.body.clientWidth;
    var element = document.getElementById('desktop2');
    if (element && screen_width >= 550) {
        var positionInfo = element.getBoundingClientRect();
        var height = positionInfo.height.toFixed(2);
        var stringify = height + 'px';

        if (parseInt(height) !== 0) {
            mobile2a.style.height = stringify;
            mobile2a.style.width = "initial";

            mobile2b.style.height = stringify;
            mobile2b.style.width = "initial";
        }
    } 
}
mobile2a.onload = fixMobile2();
mobile2b.onload = fixMobile2();


var desktop3 = document.getElementById('desktop3');
var mobile3 = document.getElementById('mobile3');

function fixMobile3() {
    var screen_width = window.innerWidth || document.body.clientWidth;
    var element = document.getElementById('desktop3');
    if (element && screen_width >= 550) {
        var positionInfo = element.getBoundingClientRect();
        var height = positionInfo.height.toFixed(2);
        var stringify = height + 'px';

        if (parseInt(height) !== 0) {
            mobile3.style.height = stringify;
            mobile3.style.width = "initial";
        }
    } 
}
mobile3.onload = fixMobile3();


var desktop4 = document.getElementById('desktop4');
var mobile4 = document.getElementById('mobile4');

function fixMobile4() {
    var screen_width = window.innerWidth || document.body.clientWidth;
    var element = document.getElementById('desktop4');
    if (element && screen_width >= 550) {
        var positionInfo = element.getBoundingClientRect();
        var height = positionInfo.height.toFixed(2);
        var stringify = height + 'px';

        if (parseInt(height) !== 0) {
            mobile4.style.height = stringify;
            mobile4.style.width = "initial";
        }
    } 
}
mobile4.onload = fixMobile4();


var desktop5 = document.getElementById('desktop5');
var mobile5 = document.getElementById('mobile5');

function fixMobile5() {
    var screen_width = window.innerWidth || document.body.clientWidth;
    var element = document.getElementById('desktop5');
    if (element && screen_width >= 550) {
        var positionInfo = element.getBoundingClientRect();
        var height = positionInfo.height.toFixed(2);
        var stringify = height + 'px';
        if (parseInt(height) !== 0) {
            mobile5.style.height = stringify;
            mobile5.style.width = "initial";
        }
    } 
}
mobile5.onload = fixMobile5();


var desktop6 = document.getElementById('desktop6');
var mobile6 = document.getElementById('mobile6');

function fixMobile6() {
    var screen_width = window.innerWidth || document.body.clientWidth;
    var element = document.getElementById('desktop6');
    if (element && screen_width >= 550) {
        var positionInfo = element.getBoundingClientRect();
        var height = positionInfo.height.toFixed(2);
        var stringify = height + 'px';

        if (parseInt(height) !== 0) {
            mobile6.style.height = stringify;
            mobile6.style.width = "initial";
        }
    } 
}
mobile6.onload = fixMobile6();


var desktop7 = document.getElementById('desktop7');
var mobile7 = document.getElementById('mobile7');

function fixMobile7() {
    var screen_width = window.innerWidth || document.body.clientWidth;
    var element = document.getElementById('desktop7');
    if (element && screen_width >= 550) {
        var positionInfo = element.getBoundingClientRect();
        var height = positionInfo.height.toFixed(2);
        var stringify = height + 'px';

        if (parseInt(height) !== 0) {
            mobile7.style.height = stringify;
            mobile7.style.width = "initial";
        }
    } 
}
mobile7.onload = fixMobile7();


var desktop8 = document.getElementById('desktop8');
var mobile8 = document.getElementById('mobile8');

function fixMobile8() {
    var screen_width = window.innerWidth || document.body.clientWidth;
    var element = document.getElementById('desktop8');
    if (element && screen_width >= 550) {
        var positionInfo = element.getBoundingClientRect();
        var height = positionInfo.height.toFixed(2);
        var stringify = height + 'px';

        if (parseInt(height) !== 0) {
            mobile8.style.height = stringify;
            mobile8.style.width = "initial";
        }
    } 
}
mobile8.onload = fixMobile8();


var desktop9 = document.getElementById('desktop9');
var mobile9 = document.getElementById('mobile9');

function fixMobile9() {
    var screen_width = window.innerWidth || document.body.clientWidth;
    var element = document.getElementById('desktop9');
    if (element && screen_width >= 550) {
        var positionInfo = element.getBoundingClientRect();
        var height = positionInfo.height.toFixed(2);
        var stringify = height + 'px';

        if (parseInt(height) !== 0) {
            mobile9.style.height = stringify;
            mobile9.style.width = "initial";
        }
    } 
}
mobile9.onload = fixMobile9();