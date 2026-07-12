import "./styles/body.css"
export default function () {
    return (
        <>
            <div className="action-strip">
                <form action="/submit">
                    <input type="text" placeholder="Enter Todo here" className="task-input" aria-label="enter your name of todo" />
                    <input type="date" className="date-input" aria-label="enter date of your todo here " />
                    <button className="button add" aria-label="add to yout todo">Add</button>
                </form>
            </div>
            <table className="todo-table">
                <thead>
                    <tr>
                        <th>Task Name</th>
                        <th>Date Added</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Buy Milk</td>
                        <td>4/10/2023</td>
                        <td><button className="button delete">Delete</button></td>
                    </tr>
                    <tr>
                        <td>Go to School</td>
                        <td>4/10/2023</td>
                        <td><button className="button delete">Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}