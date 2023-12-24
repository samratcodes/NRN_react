const mongoose = require("mongoose")
const menuSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Menu name should be provided"],
    },
    link:String,
    content:[{
        heading:String,
        subHeading:String,
        shortDescription:String,
        longDescription:String,
        pageLocation:String,
        imagePath:Array, 
        imageDescription:Array
    }],
    subMenu:[{
        name:String,
        link:String,
        content:[{
            heading:String,
            subHeading:String,
            shortDescription:String,
            longDescription:String,
            pageLocation:String,
            imagePath:Array,
            imageName:Array,
            imageDescription:Array
        }]
    }]
})

/* menuSchema.pre("validate",function(next){
    
    if((!this.link || !this.content) && !this.subMenu){
        this.invalidate("link","At least main content or subMenu should be provided")
    }

    //validation for main link and content if sub menu is not provided
    if(!this.subMenu){
        if(!this.link && !this.content){
            this.invalidate("link","Link and content both should be provided")
        }else if(this.link && !this.content){
            this.invalidate("content","Content should be provided for link")
        }else if(!this.link && this.content){
            this.invalidate("link","Link for the content should be provided")
        }          
    }

    //validation if user wants both the main contents and submenu
    if(this.subMenu && (this.link || this.content)){
        if(this.link && !this.content){
            this.invalidate("content","Content for the link should be provided")
        }
        if(!this.link && this.content){
            this.invalidate("link","Link for the content should be provided")
        }
    }

    //validation for every submenu
    if(this.subMenu){
        this.subMenu.forEach((subMenu)=>{
            if(!subMenu.name){
                this.invalidate("subMenu","Sub Menu name should be provided")
            }else{
                if(subMenu.link && !subMenu.content){
                    this.invalidate("subMenu","Content is not present for the submenu link")
                }
                if(!subMenu.link && subMenu.content){
                    this.invalidate("subMenu","Link is not present for the submenu content")
                }
                if(!subMenu.link && !subMenu.content){
                    this.invalidate("subMenu","Link and content should be provided if name is provided")
                }
            }
        })
    }
    
    next()
}) */

const Menu = mongoose.model("Menu",menuSchema)

module.exports = Menu
