import fs from "node:fs/promises" 
import path from "node:path" 

const types={
        '.html':'text/html',
        '.css':'text/css',
        '.js':'text/javascript',
        '.png':'image/png',
        '.jpg':'image/jpeg',
        '.jpeg':'image/jpeg',
        '.svg':'image/svg+xml'
    }

export default async function(req, res) { 
    const filePath = path.join("public", req.url === "/" ? "index.html" : req.url) 
    try { 
        const data = await fs.readFile(filePath) 
        const ext = path.extname(filePath) 
        res.statusCode = 200 
        res.setHeader("Content-Type", `${types[ext]||'text/plain'}`)
        res.end(data)
    } catch(err) { 
        res.statusCode = 404 
        res.end("Not Found")
    }
} 
