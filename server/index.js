import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import authRoutes from "./routes/auth.js";
// CONFIG
dotenv.config();
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));

app.use(cors());

// ROUTES
app.use("/auth", authRoutes);
app.get("/api/test", (req, res) => {
  // Handle the request and send a response
  res.json({ message: "Backend is working!" });
});
// MONGOOSE & STARTUP
const PORT = process.env.PORT || 6001;

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Listening to PORT ${PORT}`));
  })
  .catch((error) => {
    console.log(error.message);
  });
