import React from 'react'

export default function Score(props) {
    return (
        <div>
            <img style={{ width: "100%", opacity: "65%" }} src="/celebration.png" />
            <h2 style={{ textAlign: "center", opacity: "90%" }}>You scored {props.score} out of 10</h2>
        </div>
    )
}
