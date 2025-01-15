import { useState } from "react"
import styles from '../BannerApp.module.css'

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
            <div className={styles.bannerContainer}>
                <h2 className={styles.status}>{children}</h2>
                <div onClick={handleClick} className={styles.banner} id={styles.bannerDiv} style={generalStyles}>
                    <div className={styles.icon} style={{color: rest.iconColor}}>{rest.icon}</div>
                    <div className={styles.contentWrapper} >
                        <h3 className={styles.title} style={{color: rest.textColor}}>{rest.title}</h3>
                        <p className={styles.message}>{message}</p>
                    </div>
                </div>
            </div> 
        </>
    )
}