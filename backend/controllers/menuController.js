const Menu = require("../models/menu")

//GET ALL MENU
const getMenu = (req,res)=>{
    Menu.find()
    .then((menu)=>{
        if(menu.length > 0){
            res.status(200).json({success:true,data:menu})
        }else{
            res.status(404).json({success:false,message:"No menu found"})
        }
    })
    .catch((err)=>{
        res.status(500).json({success:false,message:"Internal Server Error"})
    })
}

//ADD MENU
const addMenu = (req,res)=>{
    //CHECK IF THERE ARE DATA ON THE REQUEST
    if(Object.keys(req.body).length === 0){
        return res.status(400).json({success:false,message:"Invalid request body"})
    }

    //CREATING MENU OBJECT ON THE BASIS OF REQUEST
    const menuObject = {}

    const reqData = req.body
    const reqFiles = req.files

    if (reqData.name){
        menuObject["name"] = reqData.name
    }
    if(reqData.link){
        menuObject["link"] = reqData.link 
    }

    //FIND THE TOTAL NUMBER OF MAIN MENU CONENTS
    let maxMainContent = null
    for(let key in reqData){
        if(key.startsWith("main_")){
            const num = parseInt(key.match(/\d+$/)[0])  //regular expression that matches one or more string at the end of the string
            if(num > maxMainContent){
                maxMainContent = num
            }
        }
    }
    
    //CREATE A ARRAY OF MAIN CONTENTS
    const mainContents = []
    for(let i=1;i<=maxMainContent;i++){
        const mainContent = {}
        if(reqData[`main_contentBy${i}`]){
            mainContent["contentBy"] = reqData[`main_contentBy${i}`]
        }
        if(reqData[`main_heading${i}`]){
            mainContent["heading"] = reqData[`main_heading${i}`]
        }
        if(reqData[`main_subHeading${i}`]){
            mainContent["subHeading"] = reqData[`main_subHeading${i}`]
        }
        if(reqData[`main_shortDescription${i}`]){
            mainContent["shortDescription"] = reqData[`main_shortDescription${i}`]
        }
        if(reqData[`main_longDescription${i}`]){
            mainContent["longDescription"] = reqData[`main_longDescription${i}`]
        }
        if(reqData[`main_pageLocation${i}`]){
            mainContent["pageLocation"] = reqData[`main_pageLocation${i}`]
        }
        if(reqFiles.some((file)=>{return file.fieldname === `main_images${i}`})){
            const images = reqFiles.filter((file)=>{return file.fieldname ===`main_images${i}`})
            mainContent["imagePath"] = images.map((file)=>{return file.path})
        }
        if(reqData[`main_imageDescription${i}`]){
            mainContent["imageDescription"] = reqData[`main_imageDescription${i}`]
        }
        mainContents.push(mainContent)
    }
    menuObject["contents"] = mainContents
    
    //FIND THE TOTAL NUMBER OF SUB MENU 
    let maxSubMenu = null
    for(let key in reqData){
        if(key.startsWith("subMenu_") && !key.startsWith("subMenu_content")){   
            const num = parseInt(key.match(/\d+$/)[0])
            if(num>maxSubMenu){
                maxSubMenu = num
            }
        }
    }
    
    //ARRAY OF SUBMENU
    const subMenus = []
    for(let i=1;i<=maxSubMenu;i++){
        const subMenu = {}
        if(reqData[`subMenu_name${i}`]){
            subMenu["name"] = reqData[`subMenu_name${i}`]
        }
        if(reqData[`subMenu_link${i}`]){
            subMenu["link"] = reqData[`subMenu_link${i}`]
        }
        //FIND THE TOTAL NUMBER OF CONTENTS FOR THE SUB MENU
        const subMenuInitials = `subMenu_content${i}`
        let maxSubMenuContents = null
        for(let key in reqData){
            if(key.startsWith(subMenuInitials)){
                const num = parseInt(key.match(/\d+$/)[0])
                if(num>maxSubMenuContents){
                    maxSubMenuContents = num
                }
            }
        }    

        //ARRAY OF CONTENTS FOR THAT SPECIFIC SUB MENU
        const subMenuContents = [] 
        for(let i=1;i<=maxSubMenuContents;i++){
            const subMenuContent = {}
            if(reqData[`${subMenuInitials}_contentBy${i}`]){
                subMenuContent['contentBy'] = reqData[`${subMenuInitials}_contentBy${i}`]
            }
            if(reqData[`${subMenuInitials}_heading${i}`]){
                subMenuContent["heading"] = reqData[`${subMenuInitials}_heading${i}`]
            }
            if(reqData[`${subMenuInitials}_subHeading${i}`]){
                subMenuContent["subHeading"] = reqData[`${subMenuInitials}_subHeading${i}`]
            }
            if(reqData[`${subMenuInitials}_shortDescription${i}`]){
                subMenuContent["shortDescription"] = reqData[`${subMenuInitials}_shortDescription${i}`]
            }
            if(reqData[`${subMenuInitials}_longDescription${i}`]){
                subMenuContent["longDescription"] = reqData[`${subMenuInitials}_longDescription${i}`]
            }
            if(reqData[`${subMenuInitials}_pageLocation${i}`]){
                subMenuContent["pageLocation"] = reqData[`${subMenuInitials}_pageLocation${i}`]
            }
            if(reqFiles.some((file)=>{return file.fieldname === `${subMenuInitials}_images${i}`})){
                const images = reqFiles.filter((file)=>{return file.fieldname === `${subMenuInitials}_images${i}`})
                subMenuContent["imagePath"] = images.map((file)=>{return file.path})
            }
            if(reqData[`${subMenuInitials}_imageDescription${i}`]){
                subMenuContent["imageDescription"] = reqData[`${subMenuInitials}_imageDescription${i}`]
            }
            subMenuContents.push(subMenuContent)
        }
        subMenu["contents"] = subMenuContents
        subMenus.push(subMenu)
    }
    menuObject["subMenus"] = subMenus

    //SAVE MENU OBJECT IN THE DATABASE
    Menu.create(menuObject)
    .then((savedMenu)=>{
        res.status(201).json({success:true,message:"Menu created successfully",data:savedMenu})
    })
    .catch((err)=>{
        console.log(err.message)
        res.status(500).json({success:false,message:"Error while saving menu to the database",error:err})
    })
}

module.exports = {
    getMenu,
    addMenu
}