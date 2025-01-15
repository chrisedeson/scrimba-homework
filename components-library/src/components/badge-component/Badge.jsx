import ButtonPill from "./Button/ButtonPill"
import ButtonSquare from "./Button/ButtonSquare"
import styles from './BadgeApp.module.css'


export default function Badge({ index }) {
    return (
        <>
            <div className={styles.badge}>
                <div className={styles.buttonSquare}>
                    <ButtonSquare index={index}></ButtonSquare>
                </div>
                <div className={styles.buttonPill}>
                    <ButtonPill index={index}></ButtonPill>
                </div>
            </div>
        </>
    )
}