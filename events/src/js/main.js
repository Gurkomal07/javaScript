export function demo() {

//This code has been provided for you. Do not change it.
const refFeatureLink = document.querySelector('a.feature.link')
refFeatureLink.addEventListener('click', ClickHandler);
function ClickHandler(evt) {
    var imgFeature = document.querySelector('img.feature');
    imgFeature.src = evt.target.href;
    imgFeature.alt = evt.target.title;
    imgFeature.classList.remove('hidden');
    evt.preventDefault();
}

///TODO: Add your code below this comment.

var imgRef = document.querySelector('img.feature');


imgRef.addEventListener('mouseover', viewParagraph)
imgRef.addEventListener('mouseout' , hideParagraph)

function viewParagraph(event){

    const paragraph = document.querySelector('p.feature.title')
    paragraph.innerHTML = event.target.alt;
}

function hideParagraph(){
    const paragraph = document.querySelector('p.feature.title')
    paragraph.innerHTML = "";
}
}
