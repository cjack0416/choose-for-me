import PickOptionsContainer from "./components/PickOptionsContainer"
import CircleButton from "./components/CircleButton";
import { HiArrowLeft } from 'react-icons/hi'
import "./index.css"

export default function PickOptionsView() {
    return(
        <>
            <div className="top-container">
                <CircleButton classname='circle-btn back-btn' symbol={<HiArrowLeft/>}/>
            </div>
            <div className="main-container">
                <h2>Type your options and add more if necessary</h2>
                <PickOptionsContainer/>
            </div>
        </>
    );
}