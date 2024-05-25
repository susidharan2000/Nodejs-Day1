// Imports
import express from "express";

// Decleration
const app = express();
const PORT = 4000;

//Middleware
app.use(express.json());

//routs
app.get('/',(req,res)=>{
    // res.status(200).json({message:"hai all welcome to our first app"})
   res.status(200).send(`<span style="color:white;background-color:red;font-size:100px">hello</span>`);
});
app.get('/about',(req,res)=>{
    // res.status(200).json({message:"hai all welcome to our first app"})
   res.status(200).send(`<span style="color:white;background-color:red;font-size:100px">this is about me</span>`);
});

//Running port
app.listen(PORT,()=>{
    console.log(`App is running on port  ${4000}`);
});