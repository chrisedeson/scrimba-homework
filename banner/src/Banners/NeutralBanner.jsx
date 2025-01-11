import { HiInformationCircle } from "react-icons/hi"
import Banner from "./Banner"

export default function NeutralBanner({children}) {
    const title = "Update available!"
    const message = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
    const icon = <HiInformationCircle />
    const iconColor = "#60A5FA"
    const titleColor = "#1E40AF"
    const textColor = "#1C51B9"
    const backgroundColor = "#EFF6FF"
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