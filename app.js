import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import authRoute from "./routes/auth.js"
import donutsRoute from "./routes/donuts.js"
import usersRoute from "./routes/users.js"
const app = express();
dotenv.config();

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

app.use(express.json());

app.use("api/auth",authRoute);
app.use("api/donuts",donutsRoute);
app.use("api/users",usersRoute);

mongoose.connection.on("connected",()=>{
    console.log("connected mongodb")
})


app.listen(8800,()=>{
    connect()
    console.log("Connected to backend! ");
})