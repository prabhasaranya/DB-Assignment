const mongoose=require('mongoose');
const DiscountSchema=new mongoose.Schema(
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
        discount_percent: {
            type: Number,
            required: true
        },
        active:{
            type: String,
            required:true
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
const ProductModel=mongoose.model("products",DiscountSchema)
module.exports=ProductModel;