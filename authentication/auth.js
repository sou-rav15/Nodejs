const passport= require('passport');
const LocalStrategy= require('passport-local').Strategy;
const Person= require('./../models/person.js')
passport.use(new LocalStrategy(async(USERNAME,password ,done)=>{

    try {
        console.log('Recieved Credentials:', USERNAME,password);
        const user =await Person.findOne({username:USERNAME});
        console.log(user);
        if(!user)
            return done(null, false,{message:"Incorrect username"})
        const isPasswordMatch= await user.password=== password?true:false;
        
        console.log("username found");       
        if(isPasswordMatch){
            console.log("password is matched")
            return done(null, false,);

        }
        else return done(null, false, {message:"Incorrect password"})
    } catch (error) { 
        return done(error)
    }
}));

module.exports=passport;