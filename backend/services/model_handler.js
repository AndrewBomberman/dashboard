import { generateImageData, deleteImageData } from "./image_handler.js";
/*

  This file contains functions that are used to handle the operations on the models. 
  Each function contains the request object and model that is being updated.
  The functions are exported and imported in the controller files.
  
*/

export const createModel = async (req, model) => {
  await model.create(req.body);
}

export const getModels = async (req, model) => {
  return await model.find(req.query)
}

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
export const updateAddress1 = async (req, model) => {
  const updated = await model.findOneAndUpdate(
    { _id: req.query._id },
    {
      $set: { "address.address1": req.body.address1 },
    },
    { new: true }
  );
  console.log(updated);
};
export const updateAddress2 = async (req, model) => {
  const updated = await model.findOneAndUpdate(
    { _id: req.query._id },
    {
      $set: { "address.address2": req.body.address2 },
    },
    { new: true }
  );
  console.log(updated);
};
export const updateCity = async (req, model) => {
  console.log(req.body)
  const updated = await model.findOneAndUpdate(
    { _id: req.query._id },
    {
      $set: { "address.city": req.body.city },
    },
    { new: true }
  );
  console.log(updated);
};
export const updateCountry = async (req, model) => {
  const updated = await model.findOneAndUpdate(
    { _id: req.query._id },
    {
      $set: { "address.country": req.body.country },
    },
    { new: true }
  );
  console.log(updated);
};

export const updateThumbnail = async (req, model) => {
  deleteImageData(req.route.path, req.query._id)
  const thumbnail = await generateImageData(
    req?.files?.thumbnail ?? null,
    "thumbnail",
    req.query._id,
    req.route.path
  );
  console.log(thumbnail);
  const updated = await model.findOneAndUpdate(
    { _id: req.query._id },
    {
      $set: { thumbnail: thumbnail },
    },
    { new: true }
  );
  console.log(updated);
};
export const updateGallery = async (req, model) => {
  deleteImageData(req.route.path, req.query._id)
  const gallery = req?.files?.gallery;
  const updated_gallery = [];
  if (gallery) {
    if (gallery?.length && gallery.length > 1) {
      for (let i = 0; i < gallery.length; i++) {
        console.log(gallery[i]);
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
export const updateDisplay = async (req, model) => {
  
  const updated = await model.findOneAndUpdate(
    { _id: req.query._id },
    { display: req.body.display},
    { new: true }
  );
  console.log(updated);
};
export const updateAc = async (req, model) => {
   console.log(req.body)
  const updated = await model.findOneAndUpdate(
    { _id: req.query._id },
    { ac: req.body.ac },
    { new: true }
  );
  console.log(updated);
};
export const updateWifi = async (req, model) => {
   console.log(req.body)
  const updated = await model.findOneAndUpdate(
    { _id: req.query._id },
    { wifi: req.body.wifi },
    { new: true }
  );
   console.log(updated);

};
export const updateRoomService = async (req, model) => {
   console.log(req.body)
 

};
export const updateBreakfast = async (req, model) => {
  console.log(req.body)
  const updated = await model.findOneAndUpdate(
    { _id: req.query._id },
    { breakfast: req.body.breakfast },
    { new: true }
  );
  console.log(updated);

};
export const updateTv = async (req, model) => {
  console.log(req.body)
  const updated = await model.findOneAndUpdate(
    { _id: req.query._id },
    { tv: req.body.tv },
    { new: true }
  );
  console.log(updated);
};

export const deleteModel = async (req, model) => {
  deleteImageData(req.route.path, req.query._id)
  return await model.findByIdAndDelete(req.query._id)
}
