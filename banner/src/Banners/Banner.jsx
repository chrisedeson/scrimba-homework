import { useState } from "react"

export default function Banner({ children, ...rest }) {
    const [ message, displayMessage ] = useState(rest.message)
    
    function handleClick() {
        displayMessage(currentMessage => (
            currentMessage ? "" : rest.message
        ))
    }

    const generalStyles = {
        backgroundColor: rest.backgroundColor,
        color: rest.textColor,
    }

    return(
        <>
            <div className="banner-container">
                <h2 className="status">{children}</h2>
                <div onClick={handleClick} className="banner" id="bannerDiv" style={generalStyles}>
                    <div className="icon" style={{color: rest.iconColor}}>{rest.icon}</div>
                    <div className="content-wrapper" >
                        <h3 className="title" style={{color: rest.textColor}}>{rest.title}</h3>
                        <p className="message">{message}</p>
                    </div>
                </div>
            </div> 
        </>
    )
}