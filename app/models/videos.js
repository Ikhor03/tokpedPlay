import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    title : {
        required : [true, "title harus diisi"],
        type : String
    },
    seller : {
        required : true,
        type : String
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