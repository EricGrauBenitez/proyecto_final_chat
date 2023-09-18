import "dotenv/config";
import express from "express";
import cors from "cors";
import router from "./routes";

// init
const app = express();

// settings
const PORT = process.env.PORT || 4000;
app.set("port", PORT);

// middlewares
app.use((_, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
app.use(router);

export default app;
