const express = require('express'),
    User = require('../models/user'),
    user = express.Router();

user.post('/register',async (req,res)=>{
    console.log(req.body)
    // res.sendStatus(201);
    const newUser = new User(req.body)
    await User.addUser(newUser,(err,user)=>{
        if(err){
            console.log(err)
            // res.sendStatus(500)
        } else {
            console.log('User Added Successfully')
        }
    })
    User.getUserByUsername(req.body.username,(err,user)=>{
        if(user){
            console.log('got user',user)
            delete user.password
            res.json({
                selectId:user._id,
                firstName:user.fullName.firstName,
                lastName:user.fullName.lastName
            })
        } else {
            res.sendStatus(500)
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