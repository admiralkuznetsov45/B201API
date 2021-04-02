const express = require('express');
const router = express.Router()
const Alien = require('../models/alien');
const { authenticateToken } = require('./token');
const { ObjectId } = require('mongodb');


router.get('/',authenticateToken,async(req,res)=>{
   /* if(!req.user){
        res.send("error")
    }*/
    try{
        const aliens = await Alien.find()
        res.json(aliens)
    }catch(err){
        res.send('Error' + err)
    }
})

router.get('/:id',authenticateToken, async(req,res) => {
    try{
           const alien = await Alien.findById(req.params.id)
           res.json(alien)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.post('/',authenticateToken,async(req,res) => {
    const alien = new Alien({
        title: req.body.title,
        author: req.body.author,
        isbn: req.body.isbn,
        average_rating:req.body.average_rating,
        num_pages:req.body.num_pages,
        isbn13:req.body.isbn13,
        text_review_count:req.body.text_review_count,
        language_code:req.body.language_code,
        ratings_count:req.body.ratings_count,
        publisher:req.body.publisher,
    })

    try{
        const a1 = await alien.save()
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

router.patch('/:id',authenticateToken,async(req,res)=> {
    try{
        const query = { _id:ObjectId(req.params.id) }
        const alien = await Alien.findOneAndUpdate(query,req.body)
        res.json(alien)   
    }catch(err){
        res.send('Error')
    }

})

router.delete('/:id', authenticateToken,async(req,res) =>{
    try{
        const query = { _id:ObjectId(req.params.id) }
        const aliens = await Alien.deleteOne(query)
        res.json(aliens)
 }catch(err){
     res.send('Error ' + err)
 }
})

module.exports = router