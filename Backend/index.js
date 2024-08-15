import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

// book route
import bookRoute from "./route/book.route.js" 
// user route
import userRoute from './route/user.route.js'

dotenv.config()
const app=express();
const PORT=process.env.PORT ||3000;
const MongoUrl=process.env.MongoUrl;

// initialize cors because it's not allow to run the frontent and backend on different port
import cors from 'cors'
app.use(cors())

// to parse the data in json
app.use(express.json())


// connect to mongoDB
try{
    mongoose.connect(MongoUrl,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    console.log("MongoDB is connected")

}catch(error){
    console.log("Error: ",error)
}

// initializing routes
app.use("/book", bookRoute)
app.use("/user",userRoute)

app.listen(PORT,()=>{
    console.log(`App Is Listening on port ${PORT}`);
})