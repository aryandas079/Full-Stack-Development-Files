import styles from "./css modules/tasklist.module.css"
export default function Tasklist({ taskArr, handleDelete }) {
    return (
        <>
            <ul className={styles.ul}>
                {taskArr.map((item, index) =>
                    <li key={index} className={styles.list}>
                        <p>{item.name}</p>
                        <p>{item.date}</p>
                        <button onClick={() => handleDelete(index)} className={styles.btn}>Remove</button>
                    </li>
                )}
            </ul>
        </>
    )
}