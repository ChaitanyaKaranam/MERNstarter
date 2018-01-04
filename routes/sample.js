const express = require ('express');
const router = express.Router();
const sampleModel = require('../models/sample_model');

router.get('/sample',(req,res)=>{
    sampleModel.getTasks({},(err,val)=>{
        res.json(val);
    });    
});

module.exports = router;
