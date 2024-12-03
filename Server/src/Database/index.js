import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const CreateConnection = async () => {
  try {
    const connection = await mongoose.connect(
      `${process.env.MONGODB}/${process.env.MONGODBNAME}`, // Fixed the variable name
      {
        serverSelectionTimeoutMS: 5000, // Timeout for server selection
        socketTimeoutMS: 45000, // Timeout for socket inactivity
        connectTimeoutMS: 10000, // Timeout for initial connection
      }
    );
    console
      .log
      // `Successfully connected to MongoDB: ${connection.connection.host}`
      ();
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};
