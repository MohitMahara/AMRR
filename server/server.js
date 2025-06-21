import express, { json } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import itemRoutes from "./routes/itemRoutes.js";

const app = express();

dotenv.config();
connectDB();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8000;


app.use("/api/v1/items", itemRoutes);



app.get("/", (req, res) => {
   res.send("Welcome to the server");
})

app.listen(PORT, () =>{
    console.log(`Server is listening at port ${PORT}`);
})

