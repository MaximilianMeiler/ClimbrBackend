import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();
let collection = await db.collection("rooms");

router.get("/", async (req, res) => {
  let collection = await db.collection("rooms");
  let results = await collection.find({})
    .toArray();

  res.send(results).status(200);
});

// router.patch("/friendadd/:id1/:id2", async (req, res) => {
//   let collection = await db.collection("rooms");
//   let user = {_id: new ObjectId(req.params.id1)};
//   let result = await collection.findOne(user);

//   if (!result) res.send("Not found").status(404);
//   else {
//     const newFriends = result.data.friends.concat([req.params.id2])
//     const update = {
//       $set: {
//         "data.friends": newFriends
//       }
//     }
//     let updatedResult = await collection.updateOne(user, update);
//     res.send(updatedResult).status(200);
//   }
// });

// router.patch("/reqadd/:id1/:id2", async (req, res) => {
//   let collection = await db.collection("rooms");
//   let user = {_id: new ObjectId(req.params.id1)};
//   let result = await collection.findOne(user);

//   if (!result) res.send("Not found").status(404);
//   else {
//     const newReqs = result.data.requests.concat([req.params.id2])
//     const update = {
//       $set: {
//         "data.requests": newReqs
//       }
//     }
//     let updatedResult = await collection.updateOne(user, update);
//     res.send(updatedResult).status(200);
//   }
// });

// router.patch("/frienddel/:id1/:id2", async (req, res) => {
//   let collection = await db.collection("rooms");
//   let user = {_id: new ObjectId(req.params.id1)};
//   let result = await collection.findOne(user);

//   if (!result) res.send("Not found").status(404);
//   else {
//     const newFriends = result.data.friends.filter(f => f != req.params.id2)
//     const update = {
//       $set: {
//         "data.friends": newFriends
//       }
//     }
//     let updatedResult = await collection.updateOne(user, update);
//     res.send(updatedResult).status(200);
//   }
// });

// router.patch("/reqdel/:id1/:id2", async (req, res) => {
//   let collection = await db.collection("rooms");
//   let user = {_id: new ObjectId(req.params.id1)};
//   let result = await collection.findOne(user);

//   if (!result) res.send("Not found").status(404);
//   else {
//     const newReqs = result.data.requests.filter(r => r != req.params.id2)
//     const update = {
//       $set: {
//         "data.requests": newReqs
//       }
//     }
//     let updatedResult = await collection.updateOne(user, update);
//     res.send(updatedResult).status(200);
//   }
// });

// router.get("/object/:id", async (req, res) => {
//   let collection = await db.collection("rooms");
//   let query = {_id: new ObjectId(req.params.id)};
//   let result = await collection.findOne(query);

//   if (!result) res.send("Not found").status(404);
//   else res.send(result).status(200);
// });

// router.get("/:id", async (req, res) => {
//   let collection = await db.collection("rooms");
//   let query = {"data.deviceID": req.params.id};
//   let result = await collection.findOne(query);

//   if (!result) res.send("Not found").status(404);
//   else res.send(result).status(200);
// });

// router.post("/", async (req, res) => {
//   let collection = await db.collection("rooms");
//   let newDocument = req.body;
//   let result = await collection.insertOne(newDocument);
//   res.send(result).status(204);
// });

export default router;