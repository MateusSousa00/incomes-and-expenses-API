import express from "express";
import routes from "./routes/index.js";
import db from "./config/dbConnect.js";

db.on("error", console.log.bind(console, "Connection Error."));
db.once("open", () => {
  console.log("Connected to database successfully.");
});

const app = express();
app.use(express.json());
routes(app);

export default app;
