import PickOptionsContainer from "./components/PickOptionsContainer"
import CircleButton from "./components/CircleButton"
import { HiArrowLeft } from 'react-icons/hi'
import "./index.css"

export default function PickOptionsView() {
    return(
        <>
            <div className="top-container">
                <CircleButton classname='back-btn' symbol={<HiArrowLeft/>}/>
            </div>
            <div className="pick-option-main-container">
                <h2 style={{ textAlign: "center" }}>Type your options and add more if you need to</h2>
            </div>
            <div className="pick-option-main-container">
                <PickOptionsContainer/>
            </div>
        </>
    );
}