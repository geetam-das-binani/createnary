import { catchAsyncErrors } from "../utils/catchAsyncErrors.mjs";
import { v2 as cloudinary } from "cloudinary";
import FeaturesModel from "../models/features.model.mjs";
import { ErrorHandler } from "../utils/error.mjs";
export const addFeatureHandler = catchAsyncErrors(async (req, res, next) => {
  const image = req.file;
  const b64 = Buffer.from(image.buffer).toString("base64");
  let dataURI = `data:${image.mimetype};base64,${b64}`;
  const cloudinaryRes = await cloudinary.uploader.upload(dataURI);
  req.body.image = cloudinaryRes.secure_url;
  const feature = await FeaturesModel.create(req.body);
  if (!feature) {
    return next(new ErrorHandler("Something went wrong", 500));
  }
  res.status(200).json({
    success: true,
    feature,
  });
});

export const scrollFeatureHandler = catchAsyncErrors(async (req, res, next) => {
  const limitValue = 1;
  const pageSize = 1;
  const page = parseInt(req.query.page) || 1;
  const skipValue = pageSize * (page - 1);

  const total = await FeaturesModel.countDocuments();
  const features = await FeaturesModel.find({})

    .limit(limitValue)
    .skip(skipValue);

  res.status(200).json({
    success: true,
    features,
    total,
  });
});
