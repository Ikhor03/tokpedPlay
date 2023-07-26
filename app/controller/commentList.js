import Comment from '../models/commentList.js';

// input comment
export const addComment = async (req, res, next) => {
    const { username, content, videoId } = req.body;
    const comment = new Comment({ username, content, video: videoId });

    try {
        const savedComment = await comment.save();
        res.status(201).json(savedComment);
    } catch (error) {
        next(error); 
    }
};

export const getAllComments = async (req, res, next) => {
    try {
        const comments = await Comment.find();
        res.status(200).json(comments);
    } catch (error) {
        next(error); 
    }
};