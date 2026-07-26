import express from "express"
import path from "path"
import { fileURLToPath } from "url"
import defaultRouter from "./routers/defaultRouter.js"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express()

app.use(express.static(path.join(__dirname, "public")))
app.use(defaultRouter)

const PORT = 3000
app.listen(PORT, () => {
    console.log(`server is listening at http://127.0.0.1:${PORT}`)
})