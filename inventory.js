const mongoose=require('mongoose');
const InventorySchema=new mongoose.Schema(
    {
        
        id: {
            type: Number,
            required: true
        },
        quantity: {
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
const ProductModel=mongoose.model("products",InventorySchema)
module.exports=ProductModel;