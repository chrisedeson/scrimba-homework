import { createContext } from "react"
import Badge from "./Badge"
import styles from './BadgeApp.module.css'

const ColorContext = createContext()

const backgroundColorArr = ["#F3F4F6", "#FEE2E2", "#FEF3C7", "#D1FAE5",
  "#DBEAFE", "#E0E7FF", "#EDE9FE", "#FCE7F3"]

const colorArr = ["#1F2937", "#991B1B", "#92400E", "#065F46", "#1E40AF",
  "#3730A3", "#5B21B6", "#9D174D"]


function BadgeApp() {

  return (
    <>
      <h1 className={styles.title}>BADGES</h1>

      <ColorContext.Provider value={{ colorArr, backgroundColorArr }}>
        <div className={styles.badgeBlock}>
          <div className={styles.subHeading}>
            <p>Square</p>
            <p>Pill</p>
          </div>
          { colorArr.map((color, index) => (
              <Badge key={color} index={index}></Badge>
            ))
          }
        </div>
      </ColorContext.Provider>
    </>
  )
}

export { ColorContext }

export default BadgeApp
