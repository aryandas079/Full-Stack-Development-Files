import fs from "node:fs/promises"
export default async function postRequest(statusCode, req, res) { 
    let body = "" 
    // this part is done specifically with AI 
    req.on("data", chunk => body+=chunk) 
    req.on("end", async () => { 
        try { 
            const data = JSON.parse(await fs.readFile("./data/data.json","utf8"))
            data.push(JSON.parse(body))
            await fs.writeFile(
                "./data/data.json",
                JSON.stringify(data,null,2)
            )
        } catch (err) {
            console.log(`could not fulfill the post request code: ${err}`)
        }

        res.statusCode = statusCode 
        res.setHeader("Content-Type", "application/json") 
        res.end(JSON.stringify({message:"Saved"}))
    })
} 
