const mongoose=require('mongoose');
const ProductSchema=new mongoose.Schema(
    {
        
        id: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        desc: {
            type: String,
            required: true
        },
        SKU: {
            type: String,
            required: true
        },
        category_id: {
            type: Number,
            required: true
        },
        inventory_id: {
            type: Number,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        discount_id: {
            type: Number,
            required: true
        },
        created_at: {
            type: Date,
            required: true
        },
        modified_at: {
            type: Date,
            required: true
        },
        deleted_at: {
            type: Date,
            required: false
        }
        })
const ProductModel=mongoose.model("products",ProductSchema)
module.exports=ProductModel;