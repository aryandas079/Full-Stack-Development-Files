import data from "../data/data.json" with {type: "json"} 

export default async function getRequest(statusCode, res, type) { 
    try { 
        res.statusCode = statusCode 
        res.setHeader("Content-Type", type) 
        res.end(JSON.stringify(data))  
    } catch(err) { 
        res.statusCode = 404 
        console.log("Not Found") 
    }
} 
