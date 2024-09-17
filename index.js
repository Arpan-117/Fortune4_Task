import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db.js";
// import Product from "./models/model.js";
import paramRoutes from "./routes/paramRoutes.js"


dotenv.config();
connectDB();

const app = express();

app.use(cors);
app.use(express.json());

app.use("/api", paramRoutes);

// const item = new Product({
//     title: 'CTS4UN',
//     desc: '4 sq.mm Standard Feed Through Terminal Blocks',
//     body: "Some long description",
//   });

//   await item.save();

app.get("/", (req, res) => {
    res.send("<h1>Server running</h1>")
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
});