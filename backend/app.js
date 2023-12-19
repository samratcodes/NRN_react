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


app.get("/api/v1/members", async (req,res)=>{
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

app.post("/members",(req,res)=>{
    const {name,email,position} = req.body 
    res.json({name,email,position})
    console.log({name,email,position})
})

app.post("/image",upload.single("image"),(req,res)=>{
    //res.send("checking if route is working")
    const name = req.file.filename
    const path = req.file.path
    const description = req.body.description 
    console.log({
        name,path,description
    })
    res.json({
        name,path,description
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


