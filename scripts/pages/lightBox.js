
// lightbox
function openLightBox() {

  document.getElementById("lightBox").style.display = "block";
  document.getElementById("main").style.opacity = 0;
  document.getElementById("logoSection").style.opacity = 0;
}

function closeLightBox() {
  document.getElementById("lightBox").style.display = "none";
  document.getElementById("main").style.opacity = 1;
  document.getElementById("logoSection").style.opacity = 1;
}

var slideIndex = 1;
// showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(index, currenElement) {

  showSlides(slideIndex = index);
}

// To view the clicked image in lightBox (closeup view)

function showSlides(n) {
  var media = getUpdatedPhotographers();
  // var currentTitle = media[n].title;
  var slides = document.getElementsByClassName("slider-img");
  if (n > slides.length) { slideIndex = 0 }
  var currentTitle = media[slideIndex].title;
  if (n < 0) { slideIndex = slides.length }
  var currentTitle = media[slideIndex].title;
  // console.log(media[slideIndex].image);
  // console.log(slides[n].children[0].tagName);
  // console.log(slides[n].children[0].src);
  let x = media[slideIndex].image;
  let y = media[slideIndex].video;

  const picture = `assets/media/mediaList/${x}`;
  console.log(picture)
  const pictureVideo = `assets/media/mediaList/${y}`;
  // var path = slides[n].children[0].tagName == 'IMG' ? slides[n].children[0].src : slides[n].children[0].children[0].src;
  // console.log(path);
  var htmlMedia;
  // if (path.split(".")[1] == 'mp4') {
  if (y) {
    htmlMedia = `<video class="mediaVideo slider-img" controls="" >
      <source src="${y}" type="video/mp4" id="slider-video-url">
      </video>
      <h1>${currentTitle}</h1>
      `
  } else {
    htmlMedia = `<img src="${picture}" class="slider-img" id="slider-img-url">
      <h1>${currentTitle}</h1>
      `
  }
  document.getElementById('showSlider').innerHTML = htmlMedia;
}
// To use keyboard arrowkeys to navigate the images 
document.onkeydown = checkKey;
function checkKey(e) {

  e = e || window.event;

  if (e.key === 'Escape') {
    closeLightBox()
  }
  else if (e.keyCode == '37') {
    plusSlides(-1)
  }
  else if (e.keyCode == '39') {
    plusSlides(1)
  }

}
