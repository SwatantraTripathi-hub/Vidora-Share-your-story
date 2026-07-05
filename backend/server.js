import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

// Middlewares
app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test route
app.get("/api/health", (req, res) => {
  res.json({ message: "Backend is working!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});