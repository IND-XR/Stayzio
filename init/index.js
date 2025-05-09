// const mongoose = require("mongoose");
// const Listing = require("./models/listing"); // Adjust the path if needed

// // Replace with your MongoDB connection string
// const MONGO_URI = "mongodb://127.0.0.1:27017/wanderlust";

// mongoose.connect(MONGO_URI)
//   .then(() => {
//     console.log("✅ Connected to MongoDB");

//     // Example: create and fetch a listing
//     createAndFetchListing();
//   })
//   .catch((err) => {
//     console.error("❌ MongoDB connection error:", err);
//   });

// async function createAndFetchListing() {
//   try {
//     // ✅ Step 1: Create a new listing
//     const newListing = new Listing({
//       title: "Sunset Paradise",
//       description: "A beautiful beach location.",
//       image: "",
//       price: 199,
//       location: "Goa",
//       country: "India"
//     });

//     const savedListing = await newListing.save();
//     console.log("✅ Listing saved:", savedListing);

//     // ✅ Step 2: Fetch the listing using its ObjectId
//     const id = savedListing._id;

//     if (mongoose.Types.ObjectId.isValid(id)) {
//       const foundListing = await Listing.findById(id);
//       console.log("✅ Listing fetched:", foundListing);
//     } else {
//       console.error("❌ Invalid ObjectId");
//     }

//   } catch (err) {
//     console.error("❌ Error:", err);
//   }
// }



const mongoose = require("mongoose")
const initData  = require("./data.js")

const Listing = require("../models/listing.js");    

//  { mongodb

// MNGO_URL -  ( URL pass form mongodb website  )
const MNGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then((res) => {
    console.log("connection successful DB", res);
  })
  .catch((err) => {
    console.log("error", err);
  });

async function main() {
  await mongoose.connect(MNGO_URL);
}


//  mongodb }


const initDB = async (res ,req) => {
    try{
        await Listing.deleteMany({});  // Deleta all document in the Listing Collection
        await Listing.insertMany(initData.data);  //Inserts new data from initData.data   // .data  matlab  data.js ke andarka data  jo hamne object ke andar save kiya hai usko ham idhar access karnege 
        console.log("data was initialized");
    }catch (error){
        console.log("Errorin itializing data :",error);
    } 
};

initDB(); // call the function property