import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryListEl = document.querySelector('ul.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems).join('');

galleryListEl.insertAdjacentHTML('beforeend', galleryMarkup);

galleryListEl.addEventListener('click', onPhotoLinkClick);

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

function onPhotoLinkClick(e) {
  e.preventDefault();

  const activePhoto = e.target;
  const largeModalPhoto = basicLightbox.create(
    `
		<img width="1400" height="900" src="${activePhoto.dataset.source}">
	`
  );

  largeModalPhoto.show();

  if (largeModalPhoto.visible()) {
    galleryListEl.addEventListener('keydown', onEscClose);
  }

  function onEscClose(e) {
    if (e.code !== 'Escape') {
      return;
    }

    largeModalPhoto.close();
    galleryListEl.removeEventListener('keydown', onEscClose);
  }
}
