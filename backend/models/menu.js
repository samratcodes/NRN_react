const mongoose = require("mongoose")
const menuSchema = new mongoose.Schema({
    name:String,
    link:String,
    subMenu:[{
        name:String,
        link:String
    }]
})

const Menu = mongoose.model("Menu",menuSchema)

module.exports = Menu