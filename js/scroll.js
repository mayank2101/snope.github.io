$(Window).scroll(function() {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 250);

});

var modal = document.getElementById('modal-wrapper');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}