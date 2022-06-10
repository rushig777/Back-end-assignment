
const express =require("express");
const { json } = require("express/lib/response");
const {Movie,connection}=require("./db")

const app=express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/movies",async(req,res)=>{

   const movies = await Movie.find().sort("Title").limit(15);
   
   return res.json(movies);
})

app.get("/movies/rating",async(req,res)=>{

    const movies = await Movie.find().sort({"IMDB Rating":1}).limit(52);
     
   return res.json(movies);

})

app.get("/movies/search",async(req,res)=>{

    let input=req.query.search
console.log(input)
    const movies = await Movie.find().limit(15);
     
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