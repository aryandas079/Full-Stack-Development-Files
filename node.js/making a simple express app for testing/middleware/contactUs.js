export default function (req, res, next) {
    res.send(` 
        <form action="/submit-details" method="POST"> 
            <label for="email">Email: </label>
            <input id="email" type="email" name="email" placeholder="someone@example.com">
            <label for="password">Password: </label>
            <input id="password" type="password" name="password" placeholder="********"> 
            <input type="submit" value="Submit">
        </form>
    `)
}