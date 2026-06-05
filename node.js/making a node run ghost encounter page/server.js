import http from "node:http" 
import fs from "node:fs" 
import makeLog from "./utils/makeLog.js" 
import staticFile from "./utils/staticFiles.js" 
import get from "./handlers/getRequest.js"

const PORT = 8000
const server = http.createServer(async (req, res) => { 
    // creating a log file for each server entry 
    makeLog(req, fs) 
    // now making the API 
    // for get request 
    if (req.url.startsWith("/api") && req.method === "GET") { 
        return await get(200, res, "application/json")
    }

    // hosting the files with staticFiles 
    await staticFile(req, res) 
}) 

server.listen(8000, "127.0.0.1", () => { 
    console.log(`server is live at PORT: ${PORT}`)
}) 



// /fix all the files which are open with minimal changed and remember to keep the original code same and only correct mistakes