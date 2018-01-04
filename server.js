const express = require('express');
const app = express();
const cors = require('cors');
const sample = require('./routes/sample');
const mongoose  = require('mongoose');

mongoose.connect('mongodb://karanc:password@ds135777.mlab.com:35777/sample_karanc');

const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/',(req,res)=>{
    res.send('Hello There');
});

app.use('/api',sample);

app.listen(PORT,()=>console.log(`Server Started at port ${PORT}`));

