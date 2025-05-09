const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  image: {
    filename: String,
    url: {
      type: String,
      set: (v) =>
        v === ""
          ? "https://pixelstalk.net/wp-content/uploads/2016/08/Sunset-Beaches-Backgrounds.jpg"
          : v
    }
  },
  price: Number,
  location: String,
  country: String
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;


// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const imageSchema = new Schema({
//   filename: String,
//   url: {
//     type: String,
//     set: (v) =>
//       v === ""
//         ? "https://pixelstalk.net/wp-content/uploads/2016/08/Sunset-Beaches-Backgrounds.jpg"
//         : v,
//   },
// }, { _id: false });

// const listingSchema = new Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   description: String,
//   image: imageSchema,
//   price: Number,
//   location: String,
//   country: String,
// });

// const Listing = mongoose.model("Listing", listingSchema);
// module.exports = Listing;




// const mongoose = require("mongoose");
// const { Types } = require("mongoose/lib/schema");
// const Schema = mongoose.Schema;   mongoose.schema ko variable ke andar store karenge 


// const listingSchema = new Schema({
//     title: {
//         type : String,
//         required :true,
//     },
//     description : String,
//     image: {
//         filename: String,
//         url:{
//             types:String,
//             set: (v) =>
//                 v === ""
//                   ? "https://pixelstalk.net/wp-content/uploads/2016/08/Sunset-Beaches-Backgrounds.jpg"
//                   : v,
//         },
//     },  { _id: false });  _id: false to prevent creating a nested _id
//     price : Number,
//     location : String,
//     country : String,
// });

// using schema we create a model

// const Listing = mongoose.model("Listing",listingSchema);   
// module.exports = Listing;   module  ko exports karenge app.js  ke andar 

// const DataLinf




// id: { 
    //     type: mongoose.Schema.Types.ObjectId, 
    //     required: true
    //   },


        // type : String,

        // default : "https://pixelstalk.net/wp-content/uploads/2016/08/Sunset-Beaches-Backgrounds.jpg",
        
        // set matlab image file ki value ko set karnege wale hai 

        // { v  matalb image ki value }              v.trim() === " " 


        // set: (v) => 
        //     v === "" 
        // ? "https://pixelstalk.net/wp-content/uploads/2016/08/Sunset-Beaches-Backgrounds.jpg" 
        // : v ,  
        // // check v is empty OR  note  ( Ex. if check V is empty Or not  / if V is a empty then print link / v is not Empty than print a defalt value)















