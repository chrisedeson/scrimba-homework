import Banner from "./Banner"

export default function WarningBanner({children}) {
    const title = "Attention"
    const message = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
    const iconColor = "#FBBF24"
    const titleColor = "#92400E"
    const textColor = "#B45309"
    const backgroundColor = "#FFFBEB"
    const icon = "⚠"

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