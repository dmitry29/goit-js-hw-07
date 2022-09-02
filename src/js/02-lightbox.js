import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryCountainer = document.querySelector(".gallery");
const markup = galleryItems
  .map(
    ({ description, original, preview }) =>
      `
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt='${description}'/>
</a>  
`
  )
  .join("");

galleryCountainer.insertAdjacentHTML("afterbegin", markup);

console.log(galleryCountainer);

const lightbox = new SimpleLightbox(".gallery a", {
  /* options */
  overlayOpacity: 0.5,
  captionDelay: 250,
  captionsData: "alt",
});