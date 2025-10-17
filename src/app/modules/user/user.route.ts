import { Router } from "express";

import { StatusCodes } from "http-status-codes";
import { User } from "../user/user.interface";

const router = Router();

// create all user
router.post("/create", async (req, res) => {
  const newUser = await User.create(req.body);

  res.status(201).json(newUser);
});

// get all user
router.get("/all", async (req, res) => {
  const result = await User.find();
  // const resultGte = await User.find({ age: { $gt: 18 } });
  // const resultLte = await User.find({ age: { $lte: 18 } });
  // const resultBetween = await User.find({ age: { $gt: 18, $lt: 20 } });

  // sort
  // const resultSort = await User.find().sort({ age: 1 });

  // skip & limit
  // const resultSkip = await User.find().skip(5).limit(2);

  // projection select field
  // Include only name and age
  // const result = await User.find({}, { name: 1, age: 1 });

  // Exclude email
  // const result = await User.find({}, { email: 0 });

  // map
  const users = await User.find();
  // const result = users.map((user) => ({
  //   name: user.name.toUpperCase(),
  //   email: user.email,
  //   age: user.age,
  // }));

  // filter
  // const result = users.filter((user) => user.age < 18);

  res.status(200).json(result);
});

// count

router.get("/count", async (req, res) => {
  const result = await User.countDocuments();

  res.status(200).json({ result });
});

// get by field

router.get("/field", async (req, res) => {
  const result = await User.findOne({ name: "Ali Khan" });

  res.status(200).json(result);
});

// get user by id

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const result = await User.findById(id);

  res.status(200).json(result);
});

export const UserRoutes = router;
