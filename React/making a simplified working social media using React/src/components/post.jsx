import styles from "../css modules/post.module.css"
import React from "react"
export default function Post({ post, setPost }) {
    const [name, setName] = React.useState("")
    const [text, setText] = React.useState("")
    function handleSubmit(event) {
        event.preventDefault()
        setPost(prevPosts => [
            ...prevPosts,
            { name: name, content: text }
        ])
        setName("")
        setText("")
    }
    return (
        <div className={styles.body}>
            <form onSubmit={handleSubmit} className={styles.formElement}>
                <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="enter your name" />
                <textarea value={text} id="content" placeholder="what's on your mind?" onChange={(event) => setText(event.target.value)}></textarea>
                <button type="submit">Post</button>
            </form>
        </div>
    )
}