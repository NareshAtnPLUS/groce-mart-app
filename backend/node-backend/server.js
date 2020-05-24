require('dotenv').config()
const express = require('express'),
      mongoose = require('mongoose'),
      passport = require('passport'),
      bodyParser = require('body-parser'),
      path = require('path')
      jwt = require('jsonwebtoken'),
      cors = require('cors'),
      JwtStrategy = require('passport-jwt').Strategy,
      ExtractJwt = require('passport-jwt').ExtractJwt
      users = require('./endpoints/user');

mongoose.connect(process.env.database,{ useNewUrlParser: true,useUnifiedTopology: true });
mongoose.connection.on('connected', ()=> {
    console.log('Connected to Database '+process.env.database);
});

mongoose.connection.on('error', (err)=> {
    console.log('Database error '+err);
});
const grocemartApi = express();

grocemartApi.use(bodyParser.json());
grocemartApi.use(passport.initialize());
grocemartApi.use(passport.session());
grocemartApi.use(cors());
grocemartApi.use(express.static(path.join(__dirname,'client')));
grocemartApi.use('/users',users);
// grocemartApi.get('*',(req,res) => {
//     res.sendFile(path.join(__dirname,'client/index.html'));
// });

grocemartApi.set('port', process.env.PORT);
grocemartApi.set('publicHost', '0.0.0.0');

module.exports = { grocemartApi }
