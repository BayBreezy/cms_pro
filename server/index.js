import express from "express";
import cors from "cors";
import "dotenv/config";
import routes from "./routes/index.js";
// Import mongo connection
import "./db/mongo.js";

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);

// Error handling
app.use((err, req, res, next) => {
  let code = (err.statusCode >= 400 && err.statusCode) || 500;
  res.status(code).json({ message: err.message, error: err });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
