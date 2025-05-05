const express = require("express");
const app = express();
const mongoose = require("mongoose");

const ejsMate = require("ejs-mate");

const PORT = 8080;

const Listing = require("./models/listing.js");    // isting models part


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

const path = require("path");   //access views / listings


app.set("view engine","ejs");
app.set("views",path.join(__dirname, "views"));
app.use(express.urlencoded({extended:true})); // id 

const methodOverride = require('method-override');
app.use(methodOverride('_method'));
app.engine('ejs',ejsMate);
app.use(express.static(path.join(__dirname,"/public")));

// app.set("index.ejs",path.join(__filename, "index.ejs"))


app.get("/", (req, res) => {
  res.send("Hi i am root");
});


// Index Route
app.get("/listings", async (req,res)=>{
  const allListings = await Listing.find({})   // Mongoose model representing a MongoDB collection   // .find({}) fetches all documents in the Listing collection.
  res.render("listings/index.ejs",{allListings});
  // res.send("run");
});


//New Route
app.get("/listings/new",(req,res)=>{
  res.render("listings/new.ejs")
  // res.send("heloo");
})


// Show Id
app.get("/listings/:id", async (req,res)=>{
  // req.params['id'];
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/show.ejs",{listing});
});


// Create Route

// app.post("/listings", async (req,res)=>{
//   const newListing = new Listing(req.body.listing);
//    newListing.save();
//   res.redirect("/listings")
// })

app.post("/listings", async (req, res) => {
  try {
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
  } catch (err) {
    console.error("Error saving listing:", err);
    res.status(500).send("Internal Server Error");
  }
});


// Edit Route 
app.get("/listings/:id/edit",async (req,res)=>{
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/edit.ejs",{listing});
})


// Update Route 
app.put("/listings/:id", async (req,res)=>{
  let { id } = req.params;
  await Listing.findByIdAndUpdate(id, {...req.body.listing})  //object pass karke deconstruct  karke  / individual parameter ke andar pass karenge  , jisko new update value ke andar pass karnege 
  res.redirect(`/listings/${id}`);
});


//Delect Route
app.delete("/listings/:id", async (req,res)=>{
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  res.redirect("/listings");
})


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
