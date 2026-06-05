export default function logData(req, fs) { 
    fs.appendFile("log.txt", `${new Date().toLocaleString()} and ${req.method}\n`, (err)  => { 
        if (err) { 
            console.log(err)
        }
    })
} 
