
const express =require("express");
const { json } = require("express/lib/response");
const {Movie,connection}=require("./db")

const app=express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/movies",async(req,res)=>{

   const movies = await Movie.find();
   console.log(movies)
   return res.json(movies);
})

app.listen(8080,async()=>{
    try{
        await connection    
    }catch(err){
        console.log("not connected to server")
    }
    console.log("port is on")
})