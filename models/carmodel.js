const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
    name : {type :String, required:true},
    image : {type :String, required:true},
    capacity : {type :Number, required:true},
    fueltype:{type:String,required:true},
    bookedTimeslots :[
        {
            form:{type:String, required:true},
            to:{type:String,required:true}
        }
    ],
    rentPerHour :{type:Number,required:true}
    
},{timestamps:true}
)
const carModel = mongoose.model('Cars',carSchema)
module.exports = carModel