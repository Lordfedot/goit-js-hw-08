// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const refs ={
    gallery: document.querySelector('.gallery')
}

refs.gallery.innerHTML = createGalleryItemsMarkup()

function createGalleryItemsMarkup() {
    return galleryItems.map(item => {
        return `<a class="gallery__item" href="${item.original}">
        <img
          class="gallery__image"
          src="${item.preview}"
          alt="${item.description}"
        />
        </a>`
    }).join('')
    
}
const gallery = new SimpleLightbox('.gallery a' ,{captionsData: 'alt', captionDelay: 250});
