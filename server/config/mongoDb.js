import mongoose from "mongoose"

//nSZyUZR2V9D6UOmV

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDb connected successfully");
    } catch (error) {
        console.log("MongoDb connection failed!", error);
    }
}

export default connectDb;