import express, { Request, Response } from "express";
import cors from "cors";
import { router } from "./app/routes";

const app = express();

app.use(express.json());

// app.use(cors());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

// routes -> index.ts
app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Server is running successfully. Welcome to the Server!",
  });
});

export default app;
