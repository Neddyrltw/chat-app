import mongoose  from "mongoose";

const connectToMongoDB = async (req, res) => {
    try {
        await mongoose.connect(process.env.MONGO_BD_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error Connecting to MongoBD", error.message)
    }
}

export default connectToMongoDB;