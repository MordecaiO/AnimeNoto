import express from "express";
import db from "../db/connection.js";
import { ObjectId } from "mongodb";

const router = express.Router();

// GET a user (and all data) by auth0 user_id
router.get("/:id", async (req, res) => {
  let query = { authUserId: req.params.id };

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

// Add a new list to user document
router.patch("/addList/:userId", async (req, res) => {
  try {
    // change to authId
    let userFilter = { _id: new ObjectId(req.params.userId) };
    let newList = {
      name: req.body.listName,
      description: req.body.description,
      items: [],
      lastUpdated: "",
      createdAt: new Date().toISOString,
      defList: false,
    };
    let updateDoc = { $push: { lists: newList } };
    let collection = db.collection("users");
    let results = await collection.updateOne(userFilter, updateDoc);
    res.send(results).status(204);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding List");
  }
});

// Edit a list name and/or description
router.patch("/editList/:userId/:listId", async (req, res) => {
  try {
    let listIdToEdit = parseInt(req.params.listId);
    // change to authId
    let userFilter = {
      _id: new ObjectId(req.params.userId),
    };
    let updateDoc = {
      $set: {
        "lists.$[elem].listName": req.body.listName,
        "lists.$[elem].description": req.body.description,
      },
    };
    let arrayFilters = { arrayFilters: [{ "elem.listId": listIdToEdit }] };
    let collection = db.collection("users");
    let results = await collection.updateOne(
      userFilter,
      updateDoc,
      arrayFilters
    );
    res.send(results).status(204);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating List");
  }
});

// Delete a list from a user document
router.patch("/delList/:userId/:listId", async (req, res) => {
  try {
    // change to authId
    let userFilter = { _id: new ObjectId(req.params.userId) };
    let listIdToDelete = parseInt(req.params.listId);
    let updateDoc = { $pull: { lists: { listId: listIdToDelete } } };
    let collection = db.collection("users");
    let results = await collection.updateOne(userFilter, updateDoc);
    res.send(results).status(204);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting List");
  }
});

// Add an anime to a list
router.patch("/addAnime/:userId/:listId", async (req, res) => {
  try {
    // change to authId
    let userFilter = {
      _id: new ObjectId(req.params.userId),
    };
    let listIdToAddAnime = parseInt(req.params.listId);
    let newAnime = {
      mal_id: req.body.mal_id,
      title: req.body.title,
      status: req.body.status,
      synopsis: req.body.synopsis,
      genres: req.body.genres,
      images: req.body.images,
    };
    let updateDoc = { $push: { "lists.$[elem].items": newAnime } };
    let arrayFilters = { arrayFilters: [{ "elem.listId": listIdToAddAnime }] };
    let collection = db.collection("users");
    let results = await collection.updateOne(
      userFilter,
      updateDoc,
      arrayFilters
    );
    res.send(results).status(204);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding Anime");
  }
});

// Delete an anime from a list
router.patch("/delAnime/:userId/:listId", async (req, res) => {
  try {
    // change to authId
    let userFilter = {
      _id: new ObjectId(req.params.userId),
    };
    let listIdToDelAnime = parseInt(req.params.listId);

    let updateDoc = {
      $pull: {
        items: {
          $elemMatch: { mal_id: req.body.mal_id },
        },
      },
    };
    let collection = db.collection("users");
    let results = await collection.updateOne(userFilter, updateDoc);
    res.send(results).status(204);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting Anime");
  }
});

export default router;
