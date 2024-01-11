// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');

const markupList = galleryItems.map(({ preview, original, description }) => {
    return `<li>
        <a class="gallery__link" href=${original}>
            <img
            class='gallery__image'
            src="${preview}" 
            data-source="${original}" 
            alt="${description}"
            />
        </a>
    </li>`;
});
galleryList.insertAdjacentHTML("beforeend", markupList.join(''));
const lightBox = new SimpleLightbox('.gallery a',
    {
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250
    });