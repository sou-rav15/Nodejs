const mongoose = require('mongoose');

 const psersonSchema= mongoose.Schema(
    {
        name:{
            type: String,
            required: true
        }, 
        age:{
            type: Number,
            require: true
        },
        work :{
            type: String,
            enum:['chef','waiter','manager'],

            required: true
        },
        email:{
            type:String,
            required:true,
            unique: true
        },
        username:{
            type : String,
            required: true,
            unique: true
        },
        password:{
            type:String,
            required: true
        }
    },{});

  const Person= mongoose.model("Person",psersonSchema);
  module.exports=Person;