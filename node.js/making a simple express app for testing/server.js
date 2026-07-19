import express from "express"
import home from "./middleware/home.js"
import contactUs from "./middleware/contactUs.js"
import submitAction from "./middleware/submitAction.js"
const PORT = 3000
const app = express()
app.use((req, res, next) => {
    console.log(req.path)
    console.log(req.method)
    next()
})
app.get("/", home)
app.get("/contact-us", contactUs)
app.post("/submit-details", submitAction)
app.listen(PORT, () => { console.log(`server is listening at http://127.0.0.1:${PORT}`) })