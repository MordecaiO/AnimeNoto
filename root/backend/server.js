import express from "express";
import cors from "cors";
import users from "./routes/user.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || "";
const app = express();

app.use(cors());
app.use(express.json());
app.use("/", users);
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
