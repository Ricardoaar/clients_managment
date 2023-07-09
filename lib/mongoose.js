const env = require("./dotenv");
const mongoose = require("mongoose");

const { MONGO_URI } = env;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {});
    console.log("MongoDB connected");
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = { connectDB };



