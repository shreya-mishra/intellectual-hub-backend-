import express from "express";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddlewares.js";
import dotenv from "dotenv";
import path from "path";
dotenv.config();
connectDB();

const app = express();

// GET Request to "/" route
app.use(express.json());

app.use("/", console.log("/"));
app.use("/api", console.log("/api"));
app.use("/api/user", userRoutes);
// -----------------------DEPLOYMENT----------------------------
// const __dirname = path.resolve();
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "/intellectual-hub/build")));
//   app.get("*", (req, res) => {
//     res.sendFile(
//       path.resolve(__dirname, "intellectual-hub", "build", "index.html")
//     );
//   });
// } else {
//   app.get("/", (req, res) => {
//     res.send("API is running...");
//   });
// }
// -----------------------DEPLOYMENT----------------------------
app.use(notFound);
app.use(errorHandler);

app.listen(
  process.env.PORT,
  console.log(`Server running on PORT ${process.env.PORT}..`.bold)
);
