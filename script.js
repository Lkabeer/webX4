var topX = document.getElementById('topX');
var burgerMenuX = document.getElementById('burgerMenuX');
var closeX = document.getElementById('closeX');
var sideMenuX = document.getElementById('sideMenuX');

sideMenuX.style.width = 0;

window.onscroll = function() {
    displayTopX();
}

function displayTopX() {
    if (document.body.scrollTop > 190 || document.documentElement.scrollTop > 190) {
        topX.style.display = "block";
        burgerMenuX.style.display = "block";
    } else {
        topX.style.display = "none";
        burgerMenuX.style.display = "none";
    }
}

function goTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function closeMenu(thisX) {
    thisX.classList.toggle('closeX');
    if(sideMenuX.style.width == (0 || "0px")) {
        sideMenuX.style.width = "250px";
    } else {
        sideMenuX.style.width = 0;
    }
}