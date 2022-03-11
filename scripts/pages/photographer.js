
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
async function getPhotographers() {
  const photographerJson = await getPhotographersApi();
  return photographerJson;
}
async function getMediaByPhotographersId(id) {
  const mediaa = await getPhotographers();
  const media = mediaa.media.filter(mediaObj => mediaObj.photographerId == id);
  return { media };
}
var medias;
function setPhotographers(media) {
  medias = media;
}
function getUpdatedPhotographers() {
  return medias;
}


function filterSort(x) {
  const medias = getUpdatedPhotographers();
  const media = medias.filter(mediaObj => mediaObj.photographerId == id);


  switch (x) {
    case 'title':
      media.sort((a, b) => {
        console.log(media)

        if (a.title < b.title) {

          return -1;

        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
      break;

    case 'likes':
      media.sort((a, b) => {
        return b.likes - a.likes
      });
      break;


    case 'date':
      media.sort((a, b) => {

        return new Date(a.date) - new Date(b.date);
      });
      break;

    default:
      media;
      break;
  }
  setPhotographers(media)
  displayMediaData(media);

}
function dropbtn(el) {
  console.log(el);
  if (el.nextElementSibling.style.display == 'block') {

    el.nextElementSibling.style.display = 'none';
    el.classList.remove("iconDropdown");
  } else {
    el.nextElementSibling.style.display = 'block';
    // el.style.display='none'; 
    el.classList.add("iconDropdown");
  }
}
function dropbtnVal(el) {
  el.parentElement.children[0].style.display = 'block';
  el.parentElement.children[1].style.display = 'block';
  el.parentElement.children[2].style.display = 'block';
  //  el.style.display = 'none';
  el.parentElement.style.display = 'none';
  el.parentElement.previousElementSibling.classList.remove("iconDropdown");
  el.parentElement.previousElementSibling.innerHTML = el.innerHTML + '<img class="iconMenu" src="./assets/icons/downArroew.png" alt="">';
}

function displayName(photographers) {
  const nameSection = document.querySelector(".modal__head");
  const photographerModel = photographerFactory(photographers);
  const userName = photographerModel.name;
  nameSection.insertAdjacentHTML('beforeend', "Contactez-moi" + "</br>" + userName);

}

async function getPhotographersById(id) {
  const photographerJson = await getPhotographersApi();
  // console.log(photographerJson);
  const photographers = photographerJson.photographers.find(item => item.id == id);
  const media = photographerJson.media.filter(mediaObj => mediaObj.photographerId == id);
  // console.log(photographers);
  var idDataFormJson = {
    media: media,
    photographers: photographers
  }
  // console.log(media);
  return (idDataFormJson);
}

async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographDetils");
  const photographerModel = photographerFactory(photographers);
  // console.log(photographerModel);
  const userCardDOM = photographerModel.getUserDetailDOM();
  photographersSection.insertAdjacentHTML('beforeend', userCardDOM);

  const PhotographerPriceSection1 = document.querySelector(".price");
  // console.log(PhotographerPriceSection1);
  const totalPrice = photographerFactory(photographers);
  const priceCardDOM = totalPrice.getPriceDOM();
  PhotographerPriceSection1.insertAdjacentHTML('beforeend', priceCardDOM);
  
};
async function displayMediaData(media) {
  var x = media;
  let mediaSection = document.querySelector(".mediaListView");
  mediaSection.innerHTML = "";
  x.forEach((media, index) => {
    let mediaTitle= media.title
    let mediaModel = mediaFactory(media);
    let mediaCardDOM = mediaModel.getMediaDOM(index, mediaTitle);
    mediaSection.insertAdjacentHTML('beforeend', mediaCardDOM);
  });
  const mediaSection1 = document.querySelector(".total__likes");
  mediaSection1.innerHTML = "";
  const mediaModel = mediaFactory(media);
  const totalMediaLike = mediaModel.getTotalLike();
  // console.log(totalMediaLike)
  mediaSection1.insertAdjacentHTML('beforeend', totalMediaLike);
};

function clickLike(id) {
  let updatedJsonMedia = getUpdatedPhotographers();
  const indexOfmMedia = updatedJsonMedia.findIndex(item => item.id == id);
  console.log(!!updatedJsonMedia[indexOfmMedia].isLiked);
  console.log(!updatedJsonMedia[indexOfmMedia].isLiked);
  console.log(updatedJsonMedia[indexOfmMedia].isLiked);
  if (!!updatedJsonMedia[indexOfmMedia].isLiked) {
    updatedJsonMedia[indexOfmMedia].isLiked = false;
    updatedJsonMedia[indexOfmMedia].likes = updatedJsonMedia[indexOfmMedia].likes - 1
  } else {
    updatedJsonMedia[indexOfmMedia].isLiked = true;
    updatedJsonMedia[indexOfmMedia].likes = updatedJsonMedia[indexOfmMedia].likes + 1
  }
  console.log(updatedJsonMedia[indexOfmMedia].likes);
  setPhotographers(updatedJsonMedia);
  displayMediaData(updatedJsonMedia);

}




async function init() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  const { photographers, media } = await getPhotographersById(id);
  setPhotographers(media);
  displayMediaData(media);
  displayData(photographers);
  displayName(photographers);
};
init();



// function toggleFilter() {
//   var filterToggle = document.getElementById("myDropdown");
//   if (filterToggle.style.display == "none") {
//     // document.getElementById('filterArrow').src="./assets/icons/uparrow.png"
//     filterToggle.style.display = "block";

//   } else {
//     // document.getElementById('filterArrow').src="./assets/icons/downArroew.png"
//     filterToggle.style.display = "none";
//   }
// }


