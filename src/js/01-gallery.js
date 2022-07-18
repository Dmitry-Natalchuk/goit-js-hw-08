// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";
import "simplelightbox/dist/simple-lightbox.min.css"
// Change code below this line
//console.log(galleryItems);
const gallery = document.querySelector(".gallery")

const imagesList = createGallery(galleryItems);

gallery.insertAdjacentHTML("beforeend",imagesList);

function createGallery(images) {
  return galleryItems.map(({preview, original, description }) => {
   return` <a class="gallery__item"
    href="${original}">
  <img class="gallery__image" 
  src="${preview}" 
  alt="${description}" />
</a>`;})
.join("")
  }

  const lightbox = new SimpleLightbox(".gallery a", {
    //captionType : "alt",
    captionsData: "alt",
   // docClose: false,
   // close : false,
    captionDelay: 250,
    animationSpeed : 200,
    maxZoom: 5,
   // disableScroll : false,
    
  });

