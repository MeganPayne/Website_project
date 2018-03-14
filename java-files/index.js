

var slideindex = 0;
showslides();

function showslides() {
    var i;
    var slides = document.getElementsByClassName("photob");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideindex++;
    if (slideindex > slides.length) {slideindex = 1}
    slides[slideindex-1].style.display ="block";
    setTimeout(showslides, 2000); /*change every 2 seconds*/
}
