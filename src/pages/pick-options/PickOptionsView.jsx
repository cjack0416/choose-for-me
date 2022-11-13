import { useState } from "react"
import PickOptionsContainer from "./components/PickOptionsContainer"
import CircleButton from "./components/CircleButton"
import Button from "../../components/Button"
import { HiArrowLeft } from 'react-icons/hi'
import "./index.css"

export default function PickOptionsView() {
    const [indexChoice, setIndexChoice] = useState(-1)
    const [btnText, setBtnText] = useState("choose")

    const btnWidth = "6em", btnHeight = "2.5em"
    let optionCount = 2

    function updateOptionCount( newOptionCount ) {
        optionCount = newOptionCount
    }

    function onChoose() {
        let newIndexChoice = Math.floor(Math.random() * optionCount)
        while (newIndexChoice === indexChoice) {
            newIndexChoice = Math.floor(Math.random() * optionCount)
        }

        setIndexChoice(newIndexChoice)
        setBtnText("retry")
    }

    return(
        <>
            <div className="top-container">
                <CircleButton classname='back-btn' symbol={<HiArrowLeft/>}/>
            </div>
            <div className="pick-option-main-container">
                <h2 style={{ textAlign: "center" }}>Type your options and add more if you need to</h2>
            </div>
            <div className="pick-option-main-container">
                <PickOptionsContainer updateOptionCount = {updateOptionCount} indexChoice = {indexChoice}/>
            </div>
            <div className="pick-option-main-container">
                <Button classname={'btn choose-btn'} text={btnText} width={btnWidth} height={btnHeight} onClick={onChoose}/>
            </div>
        </>
    );
}