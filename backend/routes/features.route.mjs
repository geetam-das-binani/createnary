import express from 'express';
import { addFeatureHandler,scrollFeatureHandler } from '../controllers/features.controllers.mjs';
import { upload } from '../multer/multer.mjs';
const router = express.Router();

router.post("/add-feature",upload.single("image"),addFeatureHandler)
router.get("/get-scroll-feature",scrollFeatureHandler)


export {router}