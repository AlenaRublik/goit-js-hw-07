import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector('.gallery');

gallery.innerHTML = galleryItems.map(({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
}).join("");

gallery.addEventListener('click', handleGalleryClick);

function handleGalleryClick(event) {
    event.preventDefault();

    if (event.target.nodeName !== "IMG") {
        return;
    }

    const bigImg = event.target.dataset.source;
    console.log(bigImg);
    
    const instance = basicLightbox.create(`
    <img src= ${bigImg} width="1280">`
    )

    instance.show()

    document.addEventListener('keydown', handleCloseImage);

    function handleCloseImage(event) {
        if (event.code === "Escape") {
            instance.close();
            document.removeEventListener('keydown', handleCloseImage);
        }
    }
}