import Banner from "./Banner";
import { FaCheckCircle  } from "react-icons/fa"

export default function SuccessBanner({ children }) {
    const title = "Congratulations!"
    const message = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
    const icon = <FaCheckCircle  />
    const iconColor = "#34D399"
    const titleColor = "#065F46"
    const textColor = "#047857"
    const backgroundColor = "#ECFDF5"
    

    return(
        <>
            <Banner
                title={title}
                message={message}
                icon={icon}
                iconColor={iconColor}
                titleColor={titleColor}
                textColor={textColor}
                backgroundColor={backgroundColor}
                >
                    {children}
            </Banner>
        </>
    )
}