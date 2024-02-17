import  dotenv  from "dotenv";
import express from "express";
import router from "./routes/Auth.js";
import connectMongoDB from "./db/connectMongoDB.js";
import messageRouter from "./routes/message.route.js";
import userRoute from "./routes/user.route.js"
import cookieParser from "cookie-parser";
const app = express();
app.use(express.json());

dotenv.config();
app.use(cookieParser())




// app.get("/", (req, res) => {  
//   res.send("Welcome to Home Page");
// });


//MIDDLEWARE  
app.use("/api/auth", router );
app.use("/api/messages/",messageRouter);
app.use("/api/users", userRoute);







const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
  connectMongoDB();
  console.log(`Server is running on port ${PORT}`);
})



