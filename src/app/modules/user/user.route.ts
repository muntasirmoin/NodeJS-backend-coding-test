import { Router } from "express";
import { User } from "./user.interface";

const router = Router();

// create all user
router.post("/create", async (req, res) => {
  const newUser = await User.create(req.body);

  res.status(201).json(newUser);
});

export const UserRoutes = router;
