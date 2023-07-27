import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    title : {
        required : [true, "title harus diisi"],
        type : String,
        maxlength: [100, 'Maksimal title adalah 100 karakter'],
        minlength: [3, 'Minimal title adalah 3 karakter'],
    },
    seller : {
        required : true,
        type : String,
        maxlength: [100, 'Maksimal seller name adalah 100 karakter'],
        minlength: [3, 'Minimal sellername adalah 3 karakter'],

    },
    hotOffer : {
        required : true,
        type : [String]
    },
    live : {
        required : true,
        type : Boolean,
        default : false
    },
    watchCount : {
        required : true,
        type : Number,
        default : 100
    },
    videoUrl : {
        required : true,
        type : String
    },
    thumbnail : {
        required : true, 
        type  : String
    }
});

export default mongoose.model('Videos', videoSchema);