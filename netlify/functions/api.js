// YOUR_BASE_DIRECTORY/netlify/functions/api.ts

// import express, { Router } from "express";
import serverless from "serverless-http";
import { api } from "../../backend";

// const api = express();

// const router = Router();
// router.get("/hello", (req, res) => { 
//       res.send("Hello World!")
// });

// router.get("/uhuy", (req, res) => { 
//       // res.send("Spontan uhuy!")
//       res.json("Spontan uhuy!")
// });

// api.use("/api/", router);

export const handler = serverless(api);
