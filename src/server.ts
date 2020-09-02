import express from "express";
import cors from "cors";
import routes from "./routes";
import path from "path";
import { errors } from "celebrate";
import "dotenv/config";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));
app.use(errors());

app.listen(3334, () => {
  console.log("🚀 Server is running on port 3334");
});
