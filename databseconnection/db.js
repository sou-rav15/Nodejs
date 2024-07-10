const mongoose = require('mongoose');
const DB_NAME="hotel"
// const MONGODB_URI="mongodb+srv://sourav15:sourav15@cluster0.kwgsfjr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
require('dotenv').config ();

const connectDB= async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB is connected`);
    } catch (error) {
        console.log("here");
        console.log(process.env.MONGODB_URI);
console.log(process.env.PORT);
        console.log("MONODB connection is failed",error);

    }

}

module.exports= connectDB
// mongoose.connect(`${mongoDBURL}/${DB_NAME}`,{
//     useNewUtlParser:true,
//     useUnifiedTopology:true
// })
// const db=mongoose.connection;
// db.on('connected',()=>{
//     console.log("connected to MongoDB server");
// })

// db.on('disconnected',()=>{
//     console.log("disconnected to MongoDB server");
// })

// db.on('error',(err)=>{
//     console.log("connected to MongoDB server");
// })

// module.exports=db;