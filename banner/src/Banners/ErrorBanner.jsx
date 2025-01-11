import { BiSolidXCircle } from "react-icons/bi";
import Banner from "./Banner"

export default function ErrorBanner({children}) {
    const title = "There is a problem with your application"
    const message = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
    const icon = <BiSolidXCircle />
    const iconColor = "#F87171"
    const titleColor = "#92400E"
    const textColor = "#B45309"
    const backgroundColor = "#FEF2F2"

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