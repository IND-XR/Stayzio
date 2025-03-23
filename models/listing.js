const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title : {
        type :String,
        required :true,
    },

    description : String,
    image: {
        // type : String,
        filename: String,
        url : String 
        // default : "https://pixelstalk.net/wp-content/uploads/2016/08/Sunset-Beaches-Backgrounds.jpg",
        // set: (v) => v.trim() === " " ? "https://pixelstalk.net/wp-content/uploads/2016/08/Sunset-Beaches-Backgrounds.jpg" : v ,   // check v is empty OR  note  ( Ex. if check V is empty Or not  / if V is a empty then print link / v is not Empty than print a defalt value)
    },
    price : Number,
    location : String,
    country : String,
});




const Listing = mongoose.model("Listing",listingSchema);
module.exports = Listing;


// const DataLinf



















