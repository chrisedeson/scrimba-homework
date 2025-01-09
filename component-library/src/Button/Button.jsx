import { useContext } from "react";
import { ColorContext } from "../App";

export default function Button({ children, index }) {  
    const { colorArr, backgroundColorArr } = useContext(ColorContext)

    const color = colorArr[index % colorArr.length]
    const backgroundColor = backgroundColorArr[index % backgroundColorArr.length]

    const style = {
      backgroundColor: backgroundColor,
      color: color,
    }

    return (
      <button style={style}>{children}</button>
    )
  }