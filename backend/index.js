import express, { Router } from "express";
import cors from 'cors';
export const api = express();

const router = Router();
router.get("/hello", (req, res) => { 
      res.json("Hello World!")
});

router.get("/uhuy", (req, res) => { 
      // res.send("Spontan uhuy!")
      res.json("Spontan uhuy!")
});

api.use(cors())
api.use("/api/", router);

api.listen(3000, () => {
   console.log('online online, online online');
})