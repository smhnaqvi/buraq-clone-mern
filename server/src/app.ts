import express, { NextFunction, RequestHandler } from "express";
import cors from "cors";

import { notFound } from "./middleware/notFound";
import { errorHandler } from "./middleware/errorHandler";
import cookieParser from "cookie-parser";
import healthRouter from "./routes/health.routes";
import authRouter from "./routes/auth.routes";
import categoryRouter from "./routes/category.routes";
import productRouter from "./routes/product.routes";
import orderRouter from "./routes/order.routes";
import { connectDB } from "./config/db";

// Single promise — created once when module loads, reused on every request
const dbConnection = connectDB();


const app = express();

app.use(express.json());

app.use(cookieParser());

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:3001",
    credentials: true,
  })
);

// Await the SAME promise on every request — after first resolve, instant
const dbMiddleware: RequestHandler = (req, res, next) => {
  dbConnection.then(() => next()).catch(next);
};

app.use(dbMiddleware);


app.use("/api/health", healthRouter);
app.use("/api/auth", authRouter);
app.use("/api/categories", categoryRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);

app.use(notFound);
app.use(errorHandler);

export default app;