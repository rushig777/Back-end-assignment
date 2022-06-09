

const mongoose = require("mongoose")

const {Schema,model} =require("mongoose")
const connection = mongoose.connect("mongodb://localhost:27017/BoxOffice")

const MovieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    rating: {
        type: Number
    },
    releaseDate: {
        type: Date
    },
    boxOfficeCollection:{type:Number,default:1000,min:0,},
    cast:{type:[String]},
    language:{
        type:String,
        enum:["English","Hindi","Marathi"]
    }

})


const Main = async () => {

    const conn = await connection;
    console.log("connected")

};

Main();

const Movie = model("movie",MovieSchema);
module.exports={Movie,connection};
