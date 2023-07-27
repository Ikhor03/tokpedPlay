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

// get comment list
export const getAllComments = async (req, res, next) => {
    try {
        const comments = await Comment.find();
        res.status(200).json(comments);
    } catch (error) {
        next(error); 
    }
};

// update comment
export const updateComment = async (req, res, next) => {
    const { username, content } = req.body;
    const commentId = req.params.id;

    try {
        const updatedComment = await Comment.findByIdAndUpdate(
            commentId,
            { username, content, updated_at: new Date() },
            { new: true }
        );

        if (!updatedComment) {
            return res.status(404).json({ message: 'Comment not found' });
        }

        res.status(200).json(updatedComment);
    } catch (error) {
        next(error); 
    }
};

// delete comment
export const deleteComment = async (req, res, next) => {
    const commentId = req.params.id;

    try {
        const deletedComment = await Comment.findByIdAndRemove(commentId);

        if (!deletedComment) {
            return res.status(404).json({ message: 'Comment not found' });
        }

        res.status(200).json(deletedComment);
    } catch (error) {
        next(error); 
    }
};