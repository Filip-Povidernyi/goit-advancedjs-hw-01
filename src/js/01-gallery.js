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
let isSuccess;
const onClick = () => {
    const timerId = setTimeout(() => {
        console.log("I love async JS!");
        return isSuccess = true;
    }, 2000);
    console.log(timerId);
};

galleryList.addEventListener("click", onClick);

const fetchUserFromServer = username => {
    return new Promise((resolve, reject) => {
        console.log(`Fetching data for ${username}`);

        setTimeout(() => {
            // Change value of isSuccess variable to simulate request status


            if (isSuccess) {
                resolve('ok');
            } else {
                reject("Oops");
            }
        }, 2000);
    });
};

fetchUserFromServer("Mango")
    .then(user => console.log(user))
    .catch(onClick);

const makeGreeting = (guestName) => {
    if (guestName === "" || guestName === undefined) {
        return Promise.reject("Guest name must not be empty");
    }

    return Promise.resolve(`Welcome ${guestName}`);
};

makeGreeting("Mango")
    .then(greeting => console.log(greeting))
    .catch(error => console.error(error));