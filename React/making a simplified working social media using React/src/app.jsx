import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/header"
import Sidebar from "./components/sidebar"
import FeedContext from "./store/feedContext"
import Footer from "./components/footer"
import Body from "./components/body"
import "./app.css"

export default function App() {
    const [theme, setTheme] = React.useState("light")
    const [active, setActive] = React.useState("home")
    return (
        <>
            <div className={theme}>
                <FeedContext.Provider value={{ active, setActive }}>
                    <Header theme={theme} setTheme={setTheme} />
                    <Sidebar />
                    <Body />
                    <Footer />
                </FeedContext.Provider>
            </div>
        </>
    )
}