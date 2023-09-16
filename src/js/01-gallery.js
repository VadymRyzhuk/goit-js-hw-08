// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryCards = document.querySelector('.gallery');

const markup = createMarkup(galleryItems);

galleryCards.insertAdjacentHTML('beforeend', markup);
// galleryCards.addEventListener('click', handleGalleryClick);


function createMarkup(array) {
    return array.map(({ preview, original, description }) => {
        return `<li data-preview="${preview}" class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`

    }).join('');
}


// console.log(galleryItems);


const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionsPosition: 'bottom',
    captionDelay: 250,
});