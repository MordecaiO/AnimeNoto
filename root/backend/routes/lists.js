import express from "express";
import db from "../db/connection.js";
import { ObjectId } from "mongodb";

const router = express.Router();

// 1. Get all lists for user
router.get("/:userId", async (req, res) => {
  let query = { userAuthId: req.params.userIdd.toString() };
  let collection = db.collection("lists");
  let results = await collection.find(query).toArray();

  res.send(results).status(200);
});
// 2. Create a new list for user
router.post("/:userId", async (req, res) => {
  try {
    let newList = {
      name: req.body.name,
      description: req.body.description,
      items: [],
      lastUpdated: "",
      createdAt: new Date(Date.now()).toISOString(),
      defList: true,
      userAuthId: req.params.userId.toString(),
    };
    let collection = db.collection("lists");
    let result = await collection.insertOne(newList);
    res.send(result).status(204);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error adding List");
  }
});
// 3. Delete a list
router.delete("/:listId", async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.listId) };

    const collection = db.collection("lists");
    let result = await collection.deleteOne(query);

    res.send(result).status(200);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting record");
  }
});
// 4. Edit a list name/description
router.patch("/:listId", async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.listId) };
    const updates = {
      $set: {
        name: req.body.name,
        description: req.body.description,
        lastUpdated: new Date(Date.now()).toISOString(),
      },
    };
    let collection = db.collection("lists");
    let result = await collection.updateOne(query, updates);
    res.send(result).status(200);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error editing list");
  }
});
// 5. Add an anime to a list
router.patch("/addAnime/:listId", async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.listId) };
    const newAnime = {
      mal_id: req.body.mal_id,
      title: req.body.title,
      status: req.body.status,
      synopsis: req.body.synopsis,
      genres: req.body.genres,
      images: req.body.images,
    };
    const updates = { $push: { items: newAnime } };
    let collection = db.collection("lists");
    let result = await collection.updateOne(query, updates);
    res.send(result).status(200);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error adding anime to list");
  }
});
// 6. Delete an anime from a list
router.patch("/delAnime/:listId/:mal_id", async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.listId) };
    const updates = {
      $pull: { items: { mal_id: parseInt(req.params.mal_id) } },
    };

    let collection = db.collection("lists");
    let result = await collection.updateOne(query, updates);
    res.send(result).status(200);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error deleting anime from list");
  }
});
export default router;
