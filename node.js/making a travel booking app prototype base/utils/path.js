import { fileURLToPath } from "url"
import path from "path"
export default function (app) {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)
    app.set("view engine", "ejs")
    app.set("views", path.join(__dirname, "..", "views"))
}