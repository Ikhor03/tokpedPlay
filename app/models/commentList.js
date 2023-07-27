import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    username: {
        required: [true, "username harus diisi"],
        type: String,
        minlength: [3, 'Minimal username adalah 3 karakter'],
        maxlength: [100, 'Maksimal username adalah 100 karakter'],
        default: 'anonymous'
    },
    content: {
        required: [true, "coment harus diisi"],
        type: String,
        maxlength: [1000, 'Maksimal coment adalah 1000 karakter'],
    },
    video: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Video'
    }
}, { timestamps: true });

export default mongoose.model('Comment', commentSchema);
