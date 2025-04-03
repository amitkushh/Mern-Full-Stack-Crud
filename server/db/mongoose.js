import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Database connected Successfully");
  } catch (error) {
    console.log("error to connect database");
    process.exit(1);
  }
};

export default connectDb;
