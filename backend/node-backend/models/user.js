const mongoose = require('mongoose'),
    bcrypt = require('bcrypt'),
    saltRounds = 10,
    UserSchema = mongoose.Schema({
        fullName:{
            firstName:{
                type:String,
                require:true
            },
            lastName:{
                type:String,
                require:true
            }
        },
        username:{
            type:String,
            require:true
        },
        email:{
            type:String,
            require:true
        },
        mobileNumber:{
            type:String,
            require:true
        },
        password:{
            type:String,
            require:true
        }
    })
const User = module.exports = mongoose.model('User',UserSchema);
module.exports.getUserByUsername = (username,callback)=> {
    const query = {username};
    User.findOne(query,callback);
}
module.exports.addUser = (newUser,callback)=>{
    bcrypt.hash(newUser.password,saltRounds,(err,hash)=>{
        if(err) throw err;
        else {
            newUser.password = hash
            newUser.save(callback(null,true));
        }
    })
}
module.exports.hashPassword = (password,callback)=>{
    bcrypt.hash(password,saltRounds,(err,hash)=>{
        if(err) throw err;
        else {
            callback(hash)
        }
    })
}
module.exports.comparePassword = (candidatePassword,hash,callback)=>{
    bcrypt.compare(candidatePassword,hash,(err,isMatch)=>{
        if(!err){
            callback(null,isMatch);
        }
    })
}