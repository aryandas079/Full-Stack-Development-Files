import express from "express"
import login from "../middleware/login.js"
const router = express.Router()
export default function () {
    router.get("/login", login)
}