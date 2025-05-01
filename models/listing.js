const mongoose = require("mongoose");
const Schema = mongoose.Schema;   // mongoose.schema ko variable ke andar store karenge 


const listingSchema = new Schema({
    title : {
        type :String,
        required :true,
    },
    // id: { 
    //     type: mongoose.Schema.Types.ObjectId, 
    //     required: true
    //   },
 

    description : String,
    image: {
        // type : String,
        filename: String,
        url : String ,
        // default : "https://pixelstalk.net/wp-content/uploads/2016/08/Sunset-Beaches-Backgrounds.jpg",
        
        // set matlab image file ki value ko set karnege wale hai 

        // { v  matalb image ki value }

        set:(v) => 
            v.trim() === " " 
        ? "https://pixelstalk.net/wp-content/uploads/2016/08/Sunset-Beaches-Backgrounds.jpg" : v ,  
        // // check v is empty OR  note  ( Ex. if check V is empty Or not  / if V is a empty then print link / v is not Empty than print a defalt value)
    },
    price : Number,
    location : String,
    country : String,
});

// using schema we create a model

const Listing = mongoose.model("Listing",listingSchema);   
module.export = Listing;  // module  ko exports karenge app.js  ke andar 

// const DataLinf



















