import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    username: {
        required: true,
        type: String,
        default: 'anonymous'
    },
    content: {
        required: true,
        type: String
    },
    video: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Video'
    }
}, { timestamps: true });

export default mongoose.model('Comment', commentSchema);
