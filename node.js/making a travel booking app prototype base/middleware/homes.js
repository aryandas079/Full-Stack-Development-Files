import { addHome, getHomes } from "../utils/homesStore.js"

export default function (req, res, next) {
    const home = {
        houseName: req.body.houseName,
        houseAddress: req.body["house-address"],
        houseContact: req.body.houseContact,
        houseEmail: req.body.houseEmail,
        homeSelect: req.body.homeSelect,
        houseDetails: req.body.houseDetails
    }

    addHome(home)

    res.render("homeListing", {
        PageTitle: "Home Listings",
        homeArr: getHomes()
    })
}