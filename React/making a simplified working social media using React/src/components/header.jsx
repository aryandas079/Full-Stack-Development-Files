import styles from "../css modules/header.module.css"
import { FaSun, FaMoon } from "react-icons/fa"
import React from "react"
export default function Header({ theme, setTheme }) {
    return (
        <>
            <div className={styles.headerStrip}>
                <div className={styles.inner}>
                    <ul className={styles.headerUl}>
                        <li>Home</li>
                        <li>About</li>
                    </ul>
                    <input id="theme" type="checkbox" name="theme" onChange={() => setTheme(theme === "light" ? "dark" : "light")} hidden />
                    <label htmlFor="theme">{theme === "dark" ? <FaSun /> : <FaMoon />}</label>
                </div>
            </div>
        </>
    )
}