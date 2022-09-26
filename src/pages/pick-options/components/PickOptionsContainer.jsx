import { useState } from "react";
import CircleButton from "./CircleButton";
import Options from "./Options";
import "./index.css"

export default function PickOptionsContainer() {
    const [options, setOptions] = useState(["", ""])

    function addOption() {
        setOptions(prevOptions => ([...prevOptions, ""]))
    }

    function removeOption() {
        let len = options.length
        let arr = options.slice(0, len - 1)
        setOptions(arr)
    }

    return(
        <div className="options-container">
            <Options options={options} setOption={setOptions} removeOption={removeOption}/>
            <div style={{display: "flex", justifyContent: "center", height:0}}>
                <CircleButton classname={"add-option-btn"} symbol={"+"} onclick={addOption}/>
            </div>
        </div>
    );
}