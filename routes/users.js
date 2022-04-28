import express from "express";
import { v4 as uuidv4 } from "uuid";

//import usersRoutes from "./routes/users.js";

const router = express.Router();

const users = [];

//all routes in here are starting with /users

router.get("/", (req, res) => {
  res.send(users);
});

router.post("/", (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuidv4() });

  res.send(`user with the  name ${user.firstName} added to the database!`);
});
//users/ any id eg 2 => req.params{ id:2}

router.get("/:id", (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id === id);
  //41:41 time..
  res.send(foundUser);
});

export default router;
