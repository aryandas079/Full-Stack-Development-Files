import styles from "../css modules/footer.module.css"
export default function Footer() {
    const date = new Date
    return (
        <div className={styles.footerMain}>
            <p>&copy; social media {date.getFullYear()}</p>
        </div>
    )
}