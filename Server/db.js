const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
function connectDB() {
  mongoose.connect(
    "mongodb+srv://satyampandeyhcc:satyam123@cluster0.2jqbolj.mongodb.net/satyampandeyhcc?retryWrites=true&w=majority&appName=Cluster0",
    { useUnifiedTopology: true, useNewUrlParser: true }
  );

  const connection = mongoose.connection;
  // mongoose.set('strictQuery', false);
  connection.on("connected", () => {
    console.log("Mongo DB Connection Successfull");
  });

  connection.on("error", () => {
    console.log("Mongo DB Connection Error");
  });
}

connectDB();

module.exports = mongoose;
