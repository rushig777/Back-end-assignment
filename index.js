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

    const Movie = model("movie",MovieSchema)

const movie = new Movie({
    title:"avengers",
    rating:4.5,
    releaseDate:new Date(),
    boxOfficeCollection:9899,
    cast:["TONY","HULK","CAPTAIN"],
    language:"English"
})

    await movie.save();
    console.log("saved")

    conn.disconnect();
};
Main();