const express =require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
let path = require('path');
require('./schema/config')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/songs',require('./routes/songs'));

app.get('/',(req,res)=>{
    res.status(200).sendFile('index.html',{root:'./'})
})

app.listen(3333,(req,res)=>{
    console.log('en el puerto 3333')
})
app.use('/html', express.static(path.join(__dirname, 'public','html')))
app.use('/images', express.static(path.join(__dirname,'public','images')))


app.use((req,res)=>{
    res.status(404).sendFile('404.html', {root: './public/html'})
})
