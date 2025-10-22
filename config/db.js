import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const ConnectDB = async ()=>{
    console.log("Connecting to database...",process.env.MONGO_URI);
    try{
        await mongoose.connect(`${process.env.MONGO_URI}`)
        console.log("Database connected successfully");
    }
    catch(err){
        console.log("error in database connection", err);
    }
}

export default ConnectDB;