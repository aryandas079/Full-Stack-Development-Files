import React from "react"
import FeedContext from "../store/feedContext"
import Home from "./home"
import Post from "./post"
import data from "../assets/sample.json"
export default function Body() {
    const [post, setPost] = React.useState(data)
    const { active, setActive } = React.useContext(FeedContext)
    return (
        <>
            {active === "home" && <Home post={post} setPost={setPost} />}
            {active === "post" && <Post post={post} setPost={setPost} />}
        </>
    )
}