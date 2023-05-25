import "./loadEnv.mjs";
import rooms from "./routes/rooms.mjs";
import cors from "cors";
import express from "express";

const app = express()
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/rooms", rooms);

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  // Pass to next layer of middleware
  next();
});

app.use((err, _req, res, next) => {
  res.status(500).send("Uh oh! An unexpected error occured.")
})

app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening on port ${port}`)
 })