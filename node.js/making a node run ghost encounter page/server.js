import http from "node:http" 
import fs from "node:fs" 
import makeLog from "./utils/makeLog.js" 
import staticFile from "./utils/staticFiles.js" 
import get from "./handlers/getRequest.js" 
import post from "./handlers/postRequest.js" 

const PORT = 8000
const server = http.createServer(async (req, res) => { 
    // creating a log file for each server entry 
    makeLog(req, fs) 
    // now making the API 
    // for get request 
    if (req.url.startsWith("/api") && req.method === "GET") { 
        return await get(200, res, "application/json")
    }
    else if (req.url.startsWith("/api") && req.method === "POST") { 
        return await post(201, req, res) 
    } 
    // hosting the files with staticFiles 
    await staticFile(req, res) 
}) 

server.listen(8000, "127.0.0.1", () => { 
    console.log(`server is live at PORT: ${PORT}`)
}) 
