const express = require('express');
const app = express();
const path = ("path");
const cors = ('cors');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const config = require('./config/key');

const mongoose = require('mongoose');
mongoose.connect(config.mongoURI,{
    useNewUrlParser : true, useUnifiedTopology : true,
    useCreateIndex: true, useFindAndModify:false
})
.then(()=> console.log('MongoDB Connected...'))
.catch(err => console.log(err));

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cookieParser())

app.use('/api/users', require(''))


const port = process.env.PORT || 5000

app.listen(port, ()=>{
    console.log(`Server Running at ${port}`)
})