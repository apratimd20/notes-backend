import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import noteRoutes from "./routes/notesRoutes.js";
import { setupSwagger } from "./swagger.js";

dotenv.config();
const app = express();


app.use(cors());
app.use(express.json());


connectDB().then(() => {
  console.log("✅ Connected to the database");
}).catch((err) => {
  console.error("Failed to connect to the database:", err);
  process.exit(1);
});

setupSwagger(app);




app.use("/api/auth", authRoutes);
app.use("/api/notes", noteRoutes);


app.get("/", (req, res) => {
  res.send("Notes App Backend is Running ");
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
