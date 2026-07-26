import express from "express"
import addHome from "../middleware/addHome.js"
const router = express.Router()
router.get("/add-home", addHome)
export default router