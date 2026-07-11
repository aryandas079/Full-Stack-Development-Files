import foodItems from "./arrayFood"
const listClass = {
    listStyle: "none",
    fontSize: "1.5rem",
    fontFamily: "Inter, sans-serif",
    padding: "10px 5px",
    border: "0.5px solid black"
}
export default function () {
    return (
        <>
            <ul>
                {foodItems.map((item, index) => <li style={listClass} key={index}>{item}</li>)}
            </ul>
        </>
    )
}