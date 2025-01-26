import mongoose from "mongoose"
export default async function connectDB(){
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB Connected Successfully....");
    } catch (error) {
        console.log("Error in db connection => ", error);
    }
}