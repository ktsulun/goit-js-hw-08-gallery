import imgs from "./gallary-item.js";

const listContainer = document.querySelector(".js-gallery");
// const cardImagesGallery = createImagesGallery(imgs);

listContainer.insertAdjacentHTML("beforeend", createImagesGallery(imgs));
listContainer.addEventListener("click", onGalleryContainerClick);

function createImagesGallery(imgs) {
  return imgs
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join("");
}

const lightboxButtonEl = document.querySelector(".lightbox__button");

const lightboxImageEl = document.querySelector(".lightbox__image");
const lightboxOverlayEl = document.querySelector(".lightbox__overlay");
const lightboxEl = document.querySelector(".lightbox.js-lightbox");

function onGalleryContainerClick(evt) {
  evt.preventDefault();
  console.log(evt.target.dataset.source);

  if (evt.target.nodeName !== "IMG") {
    return;
  } else {
    lightboxEl.classList.add("is-open");

 
    lightboxImageEl.src = evt.target.dataset.source;
    lightboxImageEl.alt = evt.target.alt;
    lightboxButtonEl.addEventListener("click", onCloseModal);
    lightboxOverlayEl.addEventListener("click", onCloseModal);
    window.addEventListener("keydown", onEscKeyPress);
  }
}



function onCloseModal() {
  lightboxEl.classList.remove("is-open");
  lightboxImageEl.src = "";
}



function onEscKeyPress(event) {
  const ESC_KEY_CODE = "Escape";
  const isEscKey = event.code === ESC_KEY_CODE;

  if (isEscKey) {
    onCloseModal();
  }
}
