import express from "express"
import homeRouter from "./routes/homeRouter.js"
import login from "./routes/loginRouter.js"

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use((req, res, next) => {
    console.log(req.method)
    console.log(req.url)
    next()
})
app.use("/", homeRouter)
app.use("/login", login)

const PORT = 3000
app.listen(PORT, () => console.log(`server is listening at http://localhost:${PORT}`))