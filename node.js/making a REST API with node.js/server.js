import wild from "./database/db.js"
import http from "node:http"
import fs from "fs"
import { response, log, endpoints, queryMaker } from "./utils/functions.js"


const port = 3000

// load error page content once so it can be served on 404
const errorPage = fs.readFileSync(new URL('./error.html', import.meta.url), 'utf8')
const dataAll = await wild()

const server = http.createServer(async (req, res) => {
    log(req, fs)
    if ((req.url === "/api" || req.url === "/api/") && req.method === "GET") {
        response(res, 200, await wild())
    }
    else if ((req.url.startsWith("/api/continents/") || req.url.startsWith("/api/countries/") || req.url.startsWith("/api/location/"))
        && req.method === "GET") {
        endpoints(res, req, dataAll)
    } 
    else if (req.url.startsWith("/api?") && req.method === "GET") { 
        queryMaker(res, req, dataAll)
    } 
    else {
        res.statusCode = 404
        res.setHeader("Content-Type", "text/html")
        res.end(errorPage)
    }
})

server.listen(port, () => console.log(`server is active at ${port}`))


