const monngoose = require("mongoose");

const connectDB = async() => {
    await monngoose.connect("mongodb://localhost/chat-app");
    console.log("MongoDB Connected!")
}

module.exports = connectDB;