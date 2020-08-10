const express =require('express')
const bodyParser=require('body-parser')
const app=express()
const dotenv = require("dotenv");
dotenv.config();
app.use(bodyParser.json())
require('./db/mongo')
const ResortController=require ('./controller/resortcontroller')


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT");
    next();
});

app.use(bodyParser.urlencoded({
    extended: false
  }));

  
//routes
app.use('/restaurant',ResortController)


app.listen(3005,()=>{
    console.log('server is running on port 3005')
})