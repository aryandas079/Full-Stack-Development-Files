import express from "express"
import fs from "fs"
const router = express.Router()
router.use((req, res, next) => {
    const date = new Date()
    console.log(req.url, req.method)
    fs.appendFile("log.txt", date.toLocaleString() + "\n", (err) => {
        if (err) {
            console.log(err)
        }
    })
    next()
})
export default router