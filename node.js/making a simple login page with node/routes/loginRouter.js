import express from "express"
import login from "../middleware/login.js"
const router = express.Router()
router.get("/", login)

router.post("/", (req, res) => {
    console.log(req.body)
    const { email, password } = req.body
    console.log(email)
    console.log(password)
    res.send(`<p style="font-family: Arial, Helvetica, sans-serif; 
    font-size: 1.5rem">Form submitted</p>`)
})
export default router