import React from "react"
import parrot from "./assets/parrot.png"

export default function Header() {
    return(
        <header>
            <div className="heading">
                <img className="heading-img" src={parrot} alt="cartoon image of a Parrot" width="100" />
                <div className="title-container">
                    <h1 className="title">PollyGlot</h1>
                    <p className="title-description">Perfect Translation Every Time</p>
                </div>
            </div>
        </header>  
    )
}