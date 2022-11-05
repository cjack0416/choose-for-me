import { useState } from "react";
import CircleButton from "./CircleButton";
import Options from "./Options";
import "./index.css";
import { v4 as uuidv4 } from "uuid";

export default function PickOptionsContainer() {
    const [options, setOptions] = useState([
        {
            createOption
        },
        {
            createOption
        }
    ])

    function createOption() {
        return { divId: uuidv4(), inputId: uuidv4(), spanId: uuidv4(), buttonId: uuidv4(), hrId: uuidv4() }
    }

    function addOption() {
        setOptions(prevOptions => [...prevOptions, createOption()])
    }

    function subtractOption() {
        let newOptionArr = options.slice(0, options.length - 1)
        setOptions(newOptionArr)
    }

    return(
        <div className="options-container">
            <Options options={options} subtractOption={subtractOption}/>
            <div style={{display: "flex", justifyContent: "center", height:0}}>
                <CircleButton classname={"add-option-btn"} symbol={"+"} onclick={addOption}/>
            </div>
        </div>
    );
}