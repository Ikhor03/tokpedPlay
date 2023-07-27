// app/controller/videos.js

import Video from '../models/videos.js';

// input video
export const addVideo = async (req, res, next) => {
    const { title, seller, hotOffer, live, watchCount, videoUrl, thumbnail } = req.body;
    const video = new Video({ title, seller, hotOffer, live, watchCount, videoUrl, thumbnail });

    try {
        const savedVideo = await video.save();
        res.status(201).json(savedVideo);
    } catch (error) {
        next(error); 
    }
};

// get all videos
export const getAllVideos = async (req, res, next) => {
    try {
        const videos = await Video.find();

        if (!videos) {
            const error = new Error("Video not found");
            error.status = 404;
            return next(error);
        }

        res.status(200).json({ data: videos });
    } catch (error) {
        next(error); 
    }
};

// get video by id
export const getVideoById = async (req, res, next) => {
    const { id } = req.params;

    try {
        const video = await Video.findById(id);
        if (!video) {
            return res.status(404).json({ message: "Video not found" });
        }
        res.status(200).json( video);
    } catch (error) {
        next(error); 
    }
};
