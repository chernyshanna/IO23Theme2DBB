"use strict";

const express = require("express");
const pg = require("pg");
const PORT = 3000;

const app = express();
app.use(express.json());

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "IO23Theme2DB",
  password: "123qbd",
  port: 6099,
});
db.connect();

app.get("/", (req, res) => {
  res.json("Connected to server...");
});

app.post("/user", async (req, res) => {
  const { email, isBanned, password, name, login } = req.body;
  try {
    const user = await db.query(
      "INSERT INTO IO23Theme2DB.user (email, isBanned, password, name, login) values ($1, $2, $3, $4, $5) RETURNING *",
      [email, isBanned, password, name, login]
    );
    res.json(user.rows[0]);
  } catch (err) {
    res.status(404).json(err.message);
  }
});

app.get("/user", async (req, res) => {
  try {
    const users = await db.query("SELECT * FROM IO23Theme2DB.user");
    res.json(users.rows);
  } catch (err) {
    res.status(404).json(err.message);
  }
});

app.get("/user/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const user = await db.query("SELECT * FROM IO23Theme2DB.user WHERE id = $1", [id]);

    if (!user.rows.length) throw new Error("Record is not found");

    res.json(user.rows[0]);
  } catch (err) {
    res.status(404).json(err.message);
  }
});

app.patch("/user/:id", async (req, res) => {
  const id = req.params.id;
  const data = req.body;

  if (data.id) delete data.id;

  try {
    for (const [key, value] of Object.entries(data)) {
      await db.query(`UPDATE IO23Theme2DB.user SET ${key} = $1 WHERE id = $2`, [
        value,
        id,
      ]);
    }

    const user = await db.query("SELECT * FROM IO23Theme2DB.user WHERE id = $1", [id]);

    res.json(user.rows[0]);
  } catch (err) {
    res.status(404).json(err.message);
  }
});

app.delete("/user/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const user = await db.query("SELECT * FROM IO23Theme2DB.user WHERE id = $1", [id]);

    if (!user.rows.length) throw new Error("Record is not found");

    await db.query("DELETE FROM IO23Theme2DB.user WHERE id = $1", [id]);
    res.json(user.rows[0]);
  } catch (err) {
    res.status(404).json(err.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
