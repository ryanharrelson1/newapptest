import mongoose from "mongoose";

const ConnectDb = async () => {
  try {
    await mongoose.connect(process.env.Mongo);

    console.log("DataBase Connect");
  } catch (error) {
    console.log(error.message);
  }
};

export default ConnectDb;
