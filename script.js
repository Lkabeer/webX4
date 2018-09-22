$('div').on('click', function() {
    $(this).toggleClass('show');
});

window.onscroll = function() {
    displayTopX();
}

function displayTopX() {
    if (document.body.scrollTop > 140 || document.documentElement.scrollTop > 140) {
        document.getElementById('topX').style.display = "block";
    } else {
        document.getElementById('topX').style.display = "none";
    }
}

function goTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}