import Option from './Option'

export default function OptionsList({ elRef, options, subtractOption, indexChoice }) {
    let inputClassName = (index) => {
        return indexChoice === index ? "input-selected-color" : "input-non-selected-color"
    }

    return(
        <>
            {options.map((option, index) => 
                (
                <Option elRef={elRef}
                        optionsLength={options.length} 
                        index={index}
                        indexChoice={indexChoice} 
                        subtractOption={subtractOption}
                        inputClassName = {inputClassName(index)}
                        key={option} />
                ))
            }
        </>
    );
}