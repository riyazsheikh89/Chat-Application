const monngoose = require("mongoose");

const connectDB = async() => {
    await monngoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB Connected Successfully!")
}

module.exports = connectDB;