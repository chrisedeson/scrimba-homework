import ButtonPill from "./Button/ButtonPill"
import ButtonSquare from "./Button/ButtonSquare"

export default function Badge({ index }) {
    return (
        <>
            <div className="badge">
                <div className="button-square">
                    <ButtonSquare index={index}></ButtonSquare>
                </div>
                <div className="button-pill">
                    <ButtonPill index={index}></ButtonPill>
                </div>
            </div>
        </>
    )
}