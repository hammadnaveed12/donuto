import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import authRoute from "./routes/auth.js"
import donutsRoute from "./routes/donuts.js"
import usersRoute from "./routes/users.js"
import homeRoute from "./routes/home.js"
import cookieParser from "cookie-parser";
import bodyparser from "body-parser"


const app = express();

dotenv.config();

mongoose.connection.on("connected",()=>{
  console.log("connected mongodb")
})

const connect = async () => {
try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to mongodb!")
  } catch (error) {
    throw error;
  }
};


mongoose.connection.on("disconnected",()=>{
    console.log("Disconnected mongodb")
})

app.set("view engine","ejs");
app.use(express.static("public"))
app.use(bodyparser.urlencoded({extended:false}))

app.use(bodyparser.json())
app.use(cookieParser())
app.use(express.json());

app.use("/api/auth",authRoute);
app.use("/api/donuts",donutsRoute);
app.use("/api/users",usersRoute);
app.use("/",homeRoute);

app.use((err,req,res,next)=>{
  return res.status(500).json("error from handler")
});


app.listen(8800,()=>{
    connect()
    console.log("Connected to backend! ");
})