import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name : {
        required : true,
        type : String,
        minlength: [3, 'Minimal nama produk adalah 3 karakter'],
    },
    price : {
        required : true,
        type : Number,
        min: [1, 'isi harga yang valid'],
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
        min: [0, 'diskon berkisar antara 0 - 100 persen'],
        max: [100, 'diskon berkisar antara 0 - 100 persen']
    },
    video: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Videos'
    }
});

export default mongoose.model('Product', productSchema);