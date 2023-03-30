import React, {Component} from "react"
import ReactDOM from "react-dom"
import Footer from "./components/Footer"
import Info from "./components/Info"
import About from "./components/About"
import Interest from "./components/Interest"

export default function App() {
    return (
        <div className="root">
            <Info />
            <Footer />
        </div>
    )
}