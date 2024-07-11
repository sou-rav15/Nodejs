const express = require('express');
const app =express();
const connectDB=require('./databseconnection/db.js')
require('dotenv').config ({path:'./env'});

const passport= require('./authentication/auth.js')
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(express.json());
app.use(express.urlencoded({extended : true}))
const PORT= process.env.PORT||4000;


app.use(passport.initialize());
app.get("/",passport.authenticate('local',{session:false}),(req,res)=>{
    res.send("you are in home page")
})


const menuItemsroutes=require("./routes/menuItems.js");
const personroutes= require('./routes/person.route.js');

// use the routers
app.use('/menu',menuItemsroutes);
app.use('/person',personroutes);
app.listen(PORT,()=>{
    console.log("port is listening at 4000")
    console.log(process.env.PORT);;
})

connectDB();