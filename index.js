const express = require("express");
require("dotenv").config();
const path = require("path");
const { Pool } = require("pg");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
app.use(cors());

app.use(express.json());

const pool = new Pool({
  database: process.env.DATABASE_NAME,
  host: process.env.DATABASE_HOST,
  password: process.env.DATABASE_PASSWORD,
  user: process.env.DATABASE_USER,
  port: process.env.DATABASE_PORT,
});

const connectDB = async () => {
  try {
    await pool.connect();
    const res = await pool.query("SELECT * FROM users");
    console.log("Connected to postgres");
  } catch (err) {
    console.log("Not connected to postgres");
  }
};
connectDB();

app.post("/login", async (req, res) => {
  const login = await pool.query(
    "SELECT id, username, password, isAdmin FROM users u WHERE u.username=$1 AND u.password=$2",
    [req.body.data.username, req.body.data.password]
  );

  if (login.rowCount > 0 && req.body.data.password === login.rows[0].password) {
    console.log(" found");
    res.json({
      loggedIn: true,
      username: req.body.data.username,
      isAdmin: login.rows[0].isadmin,
    });
  } else {
    console.log("not found");
    res.json({ loggedIn: false, status: "Wrong username or password" });
  }
});

app.post("/addUser", async (req, res) => {
  const howManyExisting = await pool.query(
    "SELECT username from users WHERE username=$1",
    [req.body.data.username]
  );
  if (howManyExisting.rowCount === 0) {
    const newUserQuery = await pool.query(
      "INSERT INTO users(username, password, email, firstname, lastname) values($1,$2,$3,$4,$5) RETURNING username",
      [
        req.body.data.username,
        req.body.data.password,
        req.body.data.email,
        req.body.data.firstName,
        req.body.data.lastName,
      ]
    );
    res.json({
      loggedIn: true,
      username: req.body.data.username,
      isAdmin: false,
    });
  } else {
    res.json({ loggedIn: false, status: "Username taken" });
  }
});

app.get("/getUsers", async (req, res) => {
  const allUsers = await pool.query("SELECT * from users");
  if (allUsers.rowCount > 0) {
    res.json({
      allUsers,
    });
  } else {
    res.json({ status: "Cannot get users" });
  }
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
