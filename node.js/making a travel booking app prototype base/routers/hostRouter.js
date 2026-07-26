import express from "express"
import addHome from "../middleware/addHome.js"
import homes from "../middleware/homes.js"
const router = express.Router()
router.get("/add-home", addHome)
router.post("/homes", homes)
export default router