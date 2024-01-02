require("dotenv").config()
const express = require("express")
const multer = require("multer")
const mongoose = require("mongoose")
const memberController = require("./controllers/memberController")
const menuController = require("./controllers/menuController")
const contentsController = require("./controllers/contentsController")

const app = express()
const port = process.env.PORT 

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static("public"))
app.use("/uploads",express.static("uploads"))

//SETTING UP MULTER FOR HANDLING FILES
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"uploads/")
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+"-"+file.originalname)
    }
})
const upload = multer({storage:storage})

//MEMBERS API
app.get("/api/v1/members",memberController.getMembers)
app.post("/api/v1/members",upload.any(),memberController.addMember)
app.put("/api/v1/members/:id",upload.any(),memberController.updateMember)
app.delete("/api/v1/member/:id",memberController.deleteMember)

//MENU API
app.get("/api/v1/menu",menuController.getMenu)
app.post("/api/v1/menu",upload.any(),menuController.addMenu)

//ROUTES TO GET CONTENTS FOR MENUS/SUB-MENUS BASED ON LINK
app.get("/:mainLink",contentsController.getMainMenuContents)
app.get("/:mainLink/:subLink",contentsController.getSubMenuContents)

//HANDLE 404 REQUEST
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

