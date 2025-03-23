const mongoose = require("mongoose")
const initData  = require("./data.js")
const Listing = require("../models/listing.js");

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