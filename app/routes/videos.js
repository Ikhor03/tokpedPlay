import express from "express";
import { addVideo, getAllVideos, getVideoById } from "../controller/videos.js";

const router = express.Router();

router.post('/videos', addVideo);
router.get('/videos', getAllVideos);
router.get('/videos/:id', getVideoById);

export default router;
