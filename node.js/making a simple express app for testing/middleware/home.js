export default function (req, res, next) {
    res.send(` 
        <p style="font-family: Arial, sans-serif;">this is the response</p> 
        <a href="/contact-us" style="text-decoration: none; color: red">Contact Us</a>
    `)
}