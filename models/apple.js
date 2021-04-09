const mongoose = require("mongoose")
const appleSchema = mongoose.Schema({
applename: String,
color:String,
price: Number
})
module.exports = mongoose.model("APPLE", appleSchema)