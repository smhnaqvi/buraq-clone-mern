import { Router, Request, Response } from "express";
import mongoose from "mongoose";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  const dbState = mongoose.connection.readyState;
  const stateMap: Record<number, string> = {
    0: "disconnected",
    1: "connected",
    2: "connecting",
    3: "disconnecting",
  };

  const dbStatus = stateMap[dbState] ?? "unknown";

  res.status(dbState === 1 ? 200 : 503).json({
    status: dbState === 1 ? "ok" : "degraded",
    time: new Date().toISOString(),
    database: dbStatus,
  });
});

export default router;