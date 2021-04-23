const mongoose = require("mongoose")
const appleSchema = mongoose.Schema({
applename: {
    type: String,
    required: [true,"Name of the apple is required"]
},

color: {
    type: String,
    required: [true,"color of the apple is required"]
},
price: {
    type: Number,
    min: [20,"Price of apple should be minimum 20Rs"],
    max:[100,"price cannot be more than 100Rs"]
},

})
module.exports = mongoose.model("APPLE", appleSchema)