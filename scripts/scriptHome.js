//IMG BLUR
window.addEventListener('scroll', function() {
    var scrollPosition = window.pageYOffset;
    var projectImgs = document.querySelectorAll('figure');

    if (scrollPosition > 100) {
        projectImgs.forEach(function(img) {
            img.classList.remove('ImgBlur');
        });
    } else {
        projectImgs.forEach(function(img) {
            img.classList.add('ImgBlur');
        });
    }
});
