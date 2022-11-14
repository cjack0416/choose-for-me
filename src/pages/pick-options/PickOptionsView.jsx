import { useState, useRef, useEffect } from "react"
import PickOptionsContainer from "./components/PickOptionsContainer"
import CircleButton from "./components/CircleButton"
import Button from "../../components/Button"
import { HiArrowLeft } from 'react-icons/hi'
import "./index.css"

export default function PickOptionsView() {
    const [indexChoice, setIndexChoice] = useState(-1)
    const [btnText, setBtnText] = useState("choose")
    const [optionCount, setOptionCount] = useState(2)

    const ref = useRef(null)

    const btnWidth = "6em", btnHeight = "2.5em"

    useEffect(() => {
        if (ref.current !== null) {
            const elRect = ref.current.getBoundingClientRect()
            const absoluteElTop = elRect.top + window.pageYOffset
            const middle = absoluteElTop - (window.innerHeight / 2)
            window.scrollTo({left: 0, top: middle, behavior: "smooth"})
        }
    }, [indexChoice])

    function updateOptionCount( newOptionCount ) {
        setOptionCount(newOptionCount)
        setIndexChoice(-1)
        setBtnText("choose")
    }

    function onChoose() {
        console.log(optionCount)
        setIndexChoice(Math.floor(Math.random() * optionCount))
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
                <PickOptionsContainer elRef={ref} updateOptionCount = {updateOptionCount} indexChoice = {indexChoice}/>
            </div>
            <div className="pick-option-main-container">
                <Button classname={'btn choose-btn'} text={btnText} width={btnWidth} height={btnHeight} onClick={onChoose}/>
            </div>
        </>
    );
}