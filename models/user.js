const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
mongoose.connect(process.env.MONGODB_CONNECTION_URL);

const userScheema = mongoose.Schema({
  image: String,
  email: String,
  name: String,
});
module.exports = mongoose.model("user", userScheema);
