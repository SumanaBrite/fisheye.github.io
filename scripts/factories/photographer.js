function photographerFactory(data) {
    // console.log(data);
    const { id, city, country, tagline, price, name, portrait, tags } = data;
    const picture = `assets/photographers/${portrait}`;
    function tagsForPhotographersCards() {
        let x = data.tags;
        let text = "";
        x.forEach((item, index) => {
            text += "<li class='photographer__tag'># &nbsp;" + item + "</li> ";
        });
        document.getElementsByClassName("photographer__tags").innerHTML = text;

        return text;
    }
    function getUserCardDOM() {
        var article = `
 <article class="photographer">
 <a href="./photographer.html?id=${id}" class="photographer__header" role="link(h2)+ image" aria-label="${name}">
     <img class="photographer__img" src="${picture}" alt="${name}">
     <h2 class="photographer__name">${name}</h2>
 </a>
 <div class="photographer__content" role ="Text paragraph">
     <p class="photographer__location">${city}, ${country}</p>
     <p class="photographer__tagline">${tagline}</p>
     <p class="photographer__price">${price}€/jour</p>
 </div>
 <div>
 <ul class="photographer__tags">
 ` + tagsForPhotographersCards() + `
 </ul>
 </div>
</article>
`
        return (article);
    }
    function getUserDetailDOM() {
         var article = `
        <div class="photographer__content" role="Text" >
        <h1 class="photographer__name">${name}</h1>
        <p class="photographer__location">${city}, ${country}</h6>
        <P class="photographer__tagline">${tagline}</P>
      </div> 
      <div>          
        <button class="contactButton" role="Buttons" aria-label="Contact Me"onclick="toggleForm()">Contactez-moi</button>
      </div>        
      <div>
        <img class="photographer__img" src="${picture}" alt="${name}" role="Image">
      </div>
`
        return (article);
    }
    function getPriceDOM(){
        var article=`
        <span id="price">${price} &#128; /day</span>
       `
         return article;
    }

    
    return { name, picture, getUserCardDOM, getUserDetailDOM, tagsForPhotographersCards,getPriceDOM}
}

function skillTags(tags) {
    const x = tags;
    let text = "";
    function arrtag() {
        x.forEach((item, index) => {
            text += "<span class='photographer__tag'># &nbsp;" + item + "</span> ";
        });
        document.getElementsByClassName("photographer__skillTags").innerHTML = text;

        return text;
    }
    function getUserSkillCardDOM() {
        var article = `        
        <span class="photographer__skillTags">
        `+ arrtag() + `
        </span>
    </div>
`
        return (article);
    }
    return { getUserSkillCardDOM }
}

function mediaFactory(data) {

    const mediaObj = data;
    const keyValue = Object.keys(mediaObj);
    const { id, photographerId, altTxt, date, likes, name, price, tags, title, video, image } = data;
    const picture = `assets/media/mediaList/${image}`;
    const pictureVideo = `assets/media/mediaList/${video}`;
    function getMediaDOM(index, title) {
        // console.log(title)
        let htmlTag;
        if (image) {
            htmlTag = `<img src="${picture}" role="Image" aria-label="${altTxt}" onclick="openLightBox();currentSlide(${index},this)"
            class="hover-shadow cursor" alt="${altTxt}">`
        } else {
            htmlTag = `<video class="mediaVideo " role="video" aria-label="${altTxt}" onclick="openLightBox();currentSlide(${index},this)">
            <source src="${video}" type="video/mp4" alt="${altTxt}"> 
          </video>`
        }
        var article = `       
       <div class="column slider-img">
       `+ htmlTag + `
         <div class="mediaSubTitle" role="Text">
           <span>${title} </span>
           <span ><label id="liked">${likes}<label> <img src="./assets/icons/favorite-24px 1.png"role="Image" alt="likes" onClick="clickLike(${id})" class="icon"> </span>
         </div>
     </div>
       `
        return article    

        
    }
    
    
    function getTotalLike() {
        // console.log(data.likes);
        // console.log(data);
        var x = data;
        var count = 0;
        for (let i = 0; i < x.length; i++) {
            count = count + x[i].likes;
        }
        var article = ` 
        <span class="total">${count} 🖤 </span>
        `
        return article
    }
    return { getMediaDOM, getTotalLike }
}
