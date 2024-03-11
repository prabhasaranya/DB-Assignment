const mongoose=require('mongoose');
const CategorySchema=new mongoose.Schema(
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
const ProductModel=mongoose.model("products",CategorySchema)
module.exports=ProductModel;