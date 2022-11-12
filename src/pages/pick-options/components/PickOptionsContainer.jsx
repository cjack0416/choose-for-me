import { useState } from "react";
import CircleButton from "./CircleButton";
import OptionList from "./OptionList";
import "./index.css";
import { v4 as uuidv4 } from "uuid";

export default function PickOptionsContainer() {
    const [options, setOptions] = useState([ uuidv4(), uuidv4() ])

    function addOption() {
        setOptions(prevOptions => [...prevOptions, uuidv4()])
    }

    function subtractOption(event, index) {
        let newOptionArrHead = options.slice(0, index)
        if (index < options.length - 1) {
            let newOptionArrTail = options.slice(index + 1, options.length)
            let newOptionArrFinal = newOptionArrHead.concat(newOptionArrTail)
            setOptions(newOptionArrFinal)
            return
        }
        setOptions(newOptionArrHead)
    }

    return(
        <div className="options-container">
            <OptionList options={options} subtractOption={subtractOption}/>
            <div style={{display: "flex", justifyContent: "center", height:0}}>
                <CircleButton classname={"add-option-btn"} symbol={"+"} onclick={addOption}/>
            </div>
        </div>
    );
}