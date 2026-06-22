import express from "express";
import healthRouter from "./routes/health.routes";
import { notFound } from "./middleware/notFound";
import { errorHandler } from "./middleware/errorHandler";

const app = express();

app.use(express.json());

app.use("/api/health", healthRouter);

app.use(notFound);
app.use(errorHandler);

export default app;