import { useState, useRef, useEffect } from "react"
import PickOptionsContainer from "./components/PickOptionsContainer"
import CircleButton from "./components/CircleButton"
import Button from "../../components/Button"
import { HiArrowLeft } from 'react-icons/hi'
import "./index.css"
import Loading from "../../components/Loading"

export default function PickOptionsView() {
    const [indexChoice, setIndexChoice] = useState(-1)
    const [isLoading, setIsLoading] = useState(false)

    const ref = useRef(null)
    const btnText = useRef("choose")
    const optionCount = useRef(2)
    const didMount = useRef(false)
    const chooseBtn = useRef(null)

    const btnWidth = "6em", btnHeight = "2.5em", loadingTime = 3000

    useEffect(() => {
        if (!isLoading && didMount.current) {
            setIndexChoice(Math.floor(Math.random() * optionCount.current))
            btnText.current = "retry"
        }
    }, [isLoading])

    useEffect(() => {
        if (ref.current !== null) {
            const elRect = ref.current.getBoundingClientRect()
            const absoluteElTop = elRect.top + window.pageYOffset
            const middle = absoluteElTop - (window.innerHeight / 2)
            window.scrollTo({left: 0, top: middle, behavior: "smooth"})
        }
    }, [indexChoice])

    function updateOptionCount( newOptionCount ) {
        optionCount.current = newOptionCount
        btnText.current = "choose"
        setIndexChoice(-1)
    }

    function onChoose() {
        setIsLoading(true)
        didMount.current = true
    }

    return(
        <>
            <div className="top-container">
                <CircleButton classname='back-btn' symbol={<HiArrowLeft/>}/>
            </div>
            <div className="pick-option-container">
                <h2 style={{ textAlign: "center" }}>Type your options and add more if you need to</h2>
            </div>
            <div className="pick-option-container">
                <PickOptionsContainer elRef={ref} updateOptionCount = {updateOptionCount} indexChoice = {indexChoice}/>
            </div>
                {isLoading &&
                <div className="pick-option-container" style={{margin: "0", position: "relative", height: "0"}}> 
                    <Loading setIsLoading={setIsLoading} loadingTime={loadingTime}/>
                </div>
                }
            <div className="pick-option-container">
                <Button classname={'btn choose-btn'} ref={chooseBtn} text={btnText.current} width={btnWidth} height={btnHeight} onClick={onChoose}/>
            </div>
        </>
    );
}