const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://bandsaurabh:7AQ2c1QU2Gxb1rVC@cluster0.bjvzk.mongodb.net/?retryWrites=true&w=majority"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;