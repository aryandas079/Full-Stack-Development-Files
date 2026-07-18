import http from "http"
import RequestHandler from "./requestHandler.js"
const PORT = 3000
const server = http.createServer(RequestHandler)
server.listen(PORT, () => { console.log(`Server is listening at: http://127.0.0.1:${PORT}`) })