import express from "express";
const router = express.Router();
import AllData from "../models/alldata.js";
import verifyToken from "../middlewere/verifyToken.js";
router.post("/", verifyToken ,  async (req, res) => {
   console.log(req.body);
   const user = new AllData(req.body);
   const newUser = await user.save()
   res.status(200).send({messege: "user added sucessfully" , newUser})
});
export default router;
