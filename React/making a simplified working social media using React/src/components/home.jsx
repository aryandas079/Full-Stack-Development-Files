import styles from "../css modules/home.module.css"
export default function Home({ post, setPost }) {
    return (
        <>
            <div className={styles.homeMain}>
                {post.map((item, index) => {
                    return (
                        <div key={index} className={styles.postContainer}>
                            <p className={styles.name}>{item.name}</p>
                            <p className={styles.content}>{item.content}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}