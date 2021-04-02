require('dotenv').config()
//Import Express 
const express = require('express');
//Import Url
const url = process.env.mongourl
//Import Mongoose
const mongoose = require('mongoose');
mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection
//Enkripsi di DB
const bcrypt = require('bcrypt');
//JWT 
const jwt = require('jsonwebtoken')

//Import App ke Express
const app = express();
app.use(express.json())

//BikinUser disimpan sementara
const User = require('./user')

//USER LOGIN SYSTEM

//Get ke Post
app.post('/users', async (req,res) => {

    try {
    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(req.body.password , salt)
    const user = {name:req.body.name , password: hashedPassword}
    const newuser = new User(user)
    await newuser.save()
    res.status(201).send()
    hash('password')
    } catch {
        res.status(500).send()
    }
})

//login agar mendapat token
app.post('/users/login', async(req,res) => { 
    const query  = User.where({ name: req.body.name });
    query.findOne(async function (err, user) {
    if (user) {
     if (user == null){
        return res.status(400).send("Cannot find user")
    }
    try {
        if (await bcrypt.compare(req.body.password , user.password)){
            const name = {name:user.name}
            const accessToken = jwt.sign(name,process.env.ACCESS_TOKEN_SECRET,{expiresIn:60*20}) 
            res.json({accessToken: accessToken})
         
        } else {
            res.send('Not Allowed')
        }
    }catch{
        res.status(500).send()
    }
    }
    });
  
   
})


//connect ke database //avoidwarning
con.on('open',() => {
    console.log("connected . . .");
})

//routing ke db alien 
const alienRouter = require('./routes/aliens')
app.use('/aliens',alienRouter)

app.listen(8080,() => {
    console.log("server started")
})