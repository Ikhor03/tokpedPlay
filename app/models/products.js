import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name : {
        required : true,
        type : String
    },
    price : {
        required : true,
        type : Number
    },
    imageUrl : {
        required : true,
        type : String
    },
    productUrl : {
        required : true,
        type : String
    },
    discount : {
        type : Number,
    },
    video: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Videos'
    }
});

export default mongoose.model('Product', productSchema);