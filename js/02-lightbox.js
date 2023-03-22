import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryListEl = document.querySelector('ul.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems).join('');

galleryListEl.insertAdjacentHTML('beforeend', galleryMarkup);

const lightBoxGallery = new SimpleLightbox('ul.gallery li a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function createGalleryMarkup(photos) {
  return photos.map(({ preview, original, description }) => {
    return `
		<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>
		`;
  });
}
