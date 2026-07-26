import express from "express"
import path from "path"
import { fileURLToPath } from "url"
import defaultRouter from "./routers/defaultRouter.js"
import homeRouter from "./routers/homeRouter.js"
import hostRouter from "./routers/hostRouter.js"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express()

app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({ extended: true }))
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))
app.use(defaultRouter)
app.use("/", homeRouter)
app.use("/host", hostRouter)

const PORT = 3000
app.listen(PORT, () => {
    console.log(`server is listening at http://127.0.0.1:${PORT}`)
})