import React from "react"
import Header from "./components/header"
import Body from "./components/body"
import styles from "./components/css modules/app.module.css"

export default function App() {
    return (<>
        <div className={styles.body}>
            <Header />
            <Body />
        </div>
    </>
    )
}