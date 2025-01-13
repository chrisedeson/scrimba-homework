import { HiOutlineCloudUpload } from "react-icons/hi";

export default function Card({ title, paragraph }) {

    return(
        <>
            <div className="card">
                <button><HiOutlineCloudUpload className="icon"/></button>
                <h2>{title}</h2>
                <p>{paragraph}</p>
            </div>
        </>
    )
}