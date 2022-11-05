import { useState } from "react";
import CircleButton from "./CircleButton";
import Options from "./Options";
import "./index.css"

export default function PickOptionsContainer() {
    const [optionCount, setOptionCount] = useState(2)

    function addOption() {
        setOptionCount(prevOptionCount => prevOptionCount + 1)
    }

    function subtractOptionCount() {
        setOptionCount(prevOptionCount => prevOptionCount - 1)
    }

    return(
        <div className="options-container">
            <Options optionCount={optionCount} subtractOptionCount={subtractOptionCount}/>
            <div style={{display: "flex", justifyContent: "center", height:0}}>
                <CircleButton classname={"add-option-btn"} symbol={"+"} onclick={addOption}/>
            </div>
        </div>
    );
}