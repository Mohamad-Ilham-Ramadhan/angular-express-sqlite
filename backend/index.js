import express, { Router } from "express";
export const api = express();

const router = Router();
router.get("/hello", (req, res) => { 
      res.send("Hello World!")
});

router.get("/uhuy", (req, res) => { 
      // res.send("Spontan uhuy!")
      res.json("Spontan uhuy!")
});

api.use("/api/", router);