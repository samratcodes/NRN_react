require("dotenv").config()
const express = require("express")
const multer = require("multer")
const mongoose = require("mongoose")
const Menu = require("./models/menu")
const Member = require("./models/member")

const app = express()
const port = process.env.PORT 

app.use(express.json())
app.use(express.urlencoded({extended:false}))

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"uploads/")
    },
    filename:(req,file,cb)=>{
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})

const upload = multer({storage:storage})

app.get("/",(req,res)=>{
    res.json({name:"lionel messi"})
})


app.get("/api/v1/menu",async (req,res)=>{
    Menu.find()
    .then((data)=>{
        if(data.length > 0){
            res.status(200).json({success:true,data})
        }else{
            res.status(404).json({success:false,message:"Menu not found"})
        }
    })
    .catch((err)=>{
        res.status(500).json({success:false,message:"Internal Server Error"})
    })
})


app.get("/api/v1/members",(req,res)=>{
    Member.find()
    .then((members)=>{
        if(members.length>0){
            res.status(200).json({success:true,data:members})
        }else{
            res.status(404).json({success:false,message:"No members found"})
        }
    })
    .catch((err)=>{
        res.status(500).json({success:false,message:"Internal Server Error"})
    })
})

app.post("/api/v1/members", (req,res)=>{
    Member.create(req.body)
    .then((data)=>{
        res.status(201).json({success:true,message:"Members added successfully"})
    })
    .catch((err)=>{
        res.status(500).json({success:false,message:"Internal Server Error"})
    })
})

app.post("/api/v1/add_menu",upload.fields([{name:"mainMenuImages"},{name:"subMenuImages"}]),(req,res)=>{  
    const images = req.files["mainMenuImages"] || []
    const imagePath = images.map((image)=>{return image.path})
    const imageName = images.map((image)=>{return image.filename})

    const subImages = req.files["subMenuImages"] || []
    const subImagePath = subImages.map((image)=>{return image.path})
    const subImageName = subImages.map((image)=>{return image.filename})
    
    const menuData = {
        name:"Home",
        link: "/home",
        content: {
            heading:"Home",
            subHeading:"This is home us page",
            shortDescription:"Various things related to the page are added in the about us page",
            longDescription:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consequuntur ab nam similique? Ab at dignissimos aut dolor fugiat exercitationem tempora, earum pariatur asperiores culpa. Commodi excepturi tempore labore perspiciatis!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus adipisci ducimus corporis iure! Totam quasi earum aliquam ullam ea reprehenderit consequuntur consectetur beatae magnam at. Dolorem nulla repellendus possimus! Esse.`,
            pageLocation:"A",
            imagePath:subImagePath,
            imageName:subImageName,
        },
        subMenu:[
            {
                heading:"Home",
                subHeading:"This is home us page",
                shortDescription:"Various things related to the page are added in the about us page",
                longDescription:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consequuntur ab nam similique? Ab at dignissimos aut dolor fugiat exercitationem tempora, earum pariatur asperiores culpa. Commodi excepturi tempore labore perspiciatis!
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus adipisci ducimus corporis iure! Totam quasi earum aliquam ullam ea reprehenderit consequuntur consectetur beatae magnam at. Dolorem nulla repellendus possimus! Esse.`,
                pageLocation:"A",
                imagePath:subImagePath,
                imageName:subImageName,
            },
            {
                heading:"Home",
                subHeading:"This is home us page",
                shortDescription:"Various things related to the page are added in the about us page",
                longDescription:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consequuntur ab nam similique? Ab at dignissimos aut dolor fugiat exercitationem tempora, earum pariatur asperiores culpa. Commodi excepturi tempore labore perspiciatis!
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus adipisci ducimus corporis iure! Totam quasi earum aliquam ullam ea reprehenderit consequuntur consectetur beatae magnam at. Dolorem nulla repellendus possimus! Esse.`,
                pageLocation:"A",
                imagePath:subImagePath,
                imageName:subImageName, 
            },
            {
                heading:"Home",
                subHeading:"This is home us page",
                shortDescription:"Various things related to the page are added in the about us page",
                longDescription:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consequuntur ab nam similique? Ab at dignissimos aut dolor fugiat exercitationem tempora, earum pariatur asperiores culpa. Commodi excepturi tempore labore perspiciatis!
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus adipisci ducimus corporis iure! Totam quasi earum aliquam ullam ea reprehenderit consequuntur consectetur beatae magnam at. Dolorem nulla repellendus possimus! Esse.`,
                pageLocation:"A",
                imagePath:imagePath,
                imageName:imageName,
            }
        ]
    }
    res.json({
        message:"Add menu link",
        data:menuData
    })
})

app.use((req,res)=>{
    res.status(404).send("This is 404 Error.")
})


const connectionString = `mongodb+srv://nrnDb:${process.env.DB_PASSWORD}@cluster0.ou1m2s6.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(connectionString)
.then(()=>{
    console.log("connected to database successfully")
    app.listen(port,()=>{
        console.log("Successfully started server on port : ",port)
    })
})
.catch((err)=>{
    console.log("err")
})


//http://127.0.0.1:7000/api/v1/members