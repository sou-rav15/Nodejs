const mongoose = require('mongoose');

const menuSchema= mongoose.Schema(
    {
       name :{
        type: String,
        required: true,
        },
        taste:{
            type:String,
            enum:['sweet','spicy','word'],
            required: true,
        },
        id_drink:{
            type:Boolean,
            default: false
        },
        ingredients:{
            type :[String],
            default:[]
        }
    },{})

const MenuItems= mongoose.model("MenuItems",menuSchema);
module.exports=MenuItems;