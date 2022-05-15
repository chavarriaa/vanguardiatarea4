const mongoose= require('mongoose');
const USER= process.env.USER
const PASSWORD = process.env.PASSWORD
const DB= process.env.DB
const config = `mongodb+srv://${USER}:${PASSWORD}@vanguardia.olopb.mongodb.net/${DB}`

mongoose.connect(config)
    .then(res=>console.log('connectado'))
    .catch(err=>console.log(err))
