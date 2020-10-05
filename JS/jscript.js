var slider_content = document.getElementById('box');

// Contain images in an array
var image = ['shirgah', 'montreal',  'torento'];
var i = image.length;

// FUnction for next slide
function nextImage() {
    if (i < image.length) {
        i = i + 1;
    } else {
        i = 1;
    }
    slider_content.innerHTML="<img src=Image/"+image[i-1]+".jpg>";
}