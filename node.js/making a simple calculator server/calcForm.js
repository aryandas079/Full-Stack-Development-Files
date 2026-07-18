export default function CalcForm(req, res) {
    res.write("<h1>Calculator</h1>");
    res.write('<form action="/calculate-result" method="GET">');
    res.write('<input type="number" name="number1" placeholder="Enter first number">');
    res.write('<input type="number" name="number2" placeholder="Enter second number">');
    res.write('<input type="submit" value="Add">');
    res.write("</form>");
}