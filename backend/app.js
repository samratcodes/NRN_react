require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const memberRoutes = require("./routes/memberRoutes")
const menuRoutes = require("./routes/menuRoutes")
const contentRoutes = require("./routes/contentRoutes")
const cors = require("cors")

const app = express()
const port = process.env.PORT 

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static("public"))
app.use("/uploads",express.static("uploads"))

//ROUTES
app.use("api/v1/member",memberRoutes)
app.use("/api/v1/menu",menuRoutes)
app.use(contentRoutes)

//HANDLE 404 REQUEST
app.use((req,res)=>{
    res.status(404).send("This is 404 Error.")
})

//MAKING CONNECTIONS WITH DATABASE
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

