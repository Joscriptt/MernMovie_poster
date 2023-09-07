const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose.set("strictQuery", false);
  await mongoose
    .connect("mongodb://127.0.0.1:27017/movies" || process.env.MONGODB_URI, {
      useNewUrlParser: "true",
      useUnifiedTopology: "true",
    })
    .then(() => {
      console.log("connected to db");
    })
    .catch((error) => {
      console.log(error);
      process.exit(1);
    });
};

module.exports = connectDB;
