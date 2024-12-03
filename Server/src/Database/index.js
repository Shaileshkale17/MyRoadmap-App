import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const CreateConnection = async () => {
  try {
    const connectionURL = await mongoose.connect(process.env.MONGODB);
    // console.log(`Creating connection ${connectionURL.connection.host}`);
  } catch (error) {
    console.log(`Error creating connection ${error.message}`);
    process.exit(1);
  }
};
