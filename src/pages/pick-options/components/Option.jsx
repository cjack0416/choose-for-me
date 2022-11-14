import './index.css'

export default function Option({ elRef, optionsLength, index, indexChoice, subtractOption, inputClassName }) {

    function isSelectedOption() {
        if (index === indexChoice) {
            return elRef
        }
    }

    return(
        <>
            <ul className='option-flex'>
                <input ref={isSelectedOption()} className={inputClassName} placeholder={`option ${index + 1}`} type="text"/>
                { index > 1 &&
                <span>
                    <button className="delete-btn" onClick={event => subtractOption(event, index)}>&#10005;</button>
                </span> }
            </ul>
            <>
                { index !== optionsLength - 1 &&
                <hr/> }
            </>
        </>
    );
}