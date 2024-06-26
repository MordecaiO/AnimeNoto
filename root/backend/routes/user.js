import express from "express";
import db from "../db/connection.js";
import { ObjectId } from "mongodb";

const router = express.Router();

// GET a user (and all data) by auth0 user_id
router.get("/:id", async (req, res) => {
  let query = { userAuthId: req.params.id };

  let collection = db.collection("users");
  let results = await collection.findOne(query);

  res.send(results).status(200);
});

// Add a new user to the database
router.post("/", async (req, res) => {
  try {
    let newDocument = {
      name: req.body.name,
      email: req.body.email,
      userAuthId: req.body.user_id,
    };
    let collection = db.collection("users");
    let result = await collection.insertOne(newDocument);
    res.send(result).status(204);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding User");
  }
});

export default router;
