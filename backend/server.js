import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
dotenv.config()

const app = express();

app.get('/products',(req,res)=>{
    res.send('nodemon is here')
})
console.log(process.env.MONGO_URI);

connectDB();
app.listen(5000 , ()=>{
    console.log('application running quitely on port 5000')
});
//QnK54dqUwBKAIzgT