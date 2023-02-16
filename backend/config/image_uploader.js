export const generateImageData = async (image, imageType, object, path) => {
  image !== null &&
    (await image.mv(
      process.env.IMAGES_PATH +
        path +
        "/" +
        object._id +
        "/" +
        imageType +
        "/" +
        image.name
    ));
  return image !== null
    ? process.env.IMAGES_URL +
        path +
        "/" +
        object._id +
        "/" +
        imageType +
        "/" +
        image.name
    : process.env.NO_IMAGES_URL;
};

export const deleteImageData = async (object) => {
  fs.rmSync(process.env.IMAGES_PATH + object._id, {
    recursive: true,
    force: true,
  });
};
