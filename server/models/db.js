const mongoose = require("mongoose");

module.exports=mongoose.connect("mongodb+srv://admin:admin@cluster0.crgklxx.mongodb.net/", { //export the mongodb module
  useUnifiedTopology: true,
  useNewUrlParser: true,//to avoid warnings
});

// Event handlers for connection success and error
mongoose.connection.on("connected", () => {
  console.log("Mongdb connected");
});

mongoose.connection.on("error", (err) => {
  console.error("Error in db connection:", err);
});