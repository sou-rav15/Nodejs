const express =require("express");
const router= express.Router();

const Person =require('./../models/person.js')
router.post('/',async(req,res)=>{


    try {
        const {name,age, work, email,username,password}=req.body;
        // that all the data should exist
        if(!(name && age && work && email&& username&& password)){
            return res.status(400).send("please enter all the details");

        }
        //check if user is already exists
        const existingUser= await Person.findOne({email});
        if(existingUser){
            return res.status(400).send("person is already exists with same email");
        }
        //encrypt the password
        // const hashPassword= bcrypt.hashsync(password,10);
        // console.log(hashPassword);

        // save the user to the databse
        const person =await Person.create({
            name,
            age,
            work,
            email,
            username,
            password,
        })
        // generate a token for user and send it
        // const token =jwt.sign({id:user._id,email},process.env.SECRET_KEY)
        res.status(200).json({
            message:"you have succesfully added",
            person
        })
        console.log("data_saved");
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"internal server error"})
    }

    // try {
    //     const data= req.body;
    // const newPerson= new Person(data)
    //     const response =await newPerson.save()
    //     console.log('data saved');
    //     res.status(200).json(response);
    // } catch (error) {
    //     console.log(error);
    //     res.status(500).json({error:"internal server error"})
    // }


})
//Get
router.get('/', async(req,res)=>{
    try{
        const data = await Person.find();
        console.log("data fetche");
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error:"Internal Server Error"})
    }


})
//update
router.put('/:id',async(req,res)=>{
    try {
        const personId=req.params.id;
        const updatedPersonData= req.body;

        const response =await Person.findByIdAndUpdate(personId, updatedPersonData,{
            new:true,
            runvalidators:true,
        })
        if(!response){
            return res.status(404).json({error:'Person not found'})
        }
        console.log('data updated');
        res.status(200).json(response);

        
    } catch (error) {
        console.log(error);
        res.status(500).json({error:'Internal Server Error'});
    }
})
module.exports=router;