import express from "express";
import db from "../db/connection.js";
import { ObjectId } from "mongodb";

const router = express.Router();

// adding a new user to the database
router.post("/", async (req, res) => {
  try {
    let newDocument = {
      name: req.body.name,
      email: req.body.email,
      authUserId: req.body.user_id,
      lists: [
        {
          name: "Want to Watch",
          description: "",
          items: [],
          lastUpdated: "",
          createdAt: "",
          defList: true,
        },
        {
          name: "Currently Watching",
          description: "",
          items: [],
          lastUpdated: "",
          createdAt: "",
          defList: true,
        },
        {
          name: "Watched",
          description: "",
          items: [],
          lastUpdated: "",
          createdAt: "",
          defList: true,
        },
      ],
    };
    let collection = db.collection("users");
    let result = await collection.insertOne(newDocument);
    res.send(result).status(204);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding User");
  }
});

// get user (and all data)
router.get("/:id", async (req, res) => {
  let query = { authUserId: req.params.id };

  let collection = db.collection("users");
  let results = await collection.findOne(query);

  res.send(results).status(200);
});

// add list

router.post("/:id/lists", async (req, res) => {
  try {
    let userQuery = { authUserId: req.params.id };
    let newList = {
      name: req.body.listName,
      description: req.body.description,
      items: [],
      lastUpdated: "",
      createdAt: new Date().toISOString,
      defList: false,
    };
    let collection = db.collection("users");
    let results = await collection.updateOne();
  } catch (error) {}
});

export default router;
