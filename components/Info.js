import React from "react"
import About from "./About"
import Interest from "./Interest"

export default function Info() {
    return (
        <main className="main-content">
            <div>
                <img src="./images/aviad.jpeg" className="aviad"/>
            </div>
            <div className="info">
                <h1>Aviad Churaman</h1>
                <h2>Frontend Developer</h2>
                <div className="wrapper">
                    <a href="#" className="website">aviadchuraman.com</a>
                    <a href="mailto: aviadchuraman@gmail.com" className="email-button">Email</a>
                </div>
                <About />
                <Interest />
            </div>
        </main>
    )
}