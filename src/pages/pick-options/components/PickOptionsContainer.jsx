import { useState } from "react";
import "./index.css"
import Options from "./Options";

export default function PickOptionsContainer() {
    const [options, setOptions] = useState(["", ""])

    return(
        <div className="options-container">
            <Options options={options} setOption={setOptions}/>
        </div>
    );
}