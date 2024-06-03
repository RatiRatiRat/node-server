const express = require("express");
const moment = require("moment");

const app = express();
const port = 4000;

app.use(express.json());

let users = [];

// POST /api/auth/signup
app.post("/api/auth/signup", (req, res) => {
  const { id, name, email, password } = req.body;

  if (!id || !name || !email || !password) {
    return res.status(400).send("All fields are required");
  }

  const user = {
    id,
    name,
    email,
    password,
    created: moment().format(),
  };

  users.push(user);
  res.status(201).send(user);
});

app.get("/api/users", (req, res) => {
  res.json(users);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
