const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// var Int32 = require('mongoose-int32');

const productSchema = new Schema({
    name: { type: String, required: true },
    shopName: { type: String, required: true },
    price: { type: Number, required: true },
    weight: { type: Number, required: true },
    type: { type: String, required: true },
    categories: { type: Array, required: true },
    imageUrl: { type: String, required: true }
    /*
    variants: [
        {
        sku: { type: String },
        option_values: {
            option_display_name: { type: String },
            label: { type: String }
        }
        }
    ]
    */
}, {
    timestamps: true,
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;