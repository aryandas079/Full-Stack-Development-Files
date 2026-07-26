export default function (req, res, next) {
    console.log(req.body)
    const homeArr = [req.body]
    res.render("homeListing", {
        PageTitle: "Home Listings",
        homeArr
    })
}