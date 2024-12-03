import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const CreateConnection = async () => {
  try {
    const connectionURL = await mongoose.connect(process.env.MONGODB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // Timeout for server selection
      socketTimeoutMS: 45000, // Timeout for socket inactivity
      connectTimeoutMS: 10000, // Timeout for initial connection
    });
    console.log(`Creating connection ${connectionURL.connection.host}`);
  } catch (error) {
    console.log(`Error creating connection ${error.message}`);
    process.exit(1);
  }
};
