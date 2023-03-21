import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryListEl = document.querySelector('ul.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems).join('');

galleryListEl.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(photos) {
  return photos.map(({ preview, original, description }) => {
    return `
		<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
		`;
  });
}
