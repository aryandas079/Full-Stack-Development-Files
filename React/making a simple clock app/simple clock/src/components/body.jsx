const date = new Date();
const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
})
const time = date.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
})
const format = {
    textAlign: "center",
    fontFamily: "Arial, Helvetica, sans-serif",
    fontSize: "1.75rem",
    fontWeight: "400px"
}
const spanStyle = {
    fontWeight: "700px",
    fontSize: "2rem"
}

export default function () {
    return (
        <>
            <div style={format}>
                <p>This is the clock that shows the time at all times</p>
                <p>Today is <span style={spanStyle}>{formattedDate} </span>and current time is <span style={spanStyle}>{time}</span></p>
            </div>
        </>
    )
}