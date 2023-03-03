export function replaceThumbnail (oldThumbnail, newThumbnail, setter) {
    oldThumbnail ?? URL.revokeObjectURL(oldThumbnail)
    setter(URL.createObjectURL(newThumbnail))
}
export function deleteThumbnail (thumbnail, setter){
    thumbnail ?? URL.revokeObjectURL(thumbnail)
    setter("http://localhost:8000/images/no-image.png")
}
export function resetThumbnail(oldThumbnail, newThumbnail, setter){
    newThumbnail ?? URL.revokeObjectURL(newThumbnail)
    setter(oldThumbnail)
}
