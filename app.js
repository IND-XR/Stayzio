const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 8080;

app.get("/", (req, res) => {
  res.send("Hi i am root");
});

const MNGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then((res) => {
    console.log("connection successful", res);
  })
  .catch((err) => {
    console.log("error", err);
  });

async function main() {
  await mongoose.connect(MNGO_URL);
}





app.listen(PORT, (error) => {
  if (!error) console.log("Server is successful Running" + PORT);
  else console.log("Error", error);
});
