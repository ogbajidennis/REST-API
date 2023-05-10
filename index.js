import express from "express";
import bodyparser from "body-parser";

import usersRoutes from "./routes/users.js";

const app = express();
const PORT = 5000;

app.use(bodyparser.json());

app.use("/users", usersRoutes);

app.get("/", (req, res) =>
  res.send("Hello From Homepage, this is my world Dennis-King,")
);

app.listen(PORT, () =>
  console.log(`server running on port: http://localhost:${PORT}`)
);
