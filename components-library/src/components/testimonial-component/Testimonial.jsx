import { RiDoubleQuotesL } from "react-icons/ri";
import { FaLandmark } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Testimonial({ ...rest }) {
    const [showFirstContent, setShowFirstContent] = useState(true);
    const [animationClass, setAnimationClass] = useState("fade-in");
    const [imageSize, setImageSize] = useState(window.matchMedia('(min-width: 700px)').matches ? rest.image : rest.img);

    // Handle window resize and update image size
    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 700px)');
        
        const handleResize = () => {
            setImageSize(mediaQuery.matches ? rest.image : rest.img);
        };

        // Add event listener to update image when the window is resized
        mediaQuery.addListener(handleResize);

        // Cleanup on component unmount
        return () => mediaQuery.removeListener(handleResize);
    }, [rest.image, rest.img]); // Re-run if image sources change

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimationClass("fade-out");

            // Wait for the fade-out animation to complete before switching content
            setTimeout(() => {
                setShowFirstContent((prev) => !prev);
                setAnimationClass("fade-in");
            }, 1500); // Match the duration of the fade-out animation
        }, 10000); // Change content every 10 seconds

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);

    return (
        <div className="cards">
            {showFirstContent ? (
                <div className={`first-content ${animationClass}`}>
                    <div className="img-container">
                        <img src={imageSize} alt={rest.alt} />
                    </div>
                    <div className="spacer"></div>

                    <div className="card">
                        <i><RiDoubleQuotesL /></i>
                        <p className="write-up">{rest.writing}</p>

                        <div className="identity">
                            <p className="name">{rest.name}</p>
                            <p className="company">{rest.company}</p>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={`second-content ${animationClass}`}>
                    <div className="card second-card">
                        <div className="icon-container">
                            <FaLandmark className="work-icon" />
                            <h2>Work<span>cation</span></h2>
                        </div>
                        <p className="write-up">"{rest.writing}"</p>
                        <div className="identity">
                            <p className="name">{rest.name}</p>
                            <p className="company">{rest.company}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
