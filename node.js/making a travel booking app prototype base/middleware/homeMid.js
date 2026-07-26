import { getHomes } from "../utils/homesStore.js"

export default function (req, res, next) {
    res.render("home", {
        PageTitle: "TravelExp",
        homeArr: getHomes()
    })
}