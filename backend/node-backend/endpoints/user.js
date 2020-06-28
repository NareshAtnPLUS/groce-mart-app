const express = require('express'),
    User = require('../models/user'),
    jwt = require('jsonwebtoken'),
    utils = require('./utils'),
    passport = require('passport')
    user = express.Router(),
    refreshTokens = {},
    passportOps = {
        jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey:process.env.ACCESS_TOKEN_SECRET
    } 
passport.use(new JwtStrategy(passportOps,function(jwtPayload,done){
    const expirationDate = new Date(jwtPayload.exp*1000)
    console.log(jwtPayload)
    if(expirationDate < new Date()){
        return done(null,false)
    }
    done(null,jwtPayload)
}))
passport.serializeUser(function(user,done){
    done(null,user.username)
})
user.post('/login',(req,res)=>{
    const {username,password} = req.body;
    console.log(username,password)
    User.getUserByUsername(username,(err,user)=>{
        if(err) throw err;
        if(!user) return res.json({success:false,message:"User not found"})
        User.comparePassword(password,user.password,(err,isMatch)=>{
            if(err) throw err;
            else if(isMatch){
                const user = { 'username':username }
                const token = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET,{ expiresIn:30*60 })//half an hour
                res.json({success:true,jwt:token})            
            } else {
                res.json({success:false,message:"You've entered wrong password"})
            }
        })
    })    
})

user.post('/register',async (req,res)=>{
    console.log(req.body)
    delete req.body.type
    console.log(req.body)
    const newUser = new User(req.body)
    await User.addUser(newUser,(err,user)=>{
        if(err){
            console.log(err)
            // res.sendStatus(500)
        } else {
            console.log('User Added Successfully')
            res.json({
                payload:"User Added Successfully!"
            })
        }
    })
    // User.getUserByUsername(req.body.username,(err,user)=>{
    //     if(user){
    //         console.log('got user',user)
    //         delete user.password
    //         res.json({
    //             selectId:user._id,
    //             firstName:user.fullName.firstName,
    //             lastName:user.fullName.lastName
    //         })
    //     } else {
    //         res.sendStatus(500)
    //     }
    // })
    
})
user.post('/verifyOTP',passport.authenticate('jwt'),(req,res)=>{
    const query = {email:req.query.user}
    const otpFromUser = req.body.otp
    User.findOne(query).then(user=>{
        if(otpFromUser == user.otp){
            res.json({
                isMatch:true,
                message:"OTP match successful"
            })
        } else {
            res.json({
                isMatch:false,
                message:"OTP match failed"
            })
        }
    })
    console.log(req.body,req.query)    
})
user.post('/updatePassword',passport.authenticate('jwt'),(req,res)=>{
    const query = {email:req.query.user}
    const password = req.body.password
    User.hashPassword(password,(hashedPassword)=>{
        if(hashedPassword){
            User.findOneAndUpdate(query,{password:hashedPassword},(err,data)=>{
                if(!err){
                    // console.log(data)
                    res.json({
                        success:true,
                        msg:"Password changed Successfully"
                    })
                } else{
                    res.json({
                        success:false,
                        msg:"Password Updation failed"
                    })
                }
            })
        }
    })
    console.log(req.body,req.query)
})

user.get('/random',passport.authenticate('jwt'),(req,res)=>{
    console.log(req.headers.authorization)
    res.json({value:Math.floor(Math.random()*100)})
})
user.get('/getAccount',(req,res)=>{
    const user = req.query.user
    var userEmail;
    let otpToken = jwt.sign({'username':user},process.env.ACCESS_TOKEN_SECRET,{ expiresIn:30*60 })//expires in 5 minutes
    var userAvailable=false
    const findByEmail = User.findOne({email:user},(err,userData)=>{
        if(userData!==null){
            userAvailable = true    
            userEmail = userData.email
        }
    })
    const findByUsername = User.findOne({username:user},(err,userData)=>{
        if(userData!==null){
            userAvailable = true    
            userEmail = userData.email
        }
    })
    const findByMobile = User.findOne({mobileNumber:user},(err,userData)=>{
        if(userData!==null){
            userAvailable = true    
            userEmail = userData.email
        }
    })
    Promise.all(
        [findByEmail,findByMobile,findByUsername]
    ).then(async()=>{
        if(userAvailable){
            console.log('user is available')
            const otp = await utils.sendOtpToEmail(userEmail)            
            console.log('token',otp)
            if(otp!== undefined || null){
                User.findOneAndUpdate({email:userEmail},{otp})
                .then((user)=>{
                    res.json({
                        userAvailable,
                        availableUser:userEmail,
                        otpToken,
                        message:"Requested user is registered to grocemart Otp is sent to the User"
                })
            })
            }
        }
    })
    
})
user.get('/accounts',async (req,res)=>{
    console.log('Accounts');
    
    const accounts = await User.find().lean();
    accounts.forEach(account => {
        delete account.password
    });const payload = {accounts}
    console.log(payload)

    res.json(payload)
})
module.exports = user;