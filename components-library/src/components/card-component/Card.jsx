import { HiOutlineCloudUpload } from "react-icons/hi";
import styles from './CardApp.module.css'


export default function Card({ title, paragraph }) {

    return(
        <>
            <div className={styles.card}>
                <button className={styles.cardButton}><HiOutlineCloudUpload className={styles.icon}/></button>
                <h2 className={styles.CardsHeader2}>{title}</h2>
                <p className={styles.CardsParagraph}>{paragraph}</p>
            </div>
        </>
    )
}