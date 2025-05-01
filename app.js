const express = require("express");
const app = express();
const mongoose = require("mongoose");

const PORT = 8080;

const Listing = require("./models/listing.js");    // isting models part

const path = require("path");

//  { mongodb

// MNGO_URL -  ( URL pass form mongodb website  )
const MNGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

// Create a data base  write a Async function 
async function main() {
  await mongoose.connect(MNGO_URL);
}

main()
  .then((res) => {
    console.log("connection successful DB", res);
  })
  .catch((err) => {
    console.log("error", err);
  });

//  mongodb }


app.set("view engine","ejs");
app.set("views",path.join(__dirname, "views"));
app.use(express.urlencoded({extended:true}));


// app.set("index.ejs",path.join(__filename, "index.ejs"))

app.get("/", (req, res) => {
  res.send("Hi i am root");
});


// Index Route
app.get("/listings", async (req, res)=>{
  const allListings = await Listing.find({})
  res.render("listings/index.ejs",{allListings});
  // res.send("Hi i am root");
    
});

// Show Id
app.get("/listings/:id", async (req,res)=>{
  // req.params['id'];
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/show.ejs",{listing});
});


app.listen(PORT, (error) => {
  if (!error) console.log("Server is successful Running" + PORT);
  else console.log("Error", error);
});

// const allListing = await Listing.find({})

// app.get("/listings", async (req, res)=>{    // checking listings working OR not in terminal      
//   // res.send("Hi i am root");
//   await Listing.find({}).then((res)=>{
//     console.log("print result /listing",res);
//   })
//   .catch((err)=>{
//     console.log(err)
//   })

    
// }) 

// app.get("/testListing", async (req ,res )=>{
//   // res.send("working Good")
  
//   let sampleListing  = new Listing( {
//     title : "my New Villa",
//     description : "by the beach",
//     price : 1200,
//     location : "calangute , goa ",
//     country : " India"
//   });

//   await sampleListing.save();
//   console.log("sample");
//   res.send("successfull testing ");
// });









// Listing.deleteMany({title: "my New Villa"})
// .then((res)=>{
//   console.log(res)
// })
// .catch((err)=>{
//   console.log(err)
// })
