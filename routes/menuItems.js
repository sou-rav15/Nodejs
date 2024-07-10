const express= require('express');

const router= express.Router();
const MenuItems=require('../models/menu.model.js');
router.post("/",async(req,res)=>{
    
    try {
        const data= req.body;
    const newMenu= new MenuItems(data);
        const response =await newMenu.save()
        console.log('data saved');
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"internal server error"})
    }

})

router.get('/', async(req,res)=>{
    try{
        const data = await MenuItems.find();
        console.log("data fetche");
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error:"Internal Server Error"})
    }


})
module.exports= router;