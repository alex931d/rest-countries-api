const viewImage = document.querySelector(".country-image-hover svg");
const lightbox = document.querySelector(".lightbox");
const image = document.querySelector(".country-image");
lightboxImage = document.querySelector(".lightbox-image");

window.addEventListener("load",()=>{
   viewImage.addEventListener("click",()=>{
  
    lightbox.showModal(); 
     lightboxImage.style.backgroundImage = image.style.backgroundImage;
   });
   lightbox.addEventListener("click", e => {
    const dialogDimensions = lightbox.getBoundingClientRect()
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      lightbox.close()
    }
  })
})