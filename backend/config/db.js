import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI);
        console.log("mongoose connected successfuly");
    } catch (error) {
        console.log(`error ${error.message}`)
        process.exit(1)
    }
    
}