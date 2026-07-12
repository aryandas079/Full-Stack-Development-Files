import React from "react"
import Tasklist from "./tasklist"
import styles from "./css modules/body.module.css"
export default function Body() {
    const [taskArr, setTaskArr] = React.useState([])
    const [task, setTasks] = React.useState("")
    const [date, setDate] = React.useState("")
    function handleClick(event) {
        event.preventDefault()
        setTaskArr((prev) => [
            ...prev,
            {
                name: task,
                date: date,
            },
        ]);
        setTasks("")
        setDate("")
    }
    function handleDelete(indexToDelete) {
        setTaskArr((prev) =>
            prev.filter((_, index) => index !== indexToDelete)
        );
    }
    return (
        <>
            <div className={styles.forms}>
                <input className={`${styles.inputField} ${styles.textField}`} type="text" placeholder="enter task here" value={task}
                    onChange={(event) => setTasks(event.target.value)} />
                <input className={styles.inputField} type="date" value={date}
                    onChange={(event) => setDate(event.target.value)} />
                <input onClick={handleClick} className={styles.btnField} type="submit" value="Add" />
            </div>
            <Tasklist taskArr={taskArr} handleDelete={handleDelete} />
        </>
    )
}