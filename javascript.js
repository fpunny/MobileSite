var dropped = false;
var index = '1';

function drop() {
    var nav = document.getElementById('nav');
    if (dropped === false) {
        nav.style.top = '0px';
        dropped = true;
    } else {
        nav.style.top = '-120px';
        dropped = false;
    }
}