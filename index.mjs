import "./loadEnv.mjs";
import rooms from "./routes/rooms.mjs";
import cors from "cors";
import express from "express";

const app = express()
const port = process.env.PORT || 3000;

app.use(cors({origin: ['http://localhost:3000', 'http://127.0.0.1:3000']}));
app.use(express.json());
app.use("/rooms", rooms);

app.use((err, _req, res, next) => {
  res.status(500).send("Uh oh! An unexpected error occured.")
})

app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening on port ${port}`)
 })