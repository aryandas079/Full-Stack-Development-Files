import CalcForm from "./calcForm.js"
export default function RequestHandler(req, res) {
    if (req.url === "/") {
        res.write(`<h1>Welcome to this page</h1>`)
        return res.end()
    }
    else if (req.url === "/calculator") {
        CalcForm(req, res)
        return res.end()
    }
    else if (req.url.startsWith("/calculate-result")) {
        const url = new URL(req.url, "http://localhost:3000");
        const number1 = Number(url.searchParams.get("number1"));
        const number2 = Number(url.searchParams.get("number2"));
        const sum = number1 + number2;
        console.log(sum);
        res.writeHead(302, {
            Location: `/sum?result=${sum}`
        });
        return res.end();
    }
    else if (req.url.startsWith("/sum")) {
        const url = new URL(req.url, "http://localhost:3000");
        const result = url.searchParams.get("result");
        res.write(`<h1>Sum is: ${result}</h1>`);
        return res.end();
    }
    else {
        res.write(`<h1>Not Found</h1>`)
        res.statusCode = 404
        return res.end()
    }
}