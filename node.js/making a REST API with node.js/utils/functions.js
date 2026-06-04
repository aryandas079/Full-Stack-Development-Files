export function response(res, statusCode, output) {
    res.statusCode = statusCode
    res.setHeader("Content-Type", "application/json")
    res.end(JSON.stringify(output))
}

export function log(req, fs) {
    const log = `${new Date().toLocaleString()} and ${req.url} and ${req.method}`
    fs.appendFile("log.txt", `${log}\n`, (err) => {
        if (err) console.log(err)
    })
}

export function endpoints(res, req, dataAll) {
    const parts = req.url.split("/")
    const endpoint = parts[2]
    const value = parts[3] 

    let filteredData = []

    if (endpoint === "countries" && value) {
        filteredData = dataAll.filter(data => data.country.toLowerCase() === value.toLowerCase())
    } else if (endpoint === "continents" && value) {
        filteredData = dataAll.filter(data => data.continent.toLowerCase() === value.toLowerCase())
    } else if (endpoint === "location" && value) {
        filteredData = dataAll.filter(data => data.location.toLowerCase() === value.toLowerCase())
    }

    response(res, 200, filteredData)
} 

export function queryMaker(res, req, dataAll) { 
    // now making the query string work  
    const urlObj = new URL(req.url, `http://${req.headers.host}`) 
    const queryObj = Object.fromEntries(urlObj.searchParams) 

    // this part is copied from AI 
    Object.entries(queryObj).forEach(([key,value])=>{
        dataAll=dataAll.filter(data=>data[key]?.toLowerCase()===value.toLowerCase())
    }) 
    
    response(res, 200, dataAll)

} 
