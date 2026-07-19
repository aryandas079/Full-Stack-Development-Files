export default function (req, res, next) {
    let body = []
    req.on("data", (chunk) => body.push(chunk))
    req.on("end", () => {
        const bodyBuffer = Buffer.concat(body).toString()
        const params = new URLSearchParams(bodyBuffer)
        const obj = Object.fromEntries(params)
        console.log(obj)
        res.redirect("/")
    })
}