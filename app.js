const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 8080;
const Listing = require("./models/listing.js");


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

app.get("/", (req, res) => {
  res.send("Hi i am root");
});

app.get("/testListing", async (req ,res )=>{
  // res.send("working Good")
  
  let sampleListing  = new Listing( {
    title : "my New Villa",
    description : "by the beach",
    price : 1200,
    location : "calangute , goa ",
    country : " India"
  });

  await sampleListing.save();
  console.log("sample");
  res.send("successfull testing ");
});







app.listen(PORT, (error) => {
  if (!error) console.log("Server is successful Running" + PORT);
  else console.log("Error", error);
});

// Listing.deleteMany({title: "my New Villa"})
// .then((res)=>{
//   console.log(res)
// })
// .catch((err)=>{
//   console.log(err)
// })
