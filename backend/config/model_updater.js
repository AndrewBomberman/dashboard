import { generateImageData } from "./image_handler.js";
export const updateName = async (req, model) => {
  const updated = await model.findOneAndUpdate(
    { _id: req.query._id },
    { name: req.body.name },
    { new: true }
  );
  console.log(updated);
};
export const updateDescription = async (req, model) => {
  const updated = await model.findOneAndUpdate(
    { _id: req.query._id },
    { description: req.body.description },
    { new: true }
  );
  console.log(updated);
};
export const updateEmail = async (req, model) => {
  const updated = await model.findOneAndUpdate(
    { _id: req.query._id },
    { email: req.body.email },
    { new: true }
  );
  console.log(updated);
};
export const updatePhone = async (req, model) => {
  const updated = await model.findOneAndUpdate(
    { _id: req.query._id },
    { phone: req.body.phone },
    { new: true }
  );
  console.log(updated);
};
export const updateThumbnail = async (req, model) => {
  const thumbnail = await generateImageData(
    req?.files?.thumbnail ?? null,
    "thumbnail",
    req.query._id,
    req.route.path
  );
  const updated = await model.findOneAndUpdate(
    { _id: req.query._id },
    { thumbnail: thumbnail },
    { new: true }
  );
  console.log(updated);
};
export const updateGallery = async (req, model) => {
  const gallery = req?.files?.gallery;
  const updated_gallery = [];
  if (gallery) {
    if (gallery?.length && gallery.length > 1) {
      for (let i = 0; i < gallery.length; i++) {
        updated_gallery.push(
          await generateImageData(
            gallery[i],
            "gallery",
            req.query._id,
            req.route.path
          )
        );
      }
    } else {
      updated_gallery.push(
        await generateImageData(
          gallery,
          "gallery",
          req.query._id,
          req.route.path
        )
      );
    }
  }

  const updated = await model.findOneAndUpdate(
    { _id: req.query._id },
    { gallery: updated_gallery },
    { new: true }
  );
  console.log(updated);
};
