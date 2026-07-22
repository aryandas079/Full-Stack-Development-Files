import path from "path"
import rootDir from "../utils/pathName.js"

export default (req, res, next) => {
    res.sendFile(path.join(rootDir, "views", "homePage.html"))
}