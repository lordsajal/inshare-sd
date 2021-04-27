//A1b4fpngLTyy76tg
//mongodb+srv://inShare:<password>@cluster0.eocrw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
require("dotenv").config();
const mongoose = require("mongoose");

function connectDB() {
  //console.log(process.env.MONGO_CONNECTION_URL);
  mongoose.connect(process.env.MONGO_CONNECTION_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  });

  const connection = mongoose.connection;

  connection
    .once("open", () => {
      console.log("db connected");
    })
    .catch((err) => {
      console.log("connection failed: ");
    });
}

module.exports = connectDB;
