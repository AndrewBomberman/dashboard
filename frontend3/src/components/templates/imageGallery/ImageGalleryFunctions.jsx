export function addImagesToGallery (newImages, gallery, setter){
    for (let i = 0; i < newImages.length; i++) {
      gallery.push(URL.createObjectURL(newImages[i]));
    }
    console.log(gallery);
    setter([...gallery]);
};
export function resetGallery(){

}
export function deleteImageFromGallery(image, gallery, setter){
    setter([...gallery.filter(img=>img !== image)]);
}