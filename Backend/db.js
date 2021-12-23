const mongoose = require('mongoose')

const mongoURI="mongodb+srv://sahil_saif_12:sahilsaif1320@cluster0.ujdjw.mongodb.net/NoteLikho?retryWrites=true&w=majority"

const connectToMongo = () =>{
    mongoose.connect(mongoURI,()=>{
        console.log("connected to Mongo successfully");
    })
}

module.exports=connectToMongo