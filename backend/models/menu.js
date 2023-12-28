const mongoose = require("mongoose")
const menuSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Menu name should be provided"],
    },
    link:String,
    contents:[{
        heading:String,
        subHeading:String,
        shortDescription:String,
        longDescription:String,
        pageLocation:String,
        imagePath:Array,
        imageDescription:Array
    }],
    subMenus:[{
        name:String,
        link:String,
        contents:[{
            heading:String,
            subHeading:String,
            shortDescription:String,
            longDescription:String,
            pageLocation:String,
            imagePath:Array,
            imageDescription:Array
        }]
    }]
})

const Menu = mongoose.model("Menu",menuSchema)

module.exports = Menu
