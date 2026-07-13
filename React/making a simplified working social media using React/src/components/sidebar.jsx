import { FaUserCircle } from "react-icons/fa"
import React from "react"
import styles from "../css modules/sidebar.module.css"
import FeedContext from "../store/feedContext"

export default function Sidebar() {
    const { active, setActive } = React.useContext(FeedContext)
    return (
        <>
            <div className={styles.bar}>
                <div className={styles.barIcons}>
                    <div className={styles.sidebarUl}>
                        <input type="radio" name="feed" id="home" hidden checked={active === "home"} onChange={() => setActive("home")} />
                        <label htmlFor="home" className={active === "home" ? styles.active : ""}>Home</label>
                        <input type="radio" name="feed" id="posts" hidden checked={active === "post"} onChange={() => setActive("post")} />
                        <label htmlFor="posts" className={active === "post" ? styles.active : ""}>Posts</label>
                    </div>
                </div>
                <div className={styles.user}>
                    <FaUserCircle />
                    <p>User</p>
                </div>
            </div>
        </>
    )
}