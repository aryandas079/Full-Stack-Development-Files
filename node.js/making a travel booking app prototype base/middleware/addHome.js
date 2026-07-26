import express from "express"
export default function (req, res, next) {
    res.render("addHome", {
        PageTitle: "Add Home"
    })
}